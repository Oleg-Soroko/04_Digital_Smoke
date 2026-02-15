import * as THREE from "three";
import "./styles.css";
import { createRenderer } from "./scene/createRenderer";
import { createSmokeSystem, type PointerState, type SmokeSystem } from "./smoke/SmokeSystem";
import { DEFAULT_SMOKE_PARAMS, type SmokeParams } from "./smoke/types";
import { createControlsPanel, type SmokeControlPanel } from "./ui/controls";
import { capturePng } from "./utils/screenshot";

const app = document.querySelector<HTMLDivElement>("#app");
if (!app) {
  throw new Error("Missing #app container.");
}

const viewport = document.createElement("div");
viewport.className = "viewport";
app.appendChild(viewport);

const hint = document.createElement("div");
hint.className = "controls-hint";
hint.textContent = "LMB white smoke | RMB black smoke | Space pause | R reset seed | P screenshot";
app.appendChild(hint);

const scene = new THREE.Scene();
scene.background = new THREE.Color(0x000000);

const camera = new THREE.OrthographicCamera(-1, 1, 1, -1, 0.1, 10);
camera.position.z = 1;

const renderer = createRenderer(viewport);

let activeParams: SmokeParams = { ...DEFAULT_SMOKE_PARAMS };
let activeSeed = 781237;
let paused = false;
let simTime = 0;

const smoke: SmokeSystem = createSmokeSystem(
  renderer,
  scene,
  activeParams,
  activeSeed,
  viewport.clientWidth,
  viewport.clientHeight
);

const pointerState: PointerState = {
  active: false,
  x: 0.5,
  y: 0.14,
  dx: 0,
  dy: 0,
  ink: 1
};
let pointerDown = false;

let ui: SmokeControlPanel;
ui = createControlsPanel(activeParams, activeSeed, {
  onParamsChange(next) {
    activeParams = { ...activeParams, ...next };
    smoke.setParams(next);
  },

  onPauseChange(nextPaused) {
    paused = nextPaused;
  },

  onResetSeed(seed) {
    activeSeed = Math.max(1, Math.floor(seed));
    simTime = 0;
    smoke.reset(activeSeed);
    ui.setSeed(activeSeed);
  },

  onResetParams(next) {
    activeParams = { ...next };
    smoke.setParams(activeParams);
    simTime = 0;
    smoke.reset(activeSeed);
  },

  onScreenshot() {
    void capturePng(renderer, "digital_smoke");
  }
});

function resize(): void {
  const width = Math.max(viewport.clientWidth, 1);
  const height = Math.max(viewport.clientHeight, 1);

  renderer.setPixelRatio(Math.min(window.devicePixelRatio || 1, 2));
  renderer.setSize(width, height, false);

  smoke.resize(width, height);
}

window.addEventListener("resize", resize);
resize();

const clock = new THREE.Clock();
let rafId = 0;
let disposed = false;

function clamp01(v: number): number {
  return Math.min(1, Math.max(0, v));
}

function pointerToUv(event: PointerEvent): { x: number; y: number } {
  const rect = renderer.domElement.getBoundingClientRect();
  const x = clamp01((event.clientX - rect.left) / Math.max(rect.width, 1));
  const y = clamp01(1 - (event.clientY - rect.top) / Math.max(rect.height, 1));
  return { x, y };
}

function onPointerDown(event: PointerEvent): void {
  pointerDown = true;
  const isRightButton = event.button === 2;
  const uv = pointerToUv(event);
  pointerState.x = uv.x;
  pointerState.y = uv.y;
  pointerState.dx = 0;
  pointerState.dy = 0;
  pointerState.active = true;
  pointerState.ink = isRightButton ? -1 : 1;
  renderer.domElement.setPointerCapture(event.pointerId);
}

function onPointerMove(event: PointerEvent): void {
  const uv = pointerToUv(event);
  const dx = uv.x - pointerState.x;
  const dy = uv.y - pointerState.y;
  pointerState.x = uv.x;
  pointerState.y = uv.y;

  if (pointerDown) {
    const rightPressed = (event.buttons & 2) !== 0;
    pointerState.active = true;
    pointerState.ink = rightPressed ? -1 : 1;
    pointerState.dx += dx;
    pointerState.dy += dy;
  }
}

function onPointerUp(event: PointerEvent): void {
  pointerDown = false;
  pointerState.active = false;
  pointerState.dx = 0;
  pointerState.dy = 0;
  pointerState.ink = 1;

  if (renderer.domElement.hasPointerCapture(event.pointerId)) {
    renderer.domElement.releasePointerCapture(event.pointerId);
  }
}

function onPointerLeave(): void {
  if (!pointerDown) {
    pointerState.active = false;
    pointerState.dx = 0;
    pointerState.dy = 0;
    pointerState.ink = 1;
  }
}

function onContextMenu(event: MouseEvent): void {
  event.preventDefault();
}

function animate(): void {
  rafId = window.requestAnimationFrame(animate);

  const dt = Math.min(clock.getDelta(), 0.05);
  smoke.setPointer(pointerState);

  if (!paused) {
    simTime += dt;
    smoke.update(dt, simTime);
  }

  pointerState.dx = 0;
  pointerState.dy = 0;

  renderer.render(scene, camera);
}

function onKeyDown(event: KeyboardEvent): void {
  if (event.repeat) {
    return;
  }

  const targetElement = event.target as HTMLElement | null;
  if (targetElement && (targetElement.tagName === "INPUT" || targetElement.tagName === "TEXTAREA" || targetElement.isContentEditable)) {
    return;
  }

  if (event.code === "Space") {
    event.preventDefault();
    paused = !paused;
    ui.setPaused(paused);
    return;
  }

  if (event.code === "KeyR") {
    simTime = 0;
    smoke.reset(activeSeed);
    return;
  }

  if (event.code === "KeyP") {
    void capturePng(renderer, "digital_smoke");
  }
}

window.addEventListener("keydown", onKeyDown);
renderer.domElement.addEventListener("pointerdown", onPointerDown);
renderer.domElement.addEventListener("pointermove", onPointerMove);
renderer.domElement.addEventListener("pointerup", onPointerUp);
renderer.domElement.addEventListener("pointercancel", onPointerUp);
renderer.domElement.addEventListener("pointerleave", onPointerLeave);
renderer.domElement.addEventListener("contextmenu", onContextMenu);
animate();

function dispose(): void {
  if (disposed) {
    return;
  }

  disposed = true;

  window.cancelAnimationFrame(rafId);
  window.removeEventListener("resize", resize);
  window.removeEventListener("keydown", onKeyDown);
  window.removeEventListener("beforeunload", dispose);
  renderer.domElement.removeEventListener("pointerdown", onPointerDown);
  renderer.domElement.removeEventListener("pointermove", onPointerMove);
  renderer.domElement.removeEventListener("pointerup", onPointerUp);
  renderer.domElement.removeEventListener("pointercancel", onPointerUp);
  renderer.domElement.removeEventListener("pointerleave", onPointerLeave);
  renderer.domElement.removeEventListener("contextmenu", onContextMenu);

  ui.dispose();
  smoke.dispose();
  renderer.dispose();

  if (renderer.domElement.parentElement) {
    renderer.domElement.parentElement.removeChild(renderer.domElement);
  }
}

window.addEventListener("beforeunload", dispose);
