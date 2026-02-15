import GUI from "lil-gui";
import { DEFAULT_SMOKE_PARAMS, SMOKE_PARAM_LIMITS, type SmokeParams } from "../smoke/types";

export interface SmokeControlCallbacks {
  onParamsChange(next: Partial<SmokeParams>): void;
  onPauseChange(paused: boolean): void;
  onResetSeed(seed: number): void;
  onResetParams(next: SmokeParams): void;
  onTiltLegacyChange(legacy: boolean): void;
  onSeedMorphChange(value: number): void;
  onPickSeedImage(): void;
  onPickSeedVideo(): void;
  onUseDefaultSeedImage(): void;
  onUseDefaultSeedVideo(): void;
  onScreenshot(): void;
}

export interface SmokeControlPanel {
  dispose(): void;
  setPaused(paused: boolean): void;
  setSeed(seed: number): void;
}

type UiState = SmokeParams & {
  paused: boolean;
  seed: number;
  tiltLegacy: boolean;
  seedMorph: number;
};

const MAX_SEED = 2147483646;

type UiThemeState = {
  uiScale: number;
  panelOpacity: number;
  panelBlurPx: number;
  panelBorderAlpha: number;
  widgetAlpha: number;
  titleAlpha: number;
  textColor: string;
  textAlpha: number;
  numberColor: string;
  numberAlpha: number;
  sliderTrackColor: string;
  sliderTrackAlpha: number;
  sliderFillColor: string;
  sliderFillAlpha: number;
  sliderKnobColor: string;
  sliderKnobAlpha: number;
  sliderKnobBorderColor: string;
  sliderKnobBorderAlpha: number;
  sliderKnobChamfer: number;
  sliderKnobBevelAlpha: number;
  sliderThickness: number;
  sliderKnobSize: number;
};

const APPLIED_UI_THEME: UiThemeState = {
  uiScale: 1.05,
  panelOpacity: 0.37,
  panelBlurPx: 3,
  panelBorderAlpha: 0,
  widgetAlpha: 0,
  titleAlpha: 0,
  textColor: "#808080",
  textAlpha: 0.92,
  numberColor: "#808080",
  numberAlpha: 0.95,
  sliderTrackColor: "#808080",
  sliderTrackAlpha: 0.34,
  sliderFillColor: "#808080",
  sliderFillAlpha: 0.98,
  sliderKnobColor: "#808080",
  sliderKnobAlpha: 1.0,
  sliderKnobBorderColor: "#808080",
  sliderKnobBorderAlpha: 0,
  sliderKnobChamfer: 1.5,
  sliderKnobBevelAlpha: 0.3,
  sliderThickness: 1,
  sliderKnobSize: 8.75
};

function hexToRgb(hex: string): string {
  const value = hex.trim().replace(/^#/, "");
  const normalized = value.length === 3 ? value.split("").map((ch) => `${ch}${ch}`).join("") : value;
  if (!/^[0-9a-fA-F]{6}$/.test(normalized)) {
    return "255, 255, 255";
  }
  const parsed = Number.parseInt(normalized, 16);
  const r = (parsed >> 16) & 255;
  const g = (parsed >> 8) & 255;
  const b = parsed & 255;
  return `${r}, ${g}, ${b}`;
}

function applyUiTheme(theme: UiThemeState): void {
  const root = document.documentElement;
  root.style.setProperty("--ui-scale", theme.uiScale.toFixed(3));
  root.style.setProperty("--ui-panel-opacity", theme.panelOpacity.toFixed(3));
  root.style.setProperty("--ui-panel-blur", `${theme.panelBlurPx.toFixed(1)}px`);
  root.style.setProperty("--ui-panel-border-alpha", theme.panelBorderAlpha.toFixed(3));
  root.style.setProperty("--ui-widget-alpha", theme.widgetAlpha.toFixed(3));
  root.style.setProperty("--ui-title-alpha", theme.titleAlpha.toFixed(3));
  root.style.setProperty("--ui-text-rgb", hexToRgb(theme.textColor));
  root.style.setProperty("--ui-text-alpha", theme.textAlpha.toFixed(3));
  root.style.setProperty("--ui-number-rgb", hexToRgb(theme.numberColor));
  root.style.setProperty("--ui-number-alpha", theme.numberAlpha.toFixed(3));
  root.style.setProperty("--ui-slider-track-rgb", hexToRgb(theme.sliderTrackColor));
  root.style.setProperty("--ui-slider-track-alpha", theme.sliderTrackAlpha.toFixed(3));
  root.style.setProperty("--ui-slider-fill-rgb", hexToRgb(theme.sliderFillColor));
  root.style.setProperty("--ui-slider-fill-alpha", theme.sliderFillAlpha.toFixed(3));
  root.style.setProperty("--ui-slider-knob-rgb", hexToRgb(theme.sliderKnobColor));
  root.style.setProperty("--ui-slider-knob-alpha", theme.sliderKnobAlpha.toFixed(3));
  root.style.setProperty("--ui-slider-knob-border-rgb", hexToRgb(theme.sliderKnobBorderColor));
  root.style.setProperty("--ui-slider-knob-border-alpha", theme.sliderKnobBorderAlpha.toFixed(3));
  root.style.setProperty("--ui-slider-knob-chamfer", `${theme.sliderKnobChamfer.toFixed(2)}px`);
  root.style.setProperty("--ui-slider-knob-bevel-alpha", theme.sliderKnobBevelAlpha.toFixed(3));
  root.style.setProperty("--ui-slider-thickness", `${theme.sliderThickness.toFixed(2)}px`);
  root.style.setProperty("--ui-slider-knob-size", `${theme.sliderKnobSize.toFixed(2)}px`);
}

export function createControlsPanel(
  initialParams: SmokeParams,
  initialSeed: number,
  callbacks: SmokeControlCallbacks,
  initialTiltLegacy = false
): SmokeControlPanel {
  const defaults = { ...DEFAULT_SMOKE_PARAMS };

  const state: UiState = {
    ...initialParams,
    paused: false,
    seed: Math.max(1, Math.floor(initialSeed)),
    tiltLegacy: Boolean(initialTiltLegacy),
    seedMorph: 0
  };

  const gui = new GUI({
    title: "Digital Smoke",
    width: 330
  });

  const paramControllers: Array<{ updateDisplay: () => void }> = [];
  applyUiTheme(APPLIED_UI_THEME);

  function addParamController<K extends keyof SmokeParams>(parent: GUI, key: K, label: string): void {
    const limits = SMOKE_PARAM_LIMITS[key];
    const controller = parent.add(state, key, limits.min, limits.max, limits.step).name(label);

    controller.onChange((value: number) => {
      const normalized =
        key === "simResolution"
          ? Math.round(value / 32) * 32
          : key === "pressureIterations" ||
              key === "asciiScale" ||
              key === "asciiStyle" ||
              key === "asciiLayers" ||
              key === "depthLayers"
            ? Math.round(value)
            : value;
      state[key] = normalized as SmokeParams[K];
      callbacks.onParamsChange({ [key]: normalized } as Partial<SmokeParams>);
    });

    paramControllers.push(controller);
  }

  const imageFolder = gui.addFolder("Input Output");
  const imageActions = {
    loadImage: () => {
      callbacks.onPickSeedImage();
    },
    loadVideo: () => {
      callbacks.onPickSeedVideo();
      state.seedMorph = 0;
      callbacks.onSeedMorphChange(0);
    },
    useDefaultImage: () => {
      callbacks.onUseDefaultSeedImage();
      state.seedMorph = 0;
      callbacks.onSeedMorphChange(0);
    },
    exportPng: () => {
      callbacks.onScreenshot();
    }
  };
  imageFolder.add(imageActions, "loadImage").name("Load Image...");
  imageFolder.add(imageActions, "loadVideo").name("Load Video...");
  imageFolder.add(imageActions, "useDefaultImage").name("Use Default");
  imageFolder.add(imageActions, "exportPng").name("Export PNG");

  const lookFolder = gui.addFolder("Look");
  addParamController(lookFolder, "seedInfluence", "Seed Distortion");
  addParamController(lookFolder, "seedContrast", "Image Contrast");
  addParamController(lookFolder, "seedHue", "Hue");
  addParamController(lookFolder, "seedColorFilter", "Temperature");
  addParamController(lookFolder, "detailBoost", "Detail Boost");
  addParamController(lookFolder, "shadowBoost", "Shadow Boost");
  addParamController(lookFolder, "highlightBoost", "Highlight Boost");
  addParamController(lookFolder, "pointerForce", "Pointer Force");
  addParamController(lookFolder, "pointerRadius", "Pointer Scale");
  addParamController(lookFolder, "pointerTrail", "Pointer Trail");
  const styleController = lookFolder
    .add(state, "asciiStyle", { Dust: 1, Glitch: 2 })
    .name("Point Style");
  styleController.onChange((value: number | string) => {
    const numeric = Number(value);
    const normalized = numeric >= 1.5 ? 2 : 1;
    state.asciiStyle = normalized;
    callbacks.onParamsChange({ asciiStyle: normalized });
  });
  paramControllers.push(styleController);

  const pointAsciiFolder = gui.addFolder("Points + ASCII");
  addParamController(pointAsciiFolder, "seedPointBrightness", "Point Bright");
  addParamController(pointAsciiFolder, "seedPointSize", "Point Size");
  addParamController(pointAsciiFolder, "seedPointContrast", "Point Contrast");
  addParamController(pointAsciiFolder, "seedPointerInfluence", "Pointer Influence");
  addParamController(pointAsciiFolder, "asciiScale", "Point Size");
  addParamController(pointAsciiFolder, "asciiLayers", "Point Layers");
  addParamController(pointAsciiFolder, "asciiBlend", "Point Density");
  addParamController(pointAsciiFolder, "asciiMix", "ASCII Mix");
  addParamController(pointAsciiFolder, "asciiJitter", "Point Jitter");
  addParamController(pointAsciiFolder, "asciiSpacingX", "Spacing X");
  addParamController(pointAsciiFolder, "asciiSpacingY", "Spacing Y");
  addParamController(pointAsciiFolder, "asciiThreshold", "Glyph Threshold");
  addParamController(pointAsciiFolder, "asciiFlowDistort", "Flow Distort");

  const simulationFolder = gui.addFolder("Simulation");
  addParamController(simulationFolder, "simResolution", "Sim Resolution");
  addParamController(simulationFolder, "emitRate", "Emission");
  addParamController(simulationFolder, "sourceRadius", "Source Radius");
  addParamController(simulationFolder, "densityDissipation", "Density Keep");
  addParamController(simulationFolder, "velocityDissipation", "Velocity Keep");
  addParamController(simulationFolder, "buoyancy", "Buoyancy");
  addParamController(simulationFolder, "vorticity", "Vorticity");
  addParamController(simulationFolder, "pressureIterations", "Pressure Iter.");
  addParamController(simulationFolder, "noiseScale", "Noise Scale");
  addParamController(simulationFolder, "turbulence", "Turbulence");
  addParamController(simulationFolder, "advection", "Advection");
  addParamController(simulationFolder, "drag", "Drag");
  addParamController(simulationFolder, "persistence", "Persistence");

  const interactionFolder = gui.addFolder("Interaction");
  addParamController(interactionFolder, "planeTilt", "Plane Tilt");
  addParamController(interactionFolder, "planeTiltEase", "Tilt Follow");
  const legacyTiltController = interactionFolder.add(state, "tiltLegacy").name("Legacy Tilt");
  legacyTiltController.onChange((value: boolean) => {
    callbacks.onTiltLegacyChange(Boolean(value));
  });
  addParamController(interactionFolder, "seedParallax", "Parallax");
  addParamController(interactionFolder, "seedPulseShift", "Pulse Shift");
  addParamController(interactionFolder, "seedPulseSpeed", "Pulse Speed");

  const resetFolder = gui.addFolder("Reset");
  const resetActions = {
    resetParams: () => {
      Object.assign(state, defaults);
      for (const controller of paramControllers) {
        controller.updateDisplay();
      }

      state.paused = false;
      state.seedMorph = 0;
      callbacks.onSeedMorphChange(0);

      callbacks.onResetParams({ ...defaults });
      callbacks.onPauseChange(false);
    },
    randomSeed: () => {
      state.seed = Math.floor(Math.random() * MAX_SEED) + 1;
      callbacks.onResetSeed(state.seed);
    }
  };

  resetFolder.add(resetActions, "resetParams").name("Reset Params");
  resetFolder.add(resetActions, "randomSeed").name("Random Seed");

  return {
    dispose(): void {
      gui.destroy();
    },

    setPaused(paused: boolean): void {
      state.paused = paused;
    },

    setSeed(seed: number): void {
      state.seed = Math.max(1, Math.min(MAX_SEED, Math.floor(seed)));
    }
  };
}
