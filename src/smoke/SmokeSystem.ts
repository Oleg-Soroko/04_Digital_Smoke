import * as THREE from "three";
import { normalizeSeed, SeededRandom } from "../utils/rng";
import { DEFAULT_SMOKE_PARAMS, SMOKE_PARAM_LIMITS, type SmokeParams } from "./types";

const PRESSURE_SCALE = 0.05;
const DIVERGENCE_SCALE = 0.2;
const CURL_SCALE = 0.08;
const DEFAULT_SEED_IMAGE_CANDIDATES = [
  "seed-default.png",
  "seed-default.jpg",
  "seed-default.jpeg",
  "seed.png",
  "seed.jpg",
  "seed.jpeg"
];
const DEFAULT_SEED_VIDEO_CANDIDATES = [
  "seed-default_03.mp4",
  "seed-default_03.webm",
  "seed.mp4",
  "seed.webm"
];
const DEFAULT_SEED_MORPH_CANDIDATES = [
  "seed-default_02.png",
  "seed-default_02.jpg",
  "seed-default_02.jpeg"
];

function normalizePersistenceSlider(value: number): number {
  const limits = SMOKE_PARAM_LIMITS.persistence;
  const span = Math.max(limits.max - limits.min, 1e-6);
  return THREE.MathUtils.clamp((value - limits.min) / span, 0, 1);
}

function clampValue(key: keyof SmokeParams, value: number): number {
  const limits = SMOKE_PARAM_LIMITS[key];
  return Math.min(limits.max, Math.max(limits.min, value));
}

function clampParams(params: SmokeParams): SmokeParams {
  const asciiStyle = Math.round(clampValue("asciiStyle", params.asciiStyle));
  const asciiLayers = Math.round(clampValue("asciiLayers", params.asciiLayers));
  const depthLayers = Math.round(clampValue("depthLayers", params.depthLayers));

  return {
    simResolution: Math.round(clampValue("simResolution", params.simResolution) / 32) * 32,
    emitRate: clampValue("emitRate", params.emitRate),
    seedInfluence: clampValue("seedInfluence", params.seedInfluence),
    seedContrast: clampValue("seedContrast", params.seedContrast),
    seedHue: clampValue("seedHue", params.seedHue),
    seedColorFilter: clampValue("seedColorFilter", params.seedColorFilter),
    seedParallax: clampValue("seedParallax", params.seedParallax),
    seedPulseShift: clampValue("seedPulseShift", params.seedPulseShift),
    seedPulseSpeed: clampValue("seedPulseSpeed", params.seedPulseSpeed),
    seedPointBrightness: clampValue("seedPointBrightness", params.seedPointBrightness),
    seedPointSize: clampValue("seedPointSize", params.seedPointSize),
    seedPointContrast: clampValue("seedPointContrast", params.seedPointContrast),
    seedPointerInfluence: clampValue("seedPointerInfluence", params.seedPointerInfluence),
    planeTilt: clampValue("planeTilt", params.planeTilt),
    planeTiltEase: clampValue("planeTiltEase", params.planeTiltEase),
    sourceRadius: clampValue("sourceRadius", params.sourceRadius),
    densityDissipation: clampValue("densityDissipation", params.densityDissipation),
    velocityDissipation: clampValue("velocityDissipation", params.velocityDissipation),
    buoyancy: clampValue("buoyancy", params.buoyancy),
    vorticity: clampValue("vorticity", params.vorticity),
    pressureIterations: Math.round(clampValue("pressureIterations", params.pressureIterations)),
    noiseScale: clampValue("noiseScale", params.noiseScale),
    turbulence: clampValue("turbulence", params.turbulence),
    advection: clampValue("advection", params.advection),
    drag: clampValue("drag", params.drag),
    opacity: clampValue("opacity", params.opacity),
    contrast: clampValue("contrast", params.contrast),
    persistence: clampValue("persistence", params.persistence),
    detailBoost: clampValue("detailBoost", params.detailBoost),
    shadowBoost: clampValue("shadowBoost", params.shadowBoost),
    highlightBoost: clampValue("highlightBoost", params.highlightBoost),
    depthAmount: clampValue("depthAmount", params.depthAmount),
    depthLayers,
    lightStrength: clampValue("lightStrength", params.lightStrength),
    rimStrength: clampValue("rimStrength", params.rimStrength),
    asciiScale: Math.round(clampValue("asciiScale", params.asciiScale)),
    asciiLayers,
    asciiBlend: clampValue("asciiBlend", params.asciiBlend),
    asciiMix: clampValue("asciiMix", params.asciiMix),
    asciiJitter: clampValue("asciiJitter", params.asciiJitter),
    asciiSpacingX: clampValue("asciiSpacingX", params.asciiSpacingX),
    asciiSpacingY: clampValue("asciiSpacingY", params.asciiSpacingY),
    asciiThreshold: clampValue("asciiThreshold", params.asciiThreshold),
    asciiFlowDistort: clampValue("asciiFlowDistort", params.asciiFlowDistort),
    asciiStyle,
    pointerDarkness: clampValue("pointerDarkness", params.pointerDarkness),
    pointerForce: clampValue("pointerForce", params.pointerForce),
    pointerRadius: clampValue("pointerRadius", params.pointerRadius),
    pointerTrail: clampValue("pointerTrail", params.pointerTrail)
  };
}

type PingPong = {
  read: THREE.WebGLRenderTarget;
  write: THREE.WebGLRenderTarget;
};

function swap(target: PingPong): void {
  const temp = target.read;
  target.read = target.write;
  target.write = temp;
}

function createVertexShader(): string {
  return /* glsl */ `
varying vec2 vUv;

void main() {
  vUv = uv;
  gl_Position = vec4(position.xy, 0.0, 1.0);
}
`;
}

function createAdvectVelocityFragment(): string {
  return /* glsl */ `
precision highp float;

varying vec2 vUv;

uniform sampler2D uSource;
uniform sampler2D uVelocity;
uniform vec2 uTexel;
uniform float uDt;
uniform float uDissipation;
uniform float uVelocityScale;

vec2 decodeVelocity(vec4 c) {
  return c.xy * 2.0 - 1.0;
}

vec4 encodeVelocity(vec2 v) {
  return vec4(v * 0.5 + 0.5, 0.0, 1.0);
}

void main() {
  vec2 vel = decodeVelocity(texture2D(uVelocity, vUv));
  vec2 coord = clamp(vUv - vel * uDt * uVelocityScale, vec2(0.0), vec2(1.0));
  vec2 advected = decodeVelocity(texture2D(uSource, coord));

  advected *= uDissipation;

  if (vUv.x < uTexel.x || vUv.x > 1.0 - uTexel.x) {
    advected.x = 0.0;
  }
  if (vUv.y < uTexel.y || vUv.y > 1.0 - uTexel.y) {
    advected.y = 0.0;
  }

  gl_FragColor = encodeVelocity(advected);
}
`;
}

function createAdvectDensityFragment(): string {
  return /* glsl */ `
precision highp float;

varying vec2 vUv;

uniform sampler2D uSource;
uniform sampler2D uVelocity;
uniform float uDt;
uniform float uDissipation;
uniform float uVelocityScale;

vec2 decodeVelocity(vec4 c) {
  return c.xy * 2.0 - 1.0;
}

void main() {
  vec2 vel = decodeVelocity(texture2D(uVelocity, vUv));
  vec2 coord = clamp(vUv - vel * uDt * uVelocityScale, vec2(0.0), vec2(1.0));
  float density = texture2D(uSource, coord).r;
  density *= uDissipation;

  gl_FragColor = vec4(clamp(density, 0.0, 1.0), 0.0, 0.0, 1.0);
}
`;
}

function createForcesFragment(): string {
  return /* glsl */ `
precision highp float;

varying vec2 vUv;

uniform sampler2D uVelocity;
uniform sampler2D uDensity;
uniform sampler2D uSeedImage;
uniform sampler2D uSeedImageMorph;
uniform vec2 uTexel;
uniform vec2 uResolution;
uniform vec2 uSeedSize;
uniform vec2 uSeedMorphSize;
uniform float uSeedMorph;
uniform float uDt;
uniform float uBuoyancy;
uniform float uDrag;
uniform float uNoiseScale;
uniform float uTurbulence;
uniform float uSeedInfluence;
uniform float uSeedContrast;
uniform float uTime;
uniform vec2 uSeed;

vec2 decodeVelocity(vec4 c) {
  return c.xy * 2.0 - 1.0;
}

vec4 encodeVelocity(vec2 v) {
  return vec4(v * 0.5 + 0.5, 0.0, 1.0);
}

float hash21(vec2 p) {
  p = fract(p * vec2(234.34, 435.345));
  p += dot(p, p + 34.23);
  return fract(p.x * p.y);
}

float noise2(vec2 p) {
  vec2 i = floor(p);
  vec2 f = fract(p);
  vec2 u = f * f * (3.0 - 2.0 * f);

  float a = hash21(i);
  float b = hash21(i + vec2(1.0, 0.0));
  float c = hash21(i + vec2(0.0, 1.0));
  float d = hash21(i + vec2(1.0, 1.0));

  return mix(mix(a, b, u.x), mix(c, d, u.x), u.y);
}

vec2 toSeedUvContain(vec2 uv, vec2 seedSize) {
  if (seedSize.x < 1.0 || seedSize.y < 1.0) {
    return vec2(-1.0);
  }

  float viewAspect = uResolution.x / max(uResolution.y, 1.0);
  float seedAspect = seedSize.x / max(seedSize.y, 1.0);
  vec2 suv = uv;

  if (viewAspect > seedAspect) {
    float fit = seedAspect / viewAspect;
    suv.x = (uv.x - 0.5) / max(fit, 1e-6) + 0.5;
  } else {
    float fit = viewAspect / seedAspect;
    suv.y = (uv.y - 0.5) / max(fit, 1e-6) + 0.5;
  }

  if (suv.x < 0.0 || suv.x > 1.0 || suv.y < 0.0 || suv.y > 1.0) {
    return vec2(-1.0);
  }

  return suv;
}

float sampleSeedA(vec2 uv) {
  vec2 suv = toSeedUvContain(uv, uSeedSize);
  if (suv.x < 0.0 || suv.y < 0.0) {
    return 0.0;
  }

  vec3 seedRgb = texture2D(uSeedImage, suv).rgb;
  return dot(seedRgb, vec3(0.299, 0.587, 0.114));
}

float sampleSeedB(vec2 uv, float fallback) {
  vec2 suv = toSeedUvContain(uv, uSeedMorphSize);
  if (suv.x < 0.0 || suv.y < 0.0) {
    return fallback;
  }

  vec3 seedRgb = texture2D(uSeedImageMorph, suv).rgb;
  return dot(seedRgb, vec3(0.299, 0.587, 0.114));
}

float sampleSeedContain(vec2 uv) {
  float seedA = sampleSeedA(uv);
  float seedB = sampleSeedB(uv, seedA);
  float seedLuma = mix(seedA, seedB, clamp(uSeedMorph, 0.0, 1.0));
  return clamp((seedLuma - 0.5) * uSeedContrast + 0.5, 0.0, 1.0);
}

void main() {
  vec2 velocity = decodeVelocity(texture2D(uVelocity, vUv));
  float density = texture2D(uDensity, vUv).r;
  float smokeMask = smoothstep(0.001, 0.32, density);
  float seedRaw = sampleSeedContain(vUv);
  float seedMask = smoothstep(0.14, 0.92, pow(clamp(seedRaw, 0.0, 1.0), 0.9));

  vec2 nUv = vUv * (3.0 + uNoiseScale * 2.5) + uSeed + vec2(0.0, uTime * 0.15);
  float n1 = noise2(nUv);
  float n2 = noise2(nUv + vec2(7.1, -3.4));
  vec2 noiseForce = vec2(n1 - 0.5, n2 - 0.5);
  noiseForce *= (0.02 + density * 0.46) * uNoiseScale * uTurbulence * smokeMask;
  float seedNoise = noise2(nUv * 1.85 + vec2(4.7, -2.3));
  vec2 seedForce = vec2(seedNoise - 0.5, 1.0 + abs(n1 - 0.5) * 1.35);
  seedForce *= seedMask * uSeedInfluence * (0.8 + uTurbulence * 0.22);

  velocity += noiseForce * uDt;
  velocity += seedForce * uDt * 1.5;
  velocity.y += density * 1.25 * uBuoyancy * uDt;
  velocity *= max(0.0, 1.0 - uDrag * uDt);

  if (vUv.x < uTexel.x || vUv.x > 1.0 - uTexel.x) {
    velocity.x = 0.0;
  }
  if (vUv.y < uTexel.y || vUv.y > 1.0 - uTexel.y) {
    velocity.y = 0.0;
  }

  gl_FragColor = encodeVelocity(clamp(velocity, vec2(-2.0), vec2(2.0)));
}
`;
}
function createCurlFragment(): string {
  return /* glsl */ `
precision highp float;

varying vec2 vUv;

uniform sampler2D uVelocity;
uniform vec2 uTexel;
uniform float uCurlScale;

vec2 decodeVelocity(vec4 c) {
  return c.xy * 2.0 - 1.0;
}

float encodeSigned(float v, float scale) {
  return clamp(v * scale + 0.5, 0.0, 1.0);
}

void main() {
  vec2 velL = decodeVelocity(texture2D(uVelocity, clamp(vUv - vec2(uTexel.x, 0.0), vec2(0.0), vec2(1.0))));
  vec2 velR = decodeVelocity(texture2D(uVelocity, clamp(vUv + vec2(uTexel.x, 0.0), vec2(0.0), vec2(1.0))));
  vec2 velB = decodeVelocity(texture2D(uVelocity, clamp(vUv - vec2(0.0, uTexel.y), vec2(0.0), vec2(1.0))));
  vec2 velT = decodeVelocity(texture2D(uVelocity, clamp(vUv + vec2(0.0, uTexel.y), vec2(0.0), vec2(1.0))));

  float curl = 0.5 * ((velR.y - velL.y) - (velT.x - velB.x));
  gl_FragColor = vec4(encodeSigned(curl, uCurlScale), 0.0, 0.0, 1.0);
}
`;
}

function createVorticityFragment(): string {
  return /* glsl */ `
precision highp float;

varying vec2 vUv;

uniform sampler2D uVelocity;
uniform sampler2D uCurl;
uniform vec2 uTexel;
uniform float uDt;
uniform float uVorticity;
uniform float uCurlScale;

vec2 decodeVelocity(vec4 c) {
  return c.xy * 2.0 - 1.0;
}

float decodeSigned(float c, float scale) {
  return (c - 0.5) / max(scale, 1e-6);
}

vec4 encodeVelocity(vec2 v) {
  return vec4(v * 0.5 + 0.5, 0.0, 1.0);
}

void main() {
  vec2 velocity = decodeVelocity(texture2D(uVelocity, vUv));

  float curlL = decodeSigned(texture2D(uCurl, clamp(vUv - vec2(uTexel.x, 0.0), vec2(0.0), vec2(1.0))).r, uCurlScale);
  float curlR = decodeSigned(texture2D(uCurl, clamp(vUv + vec2(uTexel.x, 0.0), vec2(0.0), vec2(1.0))).r, uCurlScale);
  float curlB = decodeSigned(texture2D(uCurl, clamp(vUv - vec2(0.0, uTexel.y), vec2(0.0), vec2(1.0))).r, uCurlScale);
  float curlT = decodeSigned(texture2D(uCurl, clamp(vUv + vec2(0.0, uTexel.y), vec2(0.0), vec2(1.0))).r, uCurlScale);
  float curlC = decodeSigned(texture2D(uCurl, vUv).r, uCurlScale);

  vec2 grad = vec2(abs(curlT) - abs(curlB), abs(curlR) - abs(curlL));
  float lengthGrad = max(length(grad), 1e-5);
  vec2 force = grad / lengthGrad;
  force *= curlC * uVorticity;

  velocity += force * uDt;
  gl_FragColor = encodeVelocity(clamp(velocity, vec2(-2.0), vec2(2.0)));
}
`;
}

function createSplatVelocityFragment(): string {
  return /* glsl */ `
precision highp float;

varying vec2 vUv;

uniform sampler2D uVelocity;
uniform vec2 uPoint;
uniform vec2 uAdd;
uniform float uRadius;
uniform float uGain;
uniform vec2 uTexel;

vec2 decodeVelocity(vec4 c) {
  return c.xy * 2.0 - 1.0;
}

vec4 encodeVelocity(vec2 v) {
  return vec4(v * 0.5 + 0.5, 0.0, 1.0);
}

float gaussian(vec2 uv, vec2 center, float radius) {
  vec2 q = (uv - center) / max(radius, 1e-5);
  return exp(-dot(q, q));
}

void main() {
  vec2 velocity = decodeVelocity(texture2D(uVelocity, vUv));
  float g = gaussian(vUv, uPoint, uRadius);

  velocity += uAdd * g * uGain;

  if (vUv.x < uTexel.x || vUv.x > 1.0 - uTexel.x) {
    velocity.x = 0.0;
  }
  if (vUv.y < uTexel.y || vUv.y > 1.0 - uTexel.y) {
    velocity.y = 0.0;
  }

  gl_FragColor = encodeVelocity(clamp(velocity, vec2(-2.0), vec2(2.0)));
}
`;
}

function createSplatDensityFragment(): string {
  return /* glsl */ `
precision highp float;

varying vec2 vUv;

uniform sampler2D uDensity;
uniform vec2 uPoint;
uniform float uRadius;
uniform float uValue;

float gaussian(vec2 uv, vec2 center, float radius) {
  vec2 q = (uv - center) / max(radius, 1e-5);
  return exp(-dot(q, q));
}

void main() {
  float density = texture2D(uDensity, vUv).r;
  float add = gaussian(vUv, uPoint, uRadius) * uValue;

  density = clamp(density + add, 0.0, 1.0);
  gl_FragColor = vec4(density, 0.0, 0.0, 1.0);
}
`;
}

function createDivergenceFragment(): string {
  return /* glsl */ `
precision highp float;

varying vec2 vUv;

uniform sampler2D uVelocity;
uniform vec2 uTexel;
uniform float uDivergenceScale;

vec2 decodeVelocity(vec4 c) {
  return c.xy * 2.0 - 1.0;
}

float encodeSigned(float v, float scale) {
  return clamp(v * scale + 0.5, 0.0, 1.0);
}

vec2 sampleVelocity(vec2 uv) {
  return decodeVelocity(texture2D(uVelocity, clamp(uv, vec2(0.0), vec2(1.0))));
}

void main() {
  vec2 velC = sampleVelocity(vUv);

  vec2 velL = vUv.x <= uTexel.x ? vec2(-velC.x, velC.y) : sampleVelocity(vUv - vec2(uTexel.x, 0.0));
  vec2 velR = vUv.x >= 1.0 - uTexel.x ? vec2(-velC.x, velC.y) : sampleVelocity(vUv + vec2(uTexel.x, 0.0));
  vec2 velB = vUv.y <= uTexel.y ? vec2(velC.x, -velC.y) : sampleVelocity(vUv - vec2(0.0, uTexel.y));
  vec2 velT = vUv.y >= 1.0 - uTexel.y ? vec2(velC.x, -velC.y) : sampleVelocity(vUv + vec2(0.0, uTexel.y));

  float divergence = 0.5 * ((velR.x - velL.x) + (velT.y - velB.y));
  gl_FragColor = vec4(encodeSigned(divergence, uDivergenceScale), 0.0, 0.0, 1.0);
}
`;
}

function createJacobiPressureFragment(): string {
  return /* glsl */ `
precision highp float;

varying vec2 vUv;

uniform sampler2D uPressure;
uniform sampler2D uDivergence;
uniform vec2 uTexel;
uniform float uPressureScale;
uniform float uDivergenceScale;

float decodeSigned(float c, float scale) {
  return (c - 0.5) / max(scale, 1e-6);
}

float encodeSigned(float v, float scale) {
  return clamp(v * scale + 0.5, 0.0, 1.0);
}

void main() {
  float pC = decodeSigned(texture2D(uPressure, vUv).r, uPressureScale);

  float pL = vUv.x <= uTexel.x
    ? pC
    : decodeSigned(texture2D(uPressure, vUv - vec2(uTexel.x, 0.0)).r, uPressureScale);
  float pR = vUv.x >= 1.0 - uTexel.x
    ? pC
    : decodeSigned(texture2D(uPressure, vUv + vec2(uTexel.x, 0.0)).r, uPressureScale);
  float pB = vUv.y <= uTexel.y
    ? pC
    : decodeSigned(texture2D(uPressure, vUv - vec2(0.0, uTexel.y)).r, uPressureScale);
  float pT = vUv.y >= 1.0 - uTexel.y
    ? pC
    : decodeSigned(texture2D(uPressure, vUv + vec2(0.0, uTexel.y)).r, uPressureScale);

  float div = decodeSigned(texture2D(uDivergence, vUv).r, uDivergenceScale);
  float nextPressure = (pL + pR + pB + pT - div) * 0.25;

  gl_FragColor = vec4(encodeSigned(nextPressure, uPressureScale), 0.0, 0.0, 1.0);
}
`;
}

function createSubtractGradientFragment(): string {
  return /* glsl */ `
precision highp float;

varying vec2 vUv;

uniform sampler2D uVelocity;
uniform sampler2D uPressure;
uniform vec2 uTexel;
uniform float uPressureScale;

vec2 decodeVelocity(vec4 c) {
  return c.xy * 2.0 - 1.0;
}

vec4 encodeVelocity(vec2 v) {
  return vec4(v * 0.5 + 0.5, 0.0, 1.0);
}

float decodeSigned(float c, float scale) {
  return (c - 0.5) / max(scale, 1e-6);
}

void main() {
  vec2 velocity = decodeVelocity(texture2D(uVelocity, vUv));

  float pC = decodeSigned(texture2D(uPressure, vUv).r, uPressureScale);

  float pL = vUv.x <= uTexel.x
    ? pC
    : decodeSigned(texture2D(uPressure, vUv - vec2(uTexel.x, 0.0)).r, uPressureScale);
  float pR = vUv.x >= 1.0 - uTexel.x
    ? pC
    : decodeSigned(texture2D(uPressure, vUv + vec2(uTexel.x, 0.0)).r, uPressureScale);
  float pB = vUv.y <= uTexel.y
    ? pC
    : decodeSigned(texture2D(uPressure, vUv - vec2(0.0, uTexel.y)).r, uPressureScale);
  float pT = vUv.y >= 1.0 - uTexel.y
    ? pC
    : decodeSigned(texture2D(uPressure, vUv + vec2(0.0, uTexel.y)).r, uPressureScale);

  velocity -= vec2(pR - pL, pT - pB) * 0.5;

  if (vUv.x < uTexel.x || vUv.x > 1.0 - uTexel.x) {
    velocity.x = 0.0;
  }
  if (vUv.y < uTexel.y || vUv.y > 1.0 - uTexel.y) {
    velocity.y = 0.0;
  }

  gl_FragColor = encodeVelocity(clamp(velocity, vec2(-2.0), vec2(2.0)));
}
`;
}
function createDisplayFragment(): string {
  return /* glsl */ `
precision highp float;

varying vec2 vUv;

uniform sampler2D uDensity;
uniform sampler2D uAsciiAtlas;
uniform sampler2D uVelocity;
uniform sampler2D uSeedImage;
uniform sampler2D uSeedImageMorph;
uniform vec2 uTexel;
uniform vec2 uResolution;
uniform vec2 uSeedSize;
uniform vec2 uSeedMorphSize;
uniform vec2 uPointerUv;
uniform float uTime;
uniform float uOpacity;
uniform float uContrast;
uniform float uPersistence;
uniform float uDetailBoost;
uniform float uShadowBoost;
uniform float uHighlightBoost;
uniform float uAsciiScale;
uniform float uAsciiLayers;
uniform float uAsciiBlend;
uniform float uAsciiMix;
uniform float uAsciiJitter;
uniform float uAsciiSpacingX;
uniform float uAsciiSpacingY;
uniform float uAsciiThreshold;
uniform float uAsciiFlowDistort;
uniform float uAsciiStyle;
uniform float uSeedInfluence;
uniform float uSeedContrast;
uniform float uSeedHue;
uniform float uSeedColorFilter;
uniform float uSeedParallax;
uniform float uSeedPulseShift;
uniform float uSeedPulseSpeed;
uniform float uSeedPointBrightness;
uniform float uSeedPointSize;
uniform float uSeedPointContrast;
uniform float uSeedPointerInfluence;
uniform float uSeedVisible;
uniform float uSeedMorph;
uniform float uSeedBgOpacity;
uniform float uPointerRadius;
uniform float uPointerActive;

float hash21(vec2 p) {
  p = fract(p * vec2(123.34, 456.21));
  p += dot(p, p + 45.32);
  return fract(p.x * p.y);
}

vec3 hueToRgb(float hue) {
  vec3 rgb = clamp(abs(mod(hue * 6.0 + vec3(0.0, 4.0, 2.0), 6.0) - 3.0) - 1.0, 0.0, 1.0);
  return rgb * rgb * (3.0 - 2.0 * rgb);
}

vec2 decodeVelocity(vec4 c) {
  return c.xy * 2.0 - 1.0;
}

vec2 toSeedUvContain(vec2 uv, vec2 seedSize) {
  if (uSeedVisible < 0.5 || seedSize.x < 1.0 || seedSize.y < 1.0) {
    return vec2(-1.0);
  }

  float viewAspect = uResolution.x / max(uResolution.y, 1.0);
  float seedAspect = seedSize.x / max(seedSize.y, 1.0);
  vec2 suv = uv;

  if (viewAspect > seedAspect) {
    float fit = seedAspect / viewAspect;
    suv.x = (uv.x - 0.5) / max(fit, 1e-6) + 0.5;
  } else {
    float fit = viewAspect / seedAspect;
    suv.y = (uv.y - 0.5) / max(fit, 1e-6) + 0.5;
  }

  if (suv.x < 0.0 || suv.x > 1.0 || suv.y < 0.0 || suv.y > 1.0) {
    return vec2(-1.0);
  }

  return suv;
}

float sampleSeedA(vec2 uv) {
  vec2 suv = toSeedUvContain(uv, uSeedSize);
  if (suv.x < 0.0 || suv.y < 0.0) {
    return 0.0;
  }

  vec3 seedRgb = texture2D(uSeedImage, suv).rgb;
  return dot(seedRgb, vec3(0.299, 0.587, 0.114));
}

float sampleSeedB(vec2 uv, float fallback) {
  vec2 suv = toSeedUvContain(uv, uSeedMorphSize);
  if (suv.x < 0.0 || suv.y < 0.0) {
    return fallback;
  }

  vec3 seedRgb = texture2D(uSeedImageMorph, suv).rgb;
  return dot(seedRgb, vec3(0.299, 0.587, 0.114));
}

float sampleSeedContain(vec2 uv) {
  float seedA = sampleSeedA(uv);
  float seedB = sampleSeedB(uv, seedA);
  float seedLuma = mix(seedA, seedB, clamp(uSeedMorph, 0.0, 1.0));
  return clamp((seedLuma - 0.5) * uSeedContrast + 0.5, 0.0, 1.0);
}

float pointLayer(vec2 fragCoord, vec2 baseUv, float cellSize, float jitter, float densityCtrl, float seed) {
  float cell = max(1.0, cellSize);
  vec2 cellVec = vec2(
    cell * max(0.35, uAsciiSpacingX),
    cell * max(0.35, uAsciiSpacingY)
  );
  vec2 velAtPixel = decodeVelocity(texture2D(uVelocity, baseUv));
  float distort = 1.0 + uAsciiFlowDistort * (2.2 + densityCtrl * 1.5);
  float flowSpeed = 0.010 + densityCtrl * 0.018 + jitter * 0.006;
  vec2 flowCoord = fragCoord - velAtPixel * uResolution * flowSpeed * distort * (0.7 + seed * 0.06);
  float localDensity = texture2D(uDensity, baseUv).r;
  flowCoord += velAtPixel * uResolution * (0.002 + uAsciiFlowDistort * 0.011) * (0.22 + localDensity * 0.95);
  vec2 grid = floor(flowCoord / cellVec);
  vec2 local = fract(flowCoord / cellVec) - 0.5;

  vec2 jitterVec = vec2(
    hash21(grid + vec2(seed, 11.17)),
    hash21(grid + vec2(7.13, seed + 3.71))
  ) - 0.5;
  vec2 warpedGrid = grid + 0.5 + jitterVec * jitter * (1.2 + uAsciiFlowDistort * 1.4);
  vec2 sampleUv = clamp((warpedGrid * cellVec) / max(uResolution, vec2(1.0)), vec2(0.0), vec2(1.0));
  vec2 velAtCell = decodeVelocity(texture2D(uVelocity, sampleUv));
  sampleUv = clamp(
    sampleUv - velAtCell * (0.04 + densityCtrl * 0.09) * (1.0 + uAsciiFlowDistort * 3.0),
    vec2(0.0),
    vec2(1.0)
  );
  float density = texture2D(uDensity, sampleUv).r;

  float rnd = hash21(grid + vec2(seed * 1.37, seed * 2.41));
  float threshold = mix(0.92, 0.18, densityCtrl);
  float occupancy = smoothstep(threshold - 0.16, threshold + 0.16, density + (rnd - 0.5) * 0.22);
  float radius = length(local * (1.0 + (rnd - 0.5) * 0.4));
  float disc = 1.0 - smoothstep(0.06, 0.56, radius);
  float brightness = smoothstep(0.04, 0.96, density);

  return occupancy * disc * brightness;
}

float asciiLayer(vec2 fragCoord, vec2 baseUv, float cellSize, float jitter, float styleShift, float seed) {
  float cell = max(3.0, cellSize);
  vec2 cellVec = vec2(
    cell * max(0.35, uAsciiSpacingX),
    cell * max(0.35, uAsciiSpacingY)
  );
  vec2 velAtPixel = decodeVelocity(texture2D(uVelocity, baseUv));
  float flowDistort = 1.0 + uAsciiFlowDistort * 2.8;
  vec2 flowCoord = fragCoord - velAtPixel * uResolution * (0.007 + jitter * 0.003 + seed * 0.0012) * flowDistort;
  vec2 grid = floor(flowCoord / cellVec);
  vec2 local = fract(flowCoord / cellVec);

  vec2 jitterVec = vec2(
    hash21(grid + vec2(13.7 + seed, 2.3)),
    hash21(grid + vec2(3.1, 17.9 + seed))
  ) - 0.5;

  vec2 center = (grid + 0.5 + jitterVec * jitter * (0.55 + uAsciiFlowDistort * 0.95)) * cellVec;
  vec2 sampleUv = clamp(center / max(uResolution, vec2(1.0)), vec2(0.0), vec2(1.0));
  vec2 velAtCell = decodeVelocity(texture2D(uVelocity, sampleUv));
  sampleUv = clamp(sampleUv - velAtCell * (0.03 + jitter * 0.018) * (1.0 + uAsciiFlowDistort * 2.8), vec2(0.0), vec2(1.0));

  float density = texture2D(uDensity, sampleUv).r;
  float glyphIndex = floor(clamp(density * 15.999 + styleShift, 0.0, 15.0));
  float gx = mod(glyphIndex, 4.0);
  float gy = floor(glyphIndex / 4.0);
  vec2 atlasUv = (vec2(gx, gy) + vec2(local.x, 1.0 - local.y)) / 4.0;
  float glyph = texture2D(uAsciiAtlas, atlasUv).r;
  float glyphThreshold = clamp(uAsciiThreshold, 0.0, 1.0);
  glyph = smoothstep(glyphThreshold - 0.14, glyphThreshold + 0.14, glyph);
  float mask = smoothstep(0.04, 0.92, density);

  return glyph * mask;
}

float seedPointCloudLayer(vec2 fragCoord, vec2 baseUv) {
  if (uSeedVisible < 0.5 || uSeedSize.x < 1.0 || uSeedSize.y < 1.0) {
    return 0.0;
  }

  vec2 parallaxOffset = (vec2(0.5, 0.5) - uPointerUv) * uSeedParallax;
  vec2 parallaxPx = parallaxOffset * uResolution;

  float pulseSpeed = max(0.1, uSeedPulseSpeed);
  float breathSigned = sin(uTime * (0.45 + pulseSpeed * 0.85));
  float pulseStrength = clamp(uSeedPulseShift * 28.0, 0.0, 2.0);
  float pulse = max(0.55, 1.0 + breathSigned * 0.22 * pulseStrength);
  float pulseGain = max(0.2, 1.0 + abs(breathSigned) * 0.18 * pulseStrength);

  float pointSize = max(0.2, uSeedPointSize);
  float cell = max(1.5, uAsciiScale * 0.9 * pointSize);
  vec2 cellVec = vec2(
    cell * max(0.18, uAsciiSpacingX * 0.42),
    cell * max(0.18, uAsciiSpacingY * 0.42)
  );

  float seedAtBase = smoothstep(0.14, 0.94, sampleSeedContain(baseUv));
  vec2 chestCenter = vec2(0.5, 0.57);
  vec2 chestVec = baseUv - chestCenter;
  float chestMask = smoothstep(0.82, 0.08, length(chestVec * vec2(1.22, 0.78))) * seedAtBase;
  vec2 chestDir = normalize(chestVec + vec2(1e-5, 2e-5));
  float breathMotion = (0.0012 + 0.0065 * pulseStrength) * chestMask;
  vec2 breathOffsetUv = chestDir * breathSigned * breathMotion;
  breathOffsetUv.y -= breathSigned * breathMotion * 0.34;
  vec2 movedUv = clamp(baseUv + breathOffsetUv, vec2(0.0), vec2(1.0));

  vec2 vel = decodeVelocity(texture2D(uVelocity, movedUv));
  float density = texture2D(uDensity, movedUv).r;
  float localFlow = length(vel);
  float pointerRadius = max(0.004, uPointerRadius * 4.0);
  vec2 pointerDelta = movedUv - uPointerUv;
  float pointerDist = length(pointerDelta);
  float pointerFalloff = exp(-pow(pointerDist / pointerRadius, 2.0)) * uPointerActive;
  float pointerBoost = 1.0 + pointerFalloff * uSeedPointerInfluence * 1.6;
  float flowScale = 0.007 * (1.0 + uSeedInfluence * 0.25);
  vec2 flowCoord = (fragCoord - parallaxPx) - vel * uResolution * flowScale * (0.55 + density * 2.2);
  flowCoord += vec2(vel.y, -vel.x) * uResolution * (0.001 + density * 0.005) * (1.0 + uSeedInfluence * 0.35);
  flowCoord += vec2(-vel.y, vel.x) * uResolution * localFlow * 0.0028 * pointerBoost;
  flowCoord -= vel * uResolution * pointerFalloff * uSeedPointerInfluence * 0.018;
  flowCoord += breathOffsetUv * uResolution * (1.8 + pulseStrength * 0.5);
  vec2 grid = floor(flowCoord / cellVec);
  vec2 local = fract(flowCoord / cellVec) - 0.5;

  vec2 anchorGrid = floor((fragCoord - parallaxPx) / cellVec);
  vec2 jitterFlow = vec2(
    hash21(grid + vec2(19.17, 3.91)),
    hash21(grid + vec2(7.41, 13.73))
  ) - 0.5;
  vec2 jitterAnchor = vec2(
    hash21(anchorGrid + vec2(19.17, 3.91)),
    hash21(anchorGrid + vec2(7.41, 13.73))
  ) - 0.5;
  float densityFlowInfluence = smoothstep(0.02, 0.38, density);
  float pointerFlowInfluence = clamp(pointerFalloff * (0.3 + uSeedPointerInfluence * 0.45), 0.0, 1.0);
  float flowInfluence = clamp(max(densityFlowInfluence, pointerFlowInfluence), 0.0, 1.0);
  vec2 jitterVec = mix(jitterAnchor, jitterFlow, flowInfluence);
  vec2 flowWarped = grid + 0.5 + jitterVec * (0.42 + uAsciiJitter * 0.22);
  vec2 flowUv = clamp((flowWarped * cellVec) / max(uResolution, vec2(1.0)), vec2(0.0), vec2(1.0));
  vec2 flowVel = decodeVelocity(texture2D(uVelocity, flowUv));
  flowUv = clamp(flowUv - flowVel * (0.018 + density * 0.08), vec2(0.0), vec2(1.0));
  vec2 anchorWarped = anchorGrid + 0.5 + jitterAnchor * (0.42 + uAsciiJitter * 0.22);
  vec2 anchorUv = clamp((anchorWarped * cellVec) / max(uResolution, vec2(1.0)), vec2(0.0), vec2(1.0));

  float seedSampleAnchor = sampleSeedContain(anchorUv);
  float seedSampleFlow = sampleSeedContain(flowUv);
  float seedSample = mix(seedSampleAnchor, seedSampleFlow, flowInfluence);
  seedSample = clamp((seedSample - 0.5) * uSeedPointContrast + 0.5, 0.0, 1.0);
  float seedMask = smoothstep(0.18, 0.9, seedSample);

  float flowStretch = 1.0 + density * (0.55 + uSeedPointerInfluence * 0.15);
  float dotMask = 1.0 - smoothstep(
    0.10,
    0.58,
    length((local / (pulse * pointSize * flowStretch)) * (1.0 + jitterVec * 0.55))
  );
  float pointKeep = step(0.58, hash21(mix(anchorGrid, grid, flowInfluence) + vec2(29.1, 47.3)));
  return seedMask * dotMask * pointKeep * pulseGain * (1.0 + pointerFalloff * uSeedPointerInfluence * 0.6);
}

void main() {
  vec2 planeCoord = vUv * uResolution;
  float dC = texture2D(uDensity, vUv).r;
  float dL = texture2D(uDensity, vUv - vec2(uTexel.x, 0.0)).r;
  float dR = texture2D(uDensity, vUv + vec2(uTexel.x, 0.0)).r;
  float dB = texture2D(uDensity, vUv - vec2(0.0, uTexel.y)).r;
  float dT = texture2D(uDensity, vUv + vec2(0.0, uTexel.y)).r;

  float smoothD = mix(dC, (dL + dR + dB + dT) * 0.25, 0.42);
  vec2 grad = vec2(dR - dL, dT - dB);
  float edge = length(grad);
  float detail = edge * (1.0 + uDetailBoost * 2.2);

  float softKnee = smoothD / (smoothD + max(0.22, 0.40 - uHighlightBoost * 0.08));
  float contrastT = clamp((uContrast - 0.6) / 1.6, 0.0, 1.0);
  float gamma = max(0.35, mix(1.8, 0.68, contrastT) - uDetailBoost * 0.25);
  float body = pow(clamp(softKnee, 0.0, 1.0), gamma);
  float highlight = smoothstep(0.32 - uHighlightBoost * 0.12, 1.0, softKnee + detail * (0.20 + uHighlightBoost * 0.2));
  float shadow = smoothstep(0.02, 0.4, 1.0 - softKnee) * uShadowBoost * 0.45;
  float smoke = body * (0.66 + uHighlightBoost * 0.08) + highlight * (0.34 + uHighlightBoost * 0.46) - detail * (0.06 + uShadowBoost * 0.1) - shadow;
  smoke = clamp(smoke, 0.0, 1.0);

  float baseCell = max(1.0, uAsciiScale);
  float layers = clamp(floor(uAsciiLayers + 0.5), 1.0, 6.0);
  float densityCtrl = clamp(uAsciiBlend, 0.0, 2.0);
  float densityCtrlN = clamp(densityCtrl * 0.5, 0.0, 1.0);
  float pointJitter = uAsciiJitter;

  float pointField = 0.0;
  float pointWeight = 0.0;
  for (int i = 0; i < 6; i++) {
    float fi = float(i);
    if (fi >= layers) {
      break;
    }

    float layerT = fi / max(layers - 1.0, 1.0);
    float cell = baseCell * mix(0.58, 1.75, layerT);
    vec2 layerDrift = vec2(
      sin(uTime * 0.9 + fi * 2.1),
      cos(uTime * 0.73 + fi * 1.7)
    ) * pointJitter * (1.2 + fi * 0.8);
    vec2 layerUv = clamp(vUv + layerDrift * uTexel * (0.35 + fi * 0.08), vec2(0.0), vec2(1.0));

    float layer = pointLayer(
      planeCoord + layerDrift * cell,
      layerUv,
      cell,
      pointJitter * (0.6 + fi * 0.2),
      densityCtrlN,
      fi * 17.31 + 1.0
    );

    float w = exp(-fi * 0.45);
    pointField += layer * w;
    pointWeight += w;
  }
  pointField /= max(pointWeight, 1e-5);

  float pointSmoke = pointField * (0.26 + smoke * (1.2 + detail * 2.8));
  pointSmoke += detail * 0.08 * densityCtrlN;
  pointSmoke = clamp(pointSmoke, 0.0, 1.0);

  float asciiMixStrength = clamp(uAsciiMix, 0.0, 2.0);
  float asciiMix = clamp(asciiMixStrength * 0.5, 0.0, 1.0);
  float asciiInk = 0.0;
  if (asciiMix > 0.001) {
    float asciiLayers = clamp(min(layers, 4.0), 1.0, 4.0);
    float asciiWeight = 0.0;
    float style = clamp(uAsciiStyle, 0.0, 4.0);

    for (int i = 0; i < 4; i++) {
      float fi = float(i);
      if (fi >= asciiLayers) {
        break;
      }

      float layerT = fi / max(asciiLayers - 1.0, 1.0);
      float cell = max(3.0, baseCell * mix(2.1, 4.2, layerT));
      vec2 layerDrift = vec2(
        sin(uTime * 0.52 + fi * 1.31),
        cos(uTime * 0.47 + fi * 1.79)
      ) * pointJitter * (0.9 + fi * 0.5);
      vec2 layerUv = clamp(vUv + layerDrift * uTexel * (0.4 + fi * 0.08), vec2(0.0), vec2(1.0));

      float layer = asciiLayer(
        planeCoord + layerDrift * cell,
        layerUv,
        cell,
        pointJitter * (0.5 + fi * 0.16),
        style * 0.75 - fi * 0.38,
        2.0 + fi * 11.23
      );

      float w = exp(-fi * 0.55);
      asciiInk += layer * w;
      asciiWeight += w;
    }

    asciiInk /= max(asciiWeight, 1e-5);
    asciiInk *= (0.22 + smoke * (0.92 + detail * 1.7)) * (0.75 + asciiMixStrength * 0.55);
  }

  float bottomGate = smoothstep(0.0, 0.03, vUv.y);
  float topStart = mix(0.84, 0.995, uPersistence);
  float topFade = 1.0 - smoothstep(topStart, 1.0, vUv.y);
  float persistenceLift = mix(topFade * 0.9 + 0.1, 1.0, uPersistence * 0.8);
  float gate = bottomGate * persistenceLift;
  pointSmoke *= gate;
  asciiInk *= gate;
  float mixedSmoke = mix(pointSmoke, max(pointSmoke * 0.18, asciiInk), asciiMix);

  float style = clamp(uAsciiStyle, 0.0, 4.0);
  float styleBlend = smoothstep(1.0, 4.0, style);
  float scan = 0.5 + 0.5 * sin(planeCoord.y * 0.33 + uTime * 8.0);
  mixedSmoke *= 1.0 - styleBlend * 0.14 * scan;

  vec3 color = vec3(mixedSmoke);

  if (style > 1.5) {
    vec2 chromaShift = uTexel * (1.2 + uAsciiJitter * 6.0 + detail * 18.0);
    float rDensity = texture2D(uDensity, clamp(vUv + chromaShift, vec2(0.0), vec2(1.0))).r;
    float bDensity = texture2D(uDensity, clamp(vUv - chromaShift, vec2(0.0), vec2(1.0))).r;
    float chroma = (style - 1.5) * 0.35;

    color.r += rDensity * chroma * 0.18;
    color.b += bDensity * chroma * 0.14;
  }

  if (style > 2.5) {
    float glitchLine = step(0.993, hash21(vec2(floor(planeCoord.y * 0.25), floor(uTime * 30.0))));
    color += vec3(glitchLine * 0.35);
  }

  float filterAmount = clamp(abs(uSeedColorFilter), 0.0, 1.0);
  vec3 warmFilter = vec3(1.28, 0.86, 0.62);
  vec3 coolFilter = vec3(0.58, 0.88, 1.32);
  vec3 filterTarget = uSeedColorFilter >= 0.0 ? warmFilter : coolFilter;
  float globalFilterStrength = filterAmount * 0.68;
  float hueAmount = clamp(abs(uSeedHue), 0.0, 1.0);
  float hueWheel = fract(uSeedHue * 0.5 + 0.5);
  vec3 hueFilterTarget = mix(vec3(1.0), hueToRgb(hueWheel), 0.92);
  float hueStrength = hueAmount * 0.9;
  vec3 globalFilter = mix(vec3(1.0), filterTarget, globalFilterStrength);
  globalFilter = mix(globalFilter, globalFilter * hueFilterTarget, hueStrength);
  color *= globalFilter;

  float seedCloud = seedPointCloudLayer(planeCoord, vUv);
  float localFlow = length(decodeVelocity(texture2D(uVelocity, vUv)));
  float seedGlow = seedCloud * (0.58 + smoke * 0.42 + detail * 0.18 + localFlow * 0.16);
  float pointFilterStrength = min(1.0, globalFilterStrength + filterAmount * 0.24 + hueStrength * 0.26);
  vec3 pointFilter = mix(vec3(1.0), filterTarget, pointFilterStrength);
  pointFilter = mix(pointFilter, pointFilter * hueFilterTarget, hueStrength);
  float pointLum = dot(pointFilter, vec3(0.299, 0.587, 0.114));
  pointFilter = mix(vec3(pointLum), pointFilter, 1.18);
  vec3 seedColor = vec3(clamp(seedGlow * uSeedPointBrightness, 0.0, 1.0)) * uSeedBgOpacity * pointFilter;
  color = max(color, seedColor);

  float edgeDist = min(min(vUv.x, 1.0 - vUv.x), min(vUv.y, 1.0 - vUv.y));
  float edgeFade = smoothstep(0.02, 0.14, edgeDist);
  color *= edgeFade;

  color = clamp(color * uOpacity, 0.0, 1.0);
  gl_FragColor = vec4(color, 1.0);
}
`;
}

function createClearFragment(): string {
  return /* glsl */ `
precision highp float;

uniform vec4 uValue;

void main() {
  gl_FragColor = uValue;
}
`;
}

function createSeedDensityFragment(): string {
  return /* glsl */ `
precision highp float;

varying vec2 vUv;

uniform sampler2D uDensity;
uniform sampler2D uSeed;
uniform sampler2D uSeedMorphTex;
uniform float uAmount;
uniform float uSoftness;
uniform float uSeedContrast;
uniform float uSeedMorph;
uniform vec2 uViewport;
uniform vec2 uSeedSize;
uniform vec2 uSeedMorphSize;

vec2 toSeedUvContain(vec2 uv, vec2 seedSize) {
  if (seedSize.x < 1.0 || seedSize.y < 1.0) {
    return vec2(-1.0);
  }

  float viewAspect = uViewport.x / max(uViewport.y, 1.0);
  float seedAspect = seedSize.x / max(seedSize.y, 1.0);
  vec2 suv = uv;

  if (viewAspect > seedAspect) {
    float fit = seedAspect / viewAspect;
    suv.x = (uv.x - 0.5) / max(fit, 1e-6) + 0.5;
  } else {
    float fit = viewAspect / seedAspect;
    suv.y = (uv.y - 0.5) / max(fit, 1e-6) + 0.5;
  }

  if (suv.x < 0.0 || suv.x > 1.0 || suv.y < 0.0 || suv.y > 1.0) {
    return vec2(-1.0);
  }

  return suv;
}

float sampleSeedA(vec2 uv) {
  vec2 suv = toSeedUvContain(uv, uSeedSize);
  if (suv.x < 0.0 || suv.y < 0.0) {
    return 0.0;
  }

  vec3 seedRgb = texture2D(uSeed, suv).rgb;
  return dot(seedRgb, vec3(0.299, 0.587, 0.114));
}

float sampleSeedB(vec2 uv, float fallback) {
  vec2 suv = toSeedUvContain(uv, uSeedMorphSize);
  if (suv.x < 0.0 || suv.y < 0.0) {
    return fallback;
  }

  vec3 seedRgb = texture2D(uSeedMorphTex, suv).rgb;
  return dot(seedRgb, vec3(0.299, 0.587, 0.114));
}

float sampleSeedContain(vec2 uv) {
  float seedA = sampleSeedA(uv);
  float seedB = sampleSeedB(uv, seedA);
  float seedLuma = mix(seedA, seedB, clamp(uSeedMorph, 0.0, 1.0));
  return clamp((seedLuma - 0.5) * uSeedContrast + 0.5, 0.0, 1.0);
}

void main() {
  float seed = sampleSeedContain(vUv);
  seed = pow(clamp(seed, 0.0, 1.0), 0.85);
  float lo = max(0.0, 0.06 - uSoftness);
  float hi = min(1.0, 0.95 + uSoftness * 0.35);
  seed = smoothstep(lo, hi, seed);

  float density = texture2D(uDensity, vUv).r;
  density = max(density, seed * uAmount);
  gl_FragColor = vec4(clamp(density, 0.0, 1.0), 0.0, 0.0, 1.0);
}
`;
}

function pickRenderTargetType(renderer: THREE.WebGLRenderer): THREE.TextureDataType {
  return renderer.capabilities.isWebGL2 ? THREE.HalfFloatType : THREE.UnsignedByteType;
}

function createTarget(
  renderer: THREE.WebGLRenderer,
  width: number,
  height: number,
  filter: THREE.TextureFilter
): THREE.WebGLRenderTarget {
  const magFilter: THREE.MagnificationTextureFilter =
    filter === THREE.NearestFilter ? THREE.NearestFilter : THREE.LinearFilter;

  return new THREE.WebGLRenderTarget(width, height, {
    type: pickRenderTargetType(renderer),
    format: THREE.RGBAFormat,
    minFilter: filter,
    magFilter,
    depthBuffer: false,
    stencilBuffer: false,
    wrapS: THREE.ClampToEdgeWrapping,
    wrapT: THREE.ClampToEdgeWrapping
  });
}

function createPingPong(
  renderer: THREE.WebGLRenderer,
  width: number,
  height: number,
  filter: THREE.TextureFilter
): PingPong {
  return {
    read: createTarget(renderer, width, height, filter),
    write: createTarget(renderer, width, height, filter)
  };
}

function disposePingPong(target: PingPong | null): void {
  if (!target) {
    return;
  }

  target.read.dispose();
  target.write.dispose();
}

function disposeTarget(target: THREE.WebGLRenderTarget | null): void {
  if (!target) {
    return;
  }

  target.dispose();
}

function getAsciiRamp(style: number): string {
  if (style === 4) {
    return " .,';:|/+xX#%8@MW";
  }
  if (style === 2) {
    return " .,:;irsXA253hMH";
  }
  if (style === 3) {
    return " `.^-~+*x#%@MW&8";
  }
  return " .:-=+*#%@MW8B&$";
}

function createAsciiAtlasTexture(style: number): THREE.CanvasTexture {
  const ramp = getAsciiRamp(style);
  const cols = 4;
  const rows = 4;
  const cellSize = 64;

  const canvas = document.createElement("canvas");
  canvas.width = cols * cellSize;
  canvas.height = rows * cellSize;

  const context = canvas.getContext("2d");
  if (!context) {
    throw new Error("Failed to create 2D context for ASCII atlas.");
  }

  context.fillStyle = "#000000";
  context.fillRect(0, 0, canvas.width, canvas.height);

  const fontWeight = style === 4 ? 900 : style === 2 ? 700 : 500;
  const fontSize = style === 4 ? 54 : style === 3 ? 44 : 50;
  context.font = `${fontWeight} ${fontSize}px monospace`;
  context.fillStyle = "#ffffff";
  context.textAlign = "center";
  context.textBaseline = "middle";

  for (let i = 0; i < 16; i += 1) {
    const col = i % cols;
    const row = Math.floor(i / cols);
    const ch = ramp.charAt(i) || " ";

    const x = col * cellSize + cellSize * 0.5;
    const y = row * cellSize + cellSize * 0.54;
    if (style === 4) {
      context.fillText(ch, x - 1, y);
      context.fillText(ch, x + 1, y);
      context.fillText(ch, x, y - 1);
      context.fillText(ch, x, y + 1);
      context.fillText(ch, x, y);
    } else {
      context.fillText(ch, x, y);
    }
  }

  const texture = new THREE.CanvasTexture(canvas);
  texture.minFilter = THREE.NearestFilter;
  texture.magFilter = THREE.NearestFilter;
  texture.generateMipmaps = false;
  texture.wrapS = THREE.ClampToEdgeWrapping;
  texture.wrapT = THREE.ClampToEdgeWrapping;
  texture.needsUpdate = true;

  return texture;
}

export interface PointerState {
  active: boolean;
  x: number;
  y: number;
  dx: number;
  dy: number;
  ink: number;
}

export interface SmokeSystem {
  update(dt: number, elapsed: number): void;
  setParams(next: Partial<SmokeParams>): void;
  setPointer(state: PointerState): void;
  setSeedMorph(value: number): void;
  setSeedImageFromFile(file: File): Promise<void>;
  setSeedVideoFromFile(file: File): Promise<void>;
  setSeedVideoMotion(speed: number): void;
  useDefaultSeedImage(): void;
  useDefaultSeedVideo(): void;
  reset(seed?: number): void;
  resize(width: number, height: number): void;
  dispose(): void;
}

export function createSmokeSystem(
  renderer: THREE.WebGLRenderer,
  scene: THREE.Scene,
  params: SmokeParams,
  seed: number,
  viewportWidth: number,
  viewportHeight: number
): SmokeSystem {
  const state = clampParams({ ...DEFAULT_SMOKE_PARAMS, ...params });

  const passScene = new THREE.Scene();
  const passCamera = new THREE.OrthographicCamera(-1, 1, 1, -1, 0.1, 10);
  passCamera.position.z = 1;

  const passGeometry = new THREE.PlaneGeometry(2, 2);
  const passMesh = new THREE.Mesh<THREE.PlaneGeometry, THREE.Material>(
    passGeometry,
    new THREE.MeshBasicMaterial()
  );
  passMesh.frustumCulled = false;
  passScene.add(passMesh);

  const displayGeometry = new THREE.PlaneGeometry(2, 2);
  let asciiAtlasTexture = createAsciiAtlasTexture(state.asciiStyle);
  const displayMaterial = new THREE.ShaderMaterial({
    uniforms: {
      uDensity: { value: null as THREE.Texture | null },
      uAsciiAtlas: { value: asciiAtlasTexture },
      uVelocity: { value: null as THREE.Texture | null },
      uSeedImage: { value: null as THREE.Texture | null },
      uSeedImageMorph: { value: null as THREE.Texture | null },
      uTexel: { value: new THREE.Vector2(1 / 512, 1 / 512) },
      uResolution: { value: new THREE.Vector2(Math.max(viewportWidth, 1), Math.max(viewportHeight, 1)) },
      uSeedSize: { value: new THREE.Vector2(1, 1) },
      uSeedMorphSize: { value: new THREE.Vector2(1, 1) },
      uPointerUv: { value: new THREE.Vector2(0.5, 0.5) },
      uTime: { value: 0.0 },
      uOpacity: { value: state.opacity },
      uContrast: { value: state.contrast },
      uPersistence: { value: Math.pow(normalizePersistenceSlider(state.persistence), 0.85) },
      uDetailBoost: { value: state.detailBoost },
      uShadowBoost: { value: state.shadowBoost },
      uHighlightBoost: { value: state.highlightBoost },
      uDepthAmount: { value: state.depthAmount },
      uDepthLayers: { value: state.depthLayers },
      uLightStrength: { value: state.lightStrength },
      uRimStrength: { value: state.rimStrength },
      uAsciiScale: { value: state.asciiScale },
      uAsciiLayers: { value: state.asciiLayers },
      uAsciiBlend: { value: state.asciiBlend },
      uAsciiMix: { value: state.asciiMix },
      uAsciiJitter: { value: state.asciiJitter },
      uAsciiSpacingX: { value: state.asciiSpacingX },
      uAsciiSpacingY: { value: state.asciiSpacingY },
      uAsciiThreshold: { value: state.asciiThreshold },
      uAsciiFlowDistort: { value: state.asciiFlowDistort },
      uAsciiStyle: { value: state.asciiStyle },
      uSeedInfluence: { value: state.seedInfluence },
      uSeedContrast: { value: state.seedContrast },
      uSeedHue: { value: state.seedHue },
      uSeedColorFilter: { value: state.seedColorFilter },
      uSeedParallax: { value: state.seedParallax },
      uSeedPulseShift: { value: state.seedPulseShift },
      uSeedPulseSpeed: { value: state.seedPulseSpeed },
      uSeedPointBrightness: { value: state.seedPointBrightness },
      uSeedPointSize: { value: state.seedPointSize },
      uSeedPointContrast: { value: state.seedPointContrast },
      uSeedPointerInfluence: { value: state.seedPointerInfluence },
      uSeedVisible: { value: 0.0 },
      uSeedMorph: { value: 0.0 },
      uSeedBgOpacity: { value: 1.0 },
      uPointerRadius: { value: state.pointerRadius },
      uPointerActive: { value: 0.0 }
    },
    vertexShader: createVertexShader(),
    fragmentShader: createDisplayFragment(),
    depthWrite: false,
    depthTest: false,
    toneMapped: false
  });

  const displayMesh = new THREE.Mesh(displayGeometry, displayMaterial);
  displayMesh.frustumCulled = false;
  scene.add(displayMesh);

  const clearMaterial = new THREE.ShaderMaterial({
    uniforms: {
      uValue: { value: new THREE.Vector4(0, 0, 0, 1) }
    },
    vertexShader: createVertexShader(),
    fragmentShader: createClearFragment(),
    depthWrite: false,
    depthTest: false,
    toneMapped: false
  });

  const seedDensityMaterial = new THREE.ShaderMaterial({
    uniforms: {
      uDensity: { value: null as THREE.Texture | null },
      uSeed: { value: null as THREE.Texture | null },
      uSeedMorphTex: { value: null as THREE.Texture | null },
      uAmount: { value: 0.82 },
      uSoftness: { value: 0.0 },
      uSeedContrast: { value: state.seedContrast },
      uSeedMorph: { value: 0.0 },
      uViewport: { value: new THREE.Vector2(1, 1) },
      uSeedSize: { value: new THREE.Vector2(1, 1) },
      uSeedMorphSize: { value: new THREE.Vector2(1, 1) }
    },
    vertexShader: createVertexShader(),
    fragmentShader: createSeedDensityFragment(),
    depthWrite: false,
    depthTest: false,
    toneMapped: false
  });

  const advectVelocityMaterial = new THREE.ShaderMaterial({
    uniforms: {
      uSource: { value: null as THREE.Texture | null },
      uVelocity: { value: null as THREE.Texture | null },
      uTexel: { value: new THREE.Vector2(1 / 512, 1 / 512) },
      uDt: { value: 0.016 },
      uDissipation: { value: state.velocityDissipation },
      uVelocityScale: { value: state.advection }
    },
    vertexShader: createVertexShader(),
    fragmentShader: createAdvectVelocityFragment(),
    depthWrite: false,
    depthTest: false,
    toneMapped: false
  });

  const advectDensityMaterial = new THREE.ShaderMaterial({
    uniforms: {
      uSource: { value: null as THREE.Texture | null },
      uVelocity: { value: null as THREE.Texture | null },
      uDt: { value: 0.016 },
      uDissipation: { value: state.densityDissipation },
      uVelocityScale: { value: state.advection }
    },
    vertexShader: createVertexShader(),
    fragmentShader: createAdvectDensityFragment(),
    depthWrite: false,
    depthTest: false,
    toneMapped: false
  });

  const forcesMaterial = new THREE.ShaderMaterial({
    uniforms: {
      uVelocity: { value: null as THREE.Texture | null },
      uDensity: { value: null as THREE.Texture | null },
      uSeedImage: { value: null as THREE.Texture | null },
      uSeedImageMorph: { value: null as THREE.Texture | null },
      uTexel: { value: new THREE.Vector2(1 / 512, 1 / 512) },
      uResolution: { value: new THREE.Vector2(1, 1) },
      uSeedSize: { value: new THREE.Vector2(0, 0) },
      uSeedMorphSize: { value: new THREE.Vector2(0, 0) },
      uSeedMorph: { value: 0.0 },
      uDt: { value: 0.016 },
      uBuoyancy: { value: state.buoyancy },
      uDrag: { value: state.drag },
      uNoiseScale: { value: state.noiseScale },
      uTurbulence: { value: state.turbulence },
      uSeedInfluence: { value: state.seedInfluence },
      uSeedContrast: { value: state.seedContrast },
      uTime: { value: 0.0 },
      uSeed: { value: new THREE.Vector2(0.37, 0.91) }
    },
    vertexShader: createVertexShader(),
    fragmentShader: createForcesFragment(),
    depthWrite: false,
    depthTest: false,
    toneMapped: false
  });
  const curlMaterial = new THREE.ShaderMaterial({
    uniforms: {
      uVelocity: { value: null as THREE.Texture | null },
      uTexel: { value: new THREE.Vector2(1 / 512, 1 / 512) },
      uCurlScale: { value: CURL_SCALE }
    },
    vertexShader: createVertexShader(),
    fragmentShader: createCurlFragment(),
    depthWrite: false,
    depthTest: false,
    toneMapped: false
  });

  const vorticityMaterial = new THREE.ShaderMaterial({
    uniforms: {
      uVelocity: { value: null as THREE.Texture | null },
      uCurl: { value: null as THREE.Texture | null },
      uTexel: { value: new THREE.Vector2(1 / 512, 1 / 512) },
      uDt: { value: 0.016 },
      uVorticity: { value: state.vorticity },
      uCurlScale: { value: CURL_SCALE }
    },
    vertexShader: createVertexShader(),
    fragmentShader: createVorticityFragment(),
    depthWrite: false,
    depthTest: false,
    toneMapped: false
  });

  const splatVelocityMaterial = new THREE.ShaderMaterial({
    uniforms: {
      uVelocity: { value: null as THREE.Texture | null },
      uPoint: { value: new THREE.Vector2(0.5, 0.14) },
      uAdd: { value: new THREE.Vector2(0.0, 1.0) },
      uRadius: { value: state.sourceRadius },
      uGain: { value: 1.0 },
      uTexel: { value: new THREE.Vector2(1 / 512, 1 / 512) }
    },
    vertexShader: createVertexShader(),
    fragmentShader: createSplatVelocityFragment(),
    depthWrite: false,
    depthTest: false,
    toneMapped: false
  });

  const splatDensityMaterial = new THREE.ShaderMaterial({
    uniforms: {
      uDensity: { value: null as THREE.Texture | null },
      uPoint: { value: new THREE.Vector2(0.5, 0.14) },
      uRadius: { value: state.sourceRadius },
      uValue: { value: 0.08 }
    },
    vertexShader: createVertexShader(),
    fragmentShader: createSplatDensityFragment(),
    depthWrite: false,
    depthTest: false,
    toneMapped: false
  });

  const divergenceMaterial = new THREE.ShaderMaterial({
    uniforms: {
      uVelocity: { value: null as THREE.Texture | null },
      uTexel: { value: new THREE.Vector2(1 / 512, 1 / 512) },
      uDivergenceScale: { value: DIVERGENCE_SCALE }
    },
    vertexShader: createVertexShader(),
    fragmentShader: createDivergenceFragment(),
    depthWrite: false,
    depthTest: false,
    toneMapped: false
  });

  const pressureMaterial = new THREE.ShaderMaterial({
    uniforms: {
      uPressure: { value: null as THREE.Texture | null },
      uDivergence: { value: null as THREE.Texture | null },
      uTexel: { value: new THREE.Vector2(1 / 512, 1 / 512) },
      uPressureScale: { value: PRESSURE_SCALE },
      uDivergenceScale: { value: DIVERGENCE_SCALE }
    },
    vertexShader: createVertexShader(),
    fragmentShader: createJacobiPressureFragment(),
    depthWrite: false,
    depthTest: false,
    toneMapped: false
  });

  const gradientMaterial = new THREE.ShaderMaterial({
    uniforms: {
      uVelocity: { value: null as THREE.Texture | null },
      uPressure: { value: null as THREE.Texture | null },
      uTexel: { value: new THREE.Vector2(1 / 512, 1 / 512) },
      uPressureScale: { value: PRESSURE_SCALE }
    },
    vertexShader: createVertexShader(),
    fragmentShader: createSubtractGradientFragment(),
    depthWrite: false,
    depthTest: false,
    toneMapped: false
  });

  let velocity: PingPong | null = null;
  let density: PingPong | null = null;
  let pressure: PingPong | null = null;
  let divergence: THREE.WebGLRenderTarget | null = null;
  let curl: THREE.WebGLRenderTarget | null = null;

  let viewportW = Math.max(1, Math.floor(viewportWidth));
  let viewportH = Math.max(1, Math.floor(viewportHeight));
  let simW = 1;
  let simH = 1;
  let disposed = false;
  let currentSeed = normalizeSeed(seed);
  let seedImageTexture: THREE.Texture | null = null;
  let seedMorphTexture: THREE.Texture | null = null;
  let seedVideoTexture: THREE.VideoTexture | null = null;
  let seedVideoElement: HTMLVideoElement | null = null;
  let seedVideoObjectUrl: string | null = null;
  let seedVideoMotion = 1;
  let seedMorphAmount = 0;

  const seededRng = new SeededRandom(currentSeed);
  const pointer: PointerState = {
    active: false,
    x: 0.5,
    y: 0.5,
    dx: 0,
    dy: 0,
    ink: 1
  };

  const pointerAdd = new THREE.Vector2();
  const pointerPoint = new THREE.Vector2();
  const parallaxPointer = new THREE.Vector2(0.5, 0.5);
  const parallaxTarget = new THREE.Vector2(0.5, 0.5);
  const clearColor = new THREE.Vector4();

  function applyPlaneLook(follow: number): void {
    const alpha = THREE.MathUtils.clamp(follow, 0.0, 1.0);
    parallaxPointer.lerp(parallaxTarget, alpha);

    displayMaterial.uniforms.uPointerUv.value.copy(parallaxPointer);
    displayMaterial.uniforms.uPointerActive.value = pointer.active ? 1.0 : 0.0;
  }

  function runPass(material: THREE.Material, target: THREE.WebGLRenderTarget): void {
    passMesh.material = material;
    renderer.setRenderTarget(target);
    renderer.render(passScene, passCamera);
  }

  function clearTarget(target: THREE.WebGLRenderTarget, value: THREE.Vector4): void {
    clearColor.copy(value);
    clearMaterial.uniforms.uValue.value.copy(clearColor);
    runPass(clearMaterial, target);
  }

  function computeSimSize(): { width: number; height: number } {
    const aspect = viewportW / Math.max(viewportH, 1);
    const height = Math.max(128, Math.min(2048, Math.floor(state.simResolution)));
    const width = Math.max(128, Math.min(4096, Math.floor(height * aspect)));
    return { width, height };
  }

  function updateTexelUniforms(): void {
    const texelX = 1 / simW;
    const texelY = 1 / simH;
    const pixelRatio = Math.max(renderer.getPixelRatio(), 1);
    const resolutionX = Math.max(1, viewportW * pixelRatio);
    const resolutionY = Math.max(1, viewportH * pixelRatio);

    displayMaterial.uniforms.uTexel.value.set(texelX, texelY);
    displayMaterial.uniforms.uResolution.value.set(resolutionX, resolutionY);
    advectVelocityMaterial.uniforms.uTexel.value.set(texelX, texelY);
    forcesMaterial.uniforms.uTexel.value.set(texelX, texelY);
    curlMaterial.uniforms.uTexel.value.set(texelX, texelY);
    vorticityMaterial.uniforms.uTexel.value.set(texelX, texelY);
    splatVelocityMaterial.uniforms.uTexel.value.set(texelX, texelY);
    divergenceMaterial.uniforms.uTexel.value.set(texelX, texelY);
    pressureMaterial.uniforms.uTexel.value.set(texelX, texelY);
    gradientMaterial.uniforms.uTexel.value.set(texelX, texelY);
    seedDensityMaterial.uniforms.uViewport.value.set(simW, simH);
    forcesMaterial.uniforms.uResolution.value.set(simW, simH);
  }

  function rebuildTargets(): void {
    const next = computeSimSize();
    if (next.width === simW && next.height === simH && velocity && density && pressure && divergence && curl) {
      return;
    }

    disposePingPong(velocity);
    disposePingPong(density);
    disposePingPong(pressure);
    disposeTarget(divergence);
    disposeTarget(curl);

    simW = next.width;
    simH = next.height;

    velocity = createPingPong(renderer, simW, simH, THREE.LinearFilter);
    density = createPingPong(renderer, simW, simH, THREE.LinearFilter);
    pressure = createPingPong(renderer, simW, simH, THREE.NearestFilter);
    divergence = createTarget(renderer, simW, simH, THREE.NearestFilter);
    curl = createTarget(renderer, simW, simH, THREE.NearestFilter);

    updateTexelUniforms();
  }

  function clearAllFields(): void {
    if (!velocity || !density || !pressure || !divergence || !curl) {
      return;
    }

    clearTarget(velocity.read, new THREE.Vector4(0.5, 0.5, 0, 1));
    clearTarget(velocity.write, new THREE.Vector4(0.5, 0.5, 0, 1));

    clearTarget(density.read, new THREE.Vector4(0, 0, 0, 1));
    clearTarget(density.write, new THREE.Vector4(0, 0, 0, 1));

    clearTarget(pressure.read, new THREE.Vector4(0.5, 0, 0, 1));
    clearTarget(pressure.write, new THREE.Vector4(0.5, 0, 0, 1));

    clearTarget(divergence, new THREE.Vector4(0.5, 0, 0, 1));
    clearTarget(curl, new THREE.Vector4(0.5, 0, 0, 1));

    renderer.setRenderTarget(null);
  }

  function applySeedImage(amount: number, softness: number): void {
    if (!density || !seedImageTexture) {
      return;
    }

    seedDensityMaterial.uniforms.uDensity.value = density.read.texture;
    seedDensityMaterial.uniforms.uSeed.value = seedImageTexture;
    seedDensityMaterial.uniforms.uAmount.value = amount;
    seedDensityMaterial.uniforms.uSoftness.value = softness;
    seedDensityMaterial.uniforms.uSeedContrast.value = state.seedContrast;

    runPass(seedDensityMaterial, density.write);
    swap(density);
  }

  function clearSeedImageBindings(): void {
    if (seedImageTexture && seedImageTexture !== seedVideoTexture) {
      seedImageTexture.dispose();
    }
    seedImageTexture = null;
    if (seedMorphTexture && seedMorphTexture !== seedVideoTexture) {
      seedMorphTexture.dispose();
    }
    seedMorphTexture = null;
    if (seedVideoTexture) {
      seedVideoTexture.dispose();
      seedVideoTexture = null;
    }
    if (seedVideoElement) {
      seedVideoElement.pause();
      seedVideoElement.removeAttribute("src");
      seedVideoElement.load();
      seedVideoElement = null;
    }
    if (seedVideoObjectUrl) {
      URL.revokeObjectURL(seedVideoObjectUrl);
      seedVideoObjectUrl = null;
    }

    displayMaterial.uniforms.uSeedImage.value = null;
    displayMaterial.uniforms.uSeedImageMorph.value = null;
    displayMaterial.uniforms.uSeedVisible.value = 0.0;
    displayMaterial.uniforms.uSeedSize.value.set(1, 1);
    displayMaterial.uniforms.uSeedMorphSize.value.set(1, 1);
    seedDensityMaterial.uniforms.uSeed.value = null;
    seedDensityMaterial.uniforms.uSeedMorphTex.value = null;
    seedDensityMaterial.uniforms.uSeedSize.value.set(1, 1);
    seedDensityMaterial.uniforms.uSeedMorphSize.value.set(1, 1);
    forcesMaterial.uniforms.uSeedImage.value = null;
    forcesMaterial.uniforms.uSeedImageMorph.value = null;
    forcesMaterial.uniforms.uSeedSize.value.set(0, 0);
    forcesMaterial.uniforms.uSeedMorphSize.value.set(0, 0);
    seedMorphAmount = 0;
    displayMaterial.uniforms.uSeedMorph.value = 0;
    seedDensityMaterial.uniforms.uSeedMorph.value = 0;
    forcesMaterial.uniforms.uSeedMorph.value = 0;
  }

  function getTextureSize(texture: THREE.Texture): { width: number; height: number } {
    const image = texture.image as { width?: number; height?: number; videoWidth?: number; videoHeight?: number };
    const width = Math.max(1, Number(image.videoWidth ?? image.width ?? 1));
    const height = Math.max(1, Number(image.videoHeight ?? image.height ?? 1));
    return { width, height };
  }

  function configureSeedTexture(texture: THREE.Texture): void {
    texture.colorSpace = THREE.SRGBColorSpace;
    texture.minFilter = THREE.LinearFilter;
    texture.magFilter = THREE.LinearFilter;
    texture.wrapS = THREE.ClampToEdgeWrapping;
    texture.wrapT = THREE.ClampToEdgeWrapping;
    texture.generateMipmaps = false;
    texture.needsUpdate = true;
  }

  function syncMorphFallbackToBase(): void {
    if (!seedImageTexture || seedMorphTexture) {
      return;
    }

    const size = getTextureSize(seedImageTexture);
    displayMaterial.uniforms.uSeedImageMorph.value = seedImageTexture;
    displayMaterial.uniforms.uSeedMorphSize.value.set(size.width, size.height);
    seedDensityMaterial.uniforms.uSeedMorphTex.value = seedImageTexture;
    seedDensityMaterial.uniforms.uSeedMorphSize.value.set(size.width, size.height);
    forcesMaterial.uniforms.uSeedImageMorph.value = seedImageTexture;
    forcesMaterial.uniforms.uSeedMorphSize.value.set(size.width, size.height);
  }

  function applySeedMorphAmount(value: number): void {
    seedMorphAmount = THREE.MathUtils.clamp(value, 0, 1);
    displayMaterial.uniforms.uSeedMorph.value = seedMorphAmount;
    seedDensityMaterial.uniforms.uSeedMorph.value = seedMorphAmount;
    forcesMaterial.uniforms.uSeedMorph.value = seedMorphAmount;
  }

  function applySeedTexture(texture: THREE.Texture, sourceLabel: string): void {
    if (disposed) {
      texture.dispose();
      return;
    }

    configureSeedTexture(texture);
    const size = getTextureSize(texture);

    if (seedVideoTexture) {
      seedVideoTexture.dispose();
      seedVideoTexture = null;
    }
    if (seedVideoElement) {
      seedVideoElement.pause();
      seedVideoElement.removeAttribute("src");
      seedVideoElement.load();
      seedVideoElement = null;
    }
    if (seedVideoObjectUrl) {
      URL.revokeObjectURL(seedVideoObjectUrl);
      seedVideoObjectUrl = null;
    }
    if (seedImageTexture) {
      seedImageTexture.dispose();
    }

    seedImageTexture = texture;
    displayMaterial.uniforms.uSeedImage.value = texture;
    displayMaterial.uniforms.uSeedVisible.value = 1.0;
    displayMaterial.uniforms.uSeedSize.value.set(size.width, size.height);
    seedDensityMaterial.uniforms.uSeed.value = texture;
    seedDensityMaterial.uniforms.uSeedSize.value.set(size.width, size.height);
    forcesMaterial.uniforms.uSeedImage.value = texture;
    forcesMaterial.uniforms.uSeedSize.value.set(size.width, size.height);
    syncMorphFallbackToBase();
    resetState(currentSeed);
    console.info(`[DigitalSmoke] Loaded seed image: ${sourceLabel}`);
  }

  function applySeedVideoTexture(
    video: HTMLVideoElement,
    texture: THREE.VideoTexture,
    sourceLabel: string,
    objectUrl?: string
  ): void {
    if (disposed) {
      texture.dispose();
      video.pause();
      video.removeAttribute("src");
      video.load();
      return;
    }

    configureSeedTexture(texture);
    const size = getTextureSize(texture);

    if (seedImageTexture && seedImageTexture !== seedVideoTexture) {
      seedImageTexture.dispose();
    }
    if (seedVideoTexture) {
      seedVideoTexture.dispose();
    }
    if (seedVideoElement) {
      seedVideoElement.pause();
      seedVideoElement.removeAttribute("src");
      seedVideoElement.load();
    }
    if (seedVideoObjectUrl) {
      URL.revokeObjectURL(seedVideoObjectUrl);
      seedVideoObjectUrl = null;
    }

    seedVideoElement = video;
    seedVideoTexture = texture;
    seedVideoObjectUrl = objectUrl ?? null;
    seedImageTexture = texture;

    displayMaterial.uniforms.uSeedImage.value = texture;
    displayMaterial.uniforms.uSeedVisible.value = 1.0;
    displayMaterial.uniforms.uSeedSize.value.set(size.width, size.height);
    seedDensityMaterial.uniforms.uSeed.value = texture;
    seedDensityMaterial.uniforms.uSeedSize.value.set(size.width, size.height);
    forcesMaterial.uniforms.uSeedImage.value = texture;
    forcesMaterial.uniforms.uSeedSize.value.set(size.width, size.height);

    syncMorphFallbackToBase();
    resetState(currentSeed);
    console.info(`[DigitalSmoke] Loaded seed video: ${sourceLabel}`);
  }

  function applySeedMorphTexture(texture: THREE.Texture, sourceLabel: string): void {
    if (disposed) {
      texture.dispose();
      return;
    }

    configureSeedTexture(texture);
    const size = getTextureSize(texture);
    if (seedMorphTexture) {
      seedMorphTexture.dispose();
    }
    seedMorphTexture = texture;
    displayMaterial.uniforms.uSeedImageMorph.value = texture;
    displayMaterial.uniforms.uSeedMorphSize.value.set(size.width, size.height);
    seedDensityMaterial.uniforms.uSeedMorphTex.value = texture;
    seedDensityMaterial.uniforms.uSeedMorphSize.value.set(size.width, size.height);
    forcesMaterial.uniforms.uSeedImageMorph.value = texture;
    forcesMaterial.uniforms.uSeedMorphSize.value.set(size.width, size.height);
    console.info(`[DigitalSmoke] Loaded morph seed image: ${sourceLabel}`);
  }

  function buildDefaultSeedImageUrls(): string[] {
    const baseUrl = import.meta.env.BASE_URL || "/";
    const prefix = baseUrl.endsWith("/") ? baseUrl : `${baseUrl}/`;
    const urls = new Set<string>();
    for (const name of DEFAULT_SEED_IMAGE_CANDIDATES) {
      urls.add(`${prefix}${name}`);
      urls.add(`./${name}`);
      urls.add(`/${name}`);
      urls.add(name);
    }
    return Array.from(urls);
  }

  function buildDefaultSeedMorphUrls(): string[] {
    const baseUrl = import.meta.env.BASE_URL || "/";
    const prefix = baseUrl.endsWith("/") ? baseUrl : `${baseUrl}/`;
    const urls = new Set<string>();
    for (const name of DEFAULT_SEED_MORPH_CANDIDATES) {
      urls.add(`${prefix}${name}`);
      urls.add(`./${name}`);
      urls.add(`/${name}`);
      urls.add(name);
    }
    return Array.from(urls);
  }

  function buildDefaultSeedVideoUrls(): string[] {
    const baseUrl = import.meta.env.BASE_URL || "/";
    const prefix = baseUrl.endsWith("/") ? baseUrl : `${baseUrl}/`;
    const urls = new Set<string>();
    for (const name of DEFAULT_SEED_VIDEO_CANDIDATES) {
      urls.add(`${prefix}${name}`);
      urls.add(`./${name}`);
      urls.add(`/${name}`);
      urls.add(name);
    }
    return Array.from(urls);
  }

  function loadTextureFromUrl(url: string): Promise<THREE.Texture> {
    return new Promise((resolve, reject) => {
      const loader = new THREE.TextureLoader();
      loader.load(
        url,
        (texture) => resolve(texture),
        undefined,
        (error) => reject(error)
      );
    });
  }

  function loadVideoTextureFromUrl(url: string): Promise<{ video: HTMLVideoElement; texture: THREE.VideoTexture }> {
    return new Promise((resolve, reject) => {
      const video = document.createElement("video");
      let settled = false;

      const cleanup = (): void => {
        video.removeEventListener("loadeddata", onLoadedData);
        video.removeEventListener("error", onError);
      };

      const fail = (reason: unknown): void => {
        if (settled) {
          return;
        }
        settled = true;
        cleanup();
        video.pause();
        video.removeAttribute("src");
        video.load();
        reject(reason);
      };

      const onError = (): void => {
        fail(new Error(`Failed to load video: ${url}`));
      };

      const onLoadedData = (): void => {
        if (settled) {
          return;
        }
        settled = true;
        cleanup();
        video.pause();
        video.currentTime = 0;
        const texture = new THREE.VideoTexture(video);
        resolve({ video, texture });
      };

      video.muted = true;
      video.loop = true;
      video.playsInline = true;
      video.autoplay = false;
      video.preload = "auto";
      video.crossOrigin = "anonymous";

      video.addEventListener("loadeddata", onLoadedData);
      video.addEventListener("error", onError);
      video.src = url;
      video.load();
    });
  }

  function loadDefaultSeedImage(): void {
    const urls = buildDefaultSeedImageUrls();

    const tryLoad = (index: number): void => {
      if (index >= urls.length) {
        clearSeedImageBindings();
        console.warn(
          `[DigitalSmoke] Seed image not found. Place one in public as ${DEFAULT_SEED_IMAGE_CANDIDATES.join(", ")}`
        );
        return;
      }

      loadTextureFromUrl(urls[index])
        .then((texture) => {
          applySeedTexture(texture, urls[index]);
        })
        .catch(() => {
          tryLoad(index + 1);
        });
    };

    tryLoad(0);
  }

  function loadDefaultSeedMorphImage(): void {
    const urls = buildDefaultSeedMorphUrls();
    const tryLoad = (index: number): void => {
      if (index >= urls.length) {
        syncMorphFallbackToBase();
        console.warn(
          `[DigitalSmoke] Morph seed image not found. Place one in public as ${DEFAULT_SEED_MORPH_CANDIDATES.join(", ")}`
        );
        return;
      }

      loadTextureFromUrl(urls[index])
        .then((texture) => {
          applySeedMorphTexture(texture, urls[index]);
        })
        .catch(() => {
          tryLoad(index + 1);
        });
    };

    tryLoad(0);
  }

  function loadDefaultSeedVideo(): void {
    const urls = buildDefaultSeedVideoUrls();
    const tryLoad = (index: number): void => {
      if (index >= urls.length) {
        console.warn(
          `[DigitalSmoke] Seed video not found. Place one in public as ${DEFAULT_SEED_VIDEO_CANDIDATES.join(", ")}`
        );
        return;
      }

      loadVideoTextureFromUrl(urls[index])
        .then(({ video, texture }) => {
          applySeedVideoTexture(video, texture, urls[index]);
        })
        .catch(() => {
          tryLoad(index + 1);
        });
    };

    tryLoad(0);
  }

  function loadSeedImageFromFile(file: File): Promise<void> {
    if (!file || !file.type.startsWith("image/")) {
      return Promise.reject(new Error("Please choose an image file."));
    }

    const objectUrl = URL.createObjectURL(file);
    return loadTextureFromUrl(objectUrl)
      .then((texture) => {
        URL.revokeObjectURL(objectUrl);
        applySeedTexture(texture, file.name);
      })
      .catch((error) => {
        URL.revokeObjectURL(objectUrl);
        throw error;
      });
  }

  function loadSeedVideoFromFile(file: File): Promise<void> {
    if (!file || !file.type.startsWith("video/")) {
      return Promise.reject(new Error("Please choose a video file."));
    }

    const objectUrl = URL.createObjectURL(file);
    return loadVideoTextureFromUrl(objectUrl)
      .then(({ video, texture }) => {
        applySeedVideoTexture(video, texture, file.name, objectUrl);
      })
      .catch((error) => {
        URL.revokeObjectURL(objectUrl);
        throw error;
      });
  }

  function updateSeedVideoPlayback(dt: number): void {
    if (!seedVideoElement || !seedVideoTexture) {
      return;
    }

    const duration = seedVideoElement.duration;
    if (!Number.isFinite(duration) || duration <= 0) {
      return;
    }

    const speed = THREE.MathUtils.clamp(seedVideoMotion, 0, 4);
    if (speed <= 1e-5) {
      return;
    }

    const advance = dt * speed;
    let nextTime = seedVideoElement.currentTime + advance;
    if (nextTime >= duration) {
      nextTime %= duration;
    }

    seedVideoElement.currentTime = nextTime;
    seedVideoTexture.needsUpdate = true;
  }

  function applyVelocitySplat(point: THREE.Vector2, add: THREE.Vector2, radius: number, gain: number): void {
    if (!velocity) {
      return;
    }

    splatVelocityMaterial.uniforms.uVelocity.value = velocity.read.texture;
    splatVelocityMaterial.uniforms.uPoint.value.copy(point);
    splatVelocityMaterial.uniforms.uAdd.value.copy(add);
    splatVelocityMaterial.uniforms.uRadius.value = radius;
    splatVelocityMaterial.uniforms.uGain.value = gain;

    runPass(splatVelocityMaterial, velocity.write);
    swap(velocity);
  }

  function applyDensitySplat(point: THREE.Vector2, radius: number, value: number): void {
    if (!density) {
      return;
    }

    splatDensityMaterial.uniforms.uDensity.value = density.read.texture;
    splatDensityMaterial.uniforms.uPoint.value.copy(point);
    splatDensityMaterial.uniforms.uRadius.value = radius;
    splatDensityMaterial.uniforms.uValue.value = value;

    runPass(splatDensityMaterial, density.write);
    swap(density);
  }

  function solvePressure(iterations: number): void {
    if (!pressure || !divergence) {
      return;
    }

    pressureMaterial.uniforms.uDivergence.value = divergence.texture;

    for (let i = 0; i < iterations; i += 1) {
      pressureMaterial.uniforms.uPressure.value = pressure.read.texture;
      runPass(pressureMaterial, pressure.write);
      swap(pressure);
    }
  }

  function step(dt: number, elapsed: number): void {
    if (!velocity || !density || !pressure || !divergence || !curl) {
      return;
    }
    const persistenceNorm = normalizePersistenceSlider(state.persistence);
    const persistenceView = Math.pow(persistenceNorm, 0.85);

    advectVelocityMaterial.uniforms.uDt.value = dt;
    advectVelocityMaterial.uniforms.uDissipation.value = state.velocityDissipation;
    advectVelocityMaterial.uniforms.uVelocityScale.value = state.advection;
    advectVelocityMaterial.uniforms.uSource.value = velocity.read.texture;
    advectVelocityMaterial.uniforms.uVelocity.value = velocity.read.texture;
    runPass(advectVelocityMaterial, velocity.write);
    swap(velocity);

    forcesMaterial.uniforms.uDt.value = dt;
    forcesMaterial.uniforms.uTime.value = elapsed;
    const effectiveBuoyancy = state.buoyancy * THREE.MathUtils.lerp(1.0, 0.48, persistenceNorm);
    forcesMaterial.uniforms.uBuoyancy.value = effectiveBuoyancy;
    forcesMaterial.uniforms.uDrag.value = state.drag;
    forcesMaterial.uniforms.uNoiseScale.value = state.noiseScale;
    forcesMaterial.uniforms.uTurbulence.value = state.turbulence;
    forcesMaterial.uniforms.uSeedInfluence.value = state.seedInfluence;
    forcesMaterial.uniforms.uSeedContrast.value = state.seedContrast;
    forcesMaterial.uniforms.uVelocity.value = velocity.read.texture;
    forcesMaterial.uniforms.uDensity.value = density.read.texture;
    runPass(forcesMaterial, velocity.write);
    swap(velocity);

    curlMaterial.uniforms.uVelocity.value = velocity.read.texture;
    runPass(curlMaterial, curl);

    vorticityMaterial.uniforms.uDt.value = dt;
    vorticityMaterial.uniforms.uVorticity.value = state.vorticity;
    vorticityMaterial.uniforms.uVelocity.value = velocity.read.texture;
    vorticityMaterial.uniforms.uCurl.value = curl.texture;
    runPass(vorticityMaterial, velocity.write);
    swap(velocity);

    const pointerLength = Math.hypot(pointer.dx, pointer.dy);
    const pointerMoving = pointerLength > 0.000001;
    if (pointer.active && pointerMoving) {
      const pointerInk = pointer.ink >= 0 ? 1 : -1;
      pointerPoint.set(pointer.x, pointer.y);
      pointerAdd.set(pointer.dx, pointer.dy).multiplyScalar(state.pointerForce * 42.0);
      if (pointerInk < 0) {
        pointerAdd.multiplyScalar(-0.75);
        pointerAdd.y -= state.pointerForce * 0.9;
      }
      applyVelocitySplat(pointerPoint, pointerAdd, state.pointerRadius, 1.0);
    }

    divergenceMaterial.uniforms.uVelocity.value = velocity.read.texture;
    runPass(divergenceMaterial, divergence);

    solvePressure(state.pressureIterations);

    gradientMaterial.uniforms.uVelocity.value = velocity.read.texture;
    gradientMaterial.uniforms.uPressure.value = pressure.read.texture;
    runPass(gradientMaterial, velocity.write);
    swap(velocity);

    advectDensityMaterial.uniforms.uDt.value = dt;
    const halfLifeSec = THREE.MathUtils.lerp(1.2, 120.0, Math.pow(persistenceNorm, 1.18));
    const keepFromPersistence = Math.pow(0.5, 1 / Math.max(halfLifeSec * 120.0, 1.0));
    const persistenceDissipation = Math.max(state.densityDissipation, keepFromPersistence);
    advectDensityMaterial.uniforms.uDissipation.value = persistenceDissipation;
    advectDensityMaterial.uniforms.uVelocityScale.value = state.advection;
    advectDensityMaterial.uniforms.uSource.value = density.read.texture;
    advectDensityMaterial.uniforms.uVelocity.value = velocity.read.texture;
    runPass(advectDensityMaterial, density.write);
    swap(density);

    const sourceRange = SMOKE_PARAM_LIMITS.sourceRadius;
    const sourceSpan = Math.max(sourceRange.max - sourceRange.min, 1e-6);
    const sourceT = THREE.MathUtils.clamp((state.sourceRadius - sourceRange.min) / sourceSpan, 0, 1);
    const seedSoftness = THREE.MathUtils.lerp(0.0, 0.32, sourceT);
    const influenceNorm = THREE.MathUtils.clamp(state.seedInfluence / 8.0, 0, 1);
    const anchorFloor = THREE.MathUtils.lerp(0.14, 0.38, persistenceNorm) * THREE.MathUtils.lerp(0.85, 1.9, influenceNorm);
    const seedFeed = THREE.MathUtils.clamp(state.emitRate * dt * (95.0 + state.seedInfluence * 18.0), 0.0, 1.1);
    const seedAmount = THREE.MathUtils.clamp(anchorFloor + seedFeed, 0.0, 1.35);
    applySeedImage(seedAmount, seedSoftness);

    if (pointer.active) {
      pointerPoint.set(pointer.x, pointer.y);
      const pointerInk = pointer.ink >= 0 ? 1 : -1;
      const trail = state.pointerTrail;
      const holdAdd = state.pointerForce * dt * 0.35 * trail;
      const moveAdd = Math.min(0.24 * trail, pointerLength * state.pointerForce * 2.8 * trail);
      const densityAddRaw = holdAdd + moveAdd;
      const densityGain = pointerInk > 0 ? 1.0 : state.pointerDarkness;
      const densityAdd = Math.min(0.35 * trail, densityAddRaw) * densityGain * pointerInk;
      applyDensitySplat(pointerPoint, state.pointerRadius * (pointerInk > 0 ? 1.3 : 1.55), densityAdd);
    }

    parallaxTarget.set(pointer.x, pointer.y);
    const tiltFollow = 1 - Math.exp(-dt * (state.planeTiltEase * 1.35));
    applyPlaneLook(tiltFollow);

    displayMaterial.uniforms.uDensity.value = density.read.texture;
    displayMaterial.uniforms.uVelocity.value = velocity.read.texture;
    displayMaterial.uniforms.uTime.value = elapsed;
    displayMaterial.uniforms.uOpacity.value = state.opacity;
    displayMaterial.uniforms.uContrast.value = state.contrast;
    displayMaterial.uniforms.uPersistence.value = persistenceView;
    displayMaterial.uniforms.uDetailBoost.value = state.detailBoost;
    displayMaterial.uniforms.uShadowBoost.value = state.shadowBoost;
    displayMaterial.uniforms.uHighlightBoost.value = state.highlightBoost;
    displayMaterial.uniforms.uDepthAmount.value = state.depthAmount;
    displayMaterial.uniforms.uDepthLayers.value = state.depthLayers;
    displayMaterial.uniforms.uLightStrength.value = state.lightStrength;
    displayMaterial.uniforms.uRimStrength.value = state.rimStrength;
    displayMaterial.uniforms.uAsciiScale.value = state.asciiScale;
    displayMaterial.uniforms.uAsciiLayers.value = state.asciiLayers;
    displayMaterial.uniforms.uAsciiBlend.value = state.asciiBlend;
    displayMaterial.uniforms.uAsciiMix.value = state.asciiMix;
    displayMaterial.uniforms.uAsciiJitter.value = state.asciiJitter;
    displayMaterial.uniforms.uAsciiSpacingX.value = state.asciiSpacingX;
    displayMaterial.uniforms.uAsciiSpacingY.value = state.asciiSpacingY;
    displayMaterial.uniforms.uAsciiThreshold.value = state.asciiThreshold;
    displayMaterial.uniforms.uAsciiFlowDistort.value = state.asciiFlowDistort;
    displayMaterial.uniforms.uAsciiStyle.value = state.asciiStyle;
    displayMaterial.uniforms.uSeedInfluence.value = state.seedInfluence;
    displayMaterial.uniforms.uSeedContrast.value = state.seedContrast;
    displayMaterial.uniforms.uSeedHue.value = state.seedHue;
    displayMaterial.uniforms.uSeedColorFilter.value = state.seedColorFilter;
    displayMaterial.uniforms.uSeedParallax.value = state.seedParallax;
    displayMaterial.uniforms.uSeedPulseShift.value = state.seedPulseShift;
    displayMaterial.uniforms.uSeedPulseSpeed.value = state.seedPulseSpeed;
    displayMaterial.uniforms.uSeedPointBrightness.value = state.seedPointBrightness;
    displayMaterial.uniforms.uSeedPointSize.value = state.seedPointSize;
    displayMaterial.uniforms.uSeedPointContrast.value = state.seedPointContrast;
    displayMaterial.uniforms.uSeedPointerInfluence.value = state.seedPointerInfluence;
    displayMaterial.uniforms.uPointerRadius.value = state.pointerRadius;

    renderer.setRenderTarget(null);
  }
  function resetSeedOffsets(): void {
    seededRng.setSeed(currentSeed);

    const seedUniform = forcesMaterial.uniforms.uSeed.value;
    seedUniform.set(seededRng.range(0.1, 5.0), seededRng.range(0.1, 5.0));
  }

  function resetState(nextSeed?: number): void {
    if (typeof nextSeed === "number" && Number.isFinite(nextSeed)) {
      currentSeed = normalizeSeed(nextSeed);
    }

    rebuildTargets();
    clearAllFields();
    resetSeedOffsets();
    const sourceRange = SMOKE_PARAM_LIMITS.sourceRadius;
    const sourceSpan = Math.max(sourceRange.max - sourceRange.min, 1e-6);
    const sourceT = THREE.MathUtils.clamp((state.sourceRadius - sourceRange.min) / sourceSpan, 0, 1);
    const seedSoftness = THREE.MathUtils.lerp(0.0, 0.32, sourceT);
    const resetInject = THREE.MathUtils.clamp(0.45 + state.emitRate * 1.2 + state.seedInfluence * 0.08, 0.0, 1.4);
    applySeedImage(resetInject, seedSoftness);
  }

  rebuildTargets();
  resetState(currentSeed);
  loadDefaultSeedImage();
  loadDefaultSeedMorphImage();

  return {
    update(dt: number, elapsed: number): void {
      if (disposed) {
        return;
      }

      const clampedDt = Math.min(Math.max(dt, 0), 0.05);
      if (clampedDt <= 0) {
        return;
      }

      updateSeedVideoPlayback(clampedDt);

      const substeps = 2;
      const stepDt = clampedDt / substeps;

      for (let i = 0; i < substeps; i += 1) {
        step(stepDt, elapsed + i * stepDt);
      }
    },

    setParams(next: Partial<SmokeParams>): void {
      if (disposed) {
        return;
      }

      const nextState = clampParams({
        simResolution: next.simResolution ?? state.simResolution,
        emitRate: next.emitRate ?? state.emitRate,
        seedInfluence: next.seedInfluence ?? state.seedInfluence,
        seedContrast: next.seedContrast ?? state.seedContrast,
        seedHue: next.seedHue ?? state.seedHue,
        seedColorFilter: next.seedColorFilter ?? state.seedColorFilter,
        seedParallax: next.seedParallax ?? state.seedParallax,
        seedPulseShift: next.seedPulseShift ?? state.seedPulseShift,
        seedPulseSpeed: next.seedPulseSpeed ?? state.seedPulseSpeed,
        seedPointBrightness: next.seedPointBrightness ?? state.seedPointBrightness,
        seedPointSize: next.seedPointSize ?? state.seedPointSize,
        seedPointContrast: next.seedPointContrast ?? state.seedPointContrast,
        seedPointerInfluence: next.seedPointerInfluence ?? state.seedPointerInfluence,
        planeTilt: next.planeTilt ?? state.planeTilt,
        planeTiltEase: next.planeTiltEase ?? state.planeTiltEase,
        sourceRadius: next.sourceRadius ?? state.sourceRadius,
        densityDissipation: next.densityDissipation ?? state.densityDissipation,
        velocityDissipation: next.velocityDissipation ?? state.velocityDissipation,
        buoyancy: next.buoyancy ?? state.buoyancy,
        vorticity: next.vorticity ?? state.vorticity,
        pressureIterations: next.pressureIterations ?? state.pressureIterations,
        noiseScale: next.noiseScale ?? state.noiseScale,
        turbulence: next.turbulence ?? state.turbulence,
        advection: next.advection ?? state.advection,
        drag: next.drag ?? state.drag,
        opacity: next.opacity ?? state.opacity,
        contrast: next.contrast ?? state.contrast,
        persistence: next.persistence ?? state.persistence,
        detailBoost: next.detailBoost ?? state.detailBoost,
        shadowBoost: next.shadowBoost ?? state.shadowBoost,
        highlightBoost: next.highlightBoost ?? state.highlightBoost,
        depthAmount: next.depthAmount ?? state.depthAmount,
        depthLayers: next.depthLayers ?? state.depthLayers,
        lightStrength: next.lightStrength ?? state.lightStrength,
        rimStrength: next.rimStrength ?? state.rimStrength,
        asciiScale: next.asciiScale ?? state.asciiScale,
        asciiLayers: next.asciiLayers ?? state.asciiLayers,
        asciiBlend: next.asciiBlend ?? state.asciiBlend,
        asciiMix: next.asciiMix ?? state.asciiMix,
        asciiJitter: next.asciiJitter ?? state.asciiJitter,
        asciiSpacingX: next.asciiSpacingX ?? state.asciiSpacingX,
        asciiSpacingY: next.asciiSpacingY ?? state.asciiSpacingY,
        asciiThreshold: next.asciiThreshold ?? state.asciiThreshold,
        asciiFlowDistort: next.asciiFlowDistort ?? state.asciiFlowDistort,
        asciiStyle: next.asciiStyle ?? state.asciiStyle,
        pointerDarkness: next.pointerDarkness ?? state.pointerDarkness,
        pointerForce: next.pointerForce ?? state.pointerForce,
        pointerRadius: next.pointerRadius ?? state.pointerRadius,
        pointerTrail: next.pointerTrail ?? state.pointerTrail
      });

      const resolutionChanged = nextState.simResolution !== state.simResolution;
      const asciiStyleChanged = nextState.asciiStyle !== state.asciiStyle;
      Object.assign(state, nextState);

      if (asciiStyleChanged) {
        asciiAtlasTexture.dispose();
        asciiAtlasTexture = createAsciiAtlasTexture(state.asciiStyle);
        displayMaterial.uniforms.uAsciiAtlas.value = asciiAtlasTexture;
      }

      if (resolutionChanged) {
        rebuildTargets();
        resetState();
      }
    },

    setPointer(nextPointer: PointerState): void {
      pointer.active = Boolean(nextPointer.active);
      pointer.x = Math.min(1, Math.max(0, nextPointer.x));
      pointer.y = Math.min(1, Math.max(0, nextPointer.y));
      pointer.dx = Math.min(1, Math.max(-1, nextPointer.dx));
      pointer.dy = Math.min(1, Math.max(-1, nextPointer.dy));
      pointer.ink = Math.min(1, Math.max(-1, nextPointer.ink));

      parallaxTarget.set(pointer.x, pointer.y);
      applyPlaneLook(0.35);
    },

    setSeedMorph(value: number): void {
      if (disposed) {
        return;
      }
      applySeedMorphAmount(value);
    },

    setSeedImageFromFile(file: File): Promise<void> {
      if (disposed) {
        return Promise.resolve();
      }
      return loadSeedImageFromFile(file);
    },

    setSeedVideoFromFile(file: File): Promise<void> {
      if (disposed) {
        return Promise.resolve();
      }
      return loadSeedVideoFromFile(file);
    },

    setSeedVideoMotion(speed: number): void {
      if (disposed) {
        return;
      }
      seedVideoMotion = THREE.MathUtils.clamp(Number.isFinite(speed) ? speed : 1, 0, 4);
    },

    useDefaultSeedImage(): void {
      if (disposed) {
        return;
      }
      loadDefaultSeedImage();
      loadDefaultSeedMorphImage();
      applySeedMorphAmount(0);
    },

    useDefaultSeedVideo(): void {
      if (disposed) {
        return;
      }
      loadDefaultSeedVideo();
      applySeedMorphAmount(0);
    },

    reset(nextSeed?: number): void {
      if (disposed) {
        return;
      }

      resetState(nextSeed);
    },

    resize(width: number, height: number): void {
      if (disposed) {
        return;
      }

      viewportW = Math.max(1, Math.floor(width));
      viewportH = Math.max(1, Math.floor(height));
      rebuildTargets();
      resetState();
    },

    dispose(): void {
      if (disposed) {
        return;
      }

      disposed = true;

      scene.remove(displayMesh);

      displayGeometry.dispose();
      passGeometry.dispose();

      asciiAtlasTexture.dispose();
      if (seedImageTexture) {
        seedImageTexture.dispose();
        seedImageTexture = null;
      }
      if (seedMorphTexture) {
        seedMorphTexture.dispose();
        seedMorphTexture = null;
      }
      if (seedVideoTexture) {
        seedVideoTexture.dispose();
        seedVideoTexture = null;
      }
      if (seedVideoElement) {
        seedVideoElement.pause();
        seedVideoElement.removeAttribute("src");
        seedVideoElement.load();
        seedVideoElement = null;
      }
      if (seedVideoObjectUrl) {
        URL.revokeObjectURL(seedVideoObjectUrl);
        seedVideoObjectUrl = null;
      }
      displayMaterial.dispose();
      clearMaterial.dispose();
      seedDensityMaterial.dispose();
      advectVelocityMaterial.dispose();
      advectDensityMaterial.dispose();
      forcesMaterial.dispose();
      curlMaterial.dispose();
      vorticityMaterial.dispose();
      splatVelocityMaterial.dispose();
      splatDensityMaterial.dispose();
      divergenceMaterial.dispose();
      pressureMaterial.dispose();
      gradientMaterial.dispose();

      disposePingPong(velocity);
      disposePingPong(density);
      disposePingPong(pressure);
      disposeTarget(divergence);
      disposeTarget(curl);
    }
  };
}
