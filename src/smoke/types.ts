export interface SmokeParams {
  simResolution: number;
  emitRate: number;
  seedInfluence: number;
  seedContrast: number;
  seedColorFilter: number;
  seedParallax: number;
  seedPulseShift: number;
  seedPulseSpeed: number;
  seedPointBrightness: number;
  seedPointSize: number;
  seedPointContrast: number;
  seedPointerInfluence: number;
  sourceRadius: number;
  densityDissipation: number;
  velocityDissipation: number;
  buoyancy: number;
  vorticity: number;
  pressureIterations: number;
  noiseScale: number;
  turbulence: number;
  advection: number;
  drag: number;
  opacity: number;
  contrast: number;
  persistence: number;
  detailBoost: number;
  shadowBoost: number;
  highlightBoost: number;
  depthAmount: number;
  depthLayers: number;
  lightStrength: number;
  rimStrength: number;
  asciiScale: number;
  asciiLayers: number;
  asciiBlend: number;
  asciiMix: number;
  asciiJitter: number;
  asciiSpacingX: number;
  asciiSpacingY: number;
  asciiThreshold: number;
  asciiFlowDistort: number;
  asciiStyle: number;
  pointerDarkness: number;
  pointerForce: number;
  pointerRadius: number;
}

export type ParamRange = {
  min: number;
  max: number;
  step: number;
};

export const SMOKE_PARAM_LIMITS: Record<keyof SmokeParams, ParamRange> = {
  simResolution: { min: 64, max: 448, step: 32 },
  emitRate: { min: 0.0, max: 1.2, step: 0.01 },
  seedInfluence: { min: 0.0, max: 8.0, step: 0.05 },
  seedContrast: { min: 0.2, max: 4.0, step: 0.01 },
  seedColorFilter: { min: -1.0, max: 1.0, step: 0.01 },
  seedParallax: { min: 0.0, max: 0.12, step: 0.0005 },
  seedPulseShift: { min: 0.0, max: 0.08, step: 0.0005 },
  seedPulseSpeed: { min: 0.1, max: 6.0, step: 0.01 },
  seedPointBrightness: { min: 0.2, max: 3.2, step: 0.01 },
  seedPointSize: { min: 0.4, max: 2.6, step: 0.01 },
  seedPointContrast: { min: 0.3, max: 3.5, step: 0.01 },
  seedPointerInfluence: { min: 0.0, max: 4.0, step: 0.01 },
  sourceRadius: { min: 0.001, max: 0.019, step: 0.0005 },
  densityDissipation: { min: 0.984, max: 1.0, step: 0.0002 },
  velocityDissipation: { min: 0.924, max: 1.0, step: 0.001 },
  buoyancy: { min: 0.0, max: 5.4, step: 0.01 },
  vorticity: { min: 3.0, max: 100.0, step: 0.5 },
  pressureIterations: { min: 4, max: 40, step: 1 },
  noiseScale: { min: 0.0, max: 6.0, step: 0.01 },
  turbulence: { min: 0.0, max: 6.0, step: 0.01 },
  advection: { min: 0.36, max: 2.0, step: 0.01 },
  drag: { min: 0.0, max: 0.28, step: 0.002 },
  opacity: { min: 0.88, max: 1.0, step: 0.005 },
  contrast: { min: 0.4, max: 4.0, step: 0.01 },
  persistence: { min: 1, max: 100, step: 1 },
  detailBoost: { min: 0.14, max: 3.0, step: 0.01 },
  shadowBoost: { min: 0.0, max: 2.0, step: 0.01 },
  highlightBoost: { min: 0.46, max: 3.5, step: 0.01 },
  depthAmount: { min: 0.0, max: 2.5, step: 0.01 },
  depthLayers: { min: 1, max: 12, step: 1 },
  lightStrength: { min: 0.0, max: 2.0, step: 0.01 },
  rimStrength: { min: 0.0, max: 2.0, step: 0.01 },
  asciiScale: { min: 1, max: 7, step: 1 },
  asciiLayers: { min: 1, max: 11, step: 1 },
  asciiBlend: { min: 0.0, max: 2.0, step: 0.01 },
  asciiMix: { min: 0.0, max: 2.0, step: 0.01 },
  asciiJitter: { min: 0.0, max: 4.0, step: 0.01 },
  asciiSpacingX: { min: 0.35, max: 2.8, step: 0.01 },
  asciiSpacingY: { min: 0.35, max: 2.8, step: 0.01 },
  asciiThreshold: { min: 0.0, max: 1.0, step: 0.01 },
  asciiFlowDistort: { min: 0.0, max: 12.0, step: 0.05 },
  asciiStyle: { min: 0, max: 4, step: 1 },
  pointerDarkness: { min: 0.0, max: 0.62, step: 0.01 },
  pointerForce: { min: 0.8, max: 8.0, step: 0.1 },
  pointerRadius: { min: 0.001, max: 0.018, step: 0.0005 }
};

export const DEFAULT_SMOKE_PARAMS: SmokeParams = {
  simResolution: 256,
  emitRate: 0.2,
  seedInfluence: 3.2,
  seedContrast: 1.45,
  seedColorFilter: 0.0,
  seedParallax: 0.02,
  seedPulseShift: 0.01,
  seedPulseSpeed: 1.2,
  seedPointBrightness: 1.0,
  seedPointSize: 1.0,
  seedPointContrast: 1.0,
  seedPointerInfluence: 1.0,
  sourceRadius: 0.01,
  densityDissipation: 0.992,
  velocityDissipation: 0.962,
  buoyancy: 2.7,
  vorticity: 51.5,
  pressureIterations: 22,
  noiseScale: 3.0,
  turbulence: 3.0,
  advection: 1.18,
  drag: 0.14,
  opacity: 0.94,
  contrast: 2.2,
  persistence: 100,
  detailBoost: 1.57,
  shadowBoost: 1.0,
  highlightBoost: 1.98,
  depthAmount: 0.0,
  depthLayers: 1,
  lightStrength: 0.0,
  rimStrength: 0.0,
  asciiScale: 4,
  asciiLayers: 6,
  asciiBlend: 1.0,
  asciiMix: 1.0,
  asciiJitter: 2.0,
  asciiSpacingX: 1.0,
  asciiSpacingY: 1.0,
  asciiThreshold: 0.38,
  asciiFlowDistort: 5.8,
  asciiStyle: 2,
  pointerDarkness: 0.31,
  pointerForce: 4.4,
  pointerRadius: 0.0095
};
