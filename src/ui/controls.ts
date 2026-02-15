import GUI from "lil-gui";
import { DEFAULT_SMOKE_PARAMS, SMOKE_PARAM_LIMITS, type SmokeParams } from "../smoke/types";

export interface SmokeControlCallbacks {
  onParamsChange(next: Partial<SmokeParams>): void;
  onPauseChange(paused: boolean): void;
  onResetSeed(seed: number): void;
  onResetParams(next: SmokeParams): void;
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
};

const MAX_SEED = 2147483646;

export function createControlsPanel(
  initialParams: SmokeParams,
  initialSeed: number,
  callbacks: SmokeControlCallbacks
): SmokeControlPanel {
  const defaults = { ...DEFAULT_SMOKE_PARAMS };

  const state: UiState = {
    ...initialParams,
    paused: false,
    seed: Math.max(1, Math.floor(initialSeed))
  };

  const gui = new GUI({
    title: "Digital Smoke",
    width: 330
  });

  const paramControllers: Array<{ updateDisplay: () => void }> = [];

  function addParamController<K extends keyof SmokeParams>(key: K, label: string): void {
    const limits = SMOKE_PARAM_LIMITS[key];
    const controller = gui.add(state, key, limits.min, limits.max, limits.step).name(label);

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

  addParamController("simResolution", "Sim Resolution");
  addParamController("emitRate", "Emission");
  addParamController("seedInfluence", "Seed Influence");
  addParamController("seedContrast", "Image Contrast");
  addParamController("seedColorFilter", "Color Filter");
  addParamController("seedParallax", "Point Parallax");
  addParamController("seedPulseShift", "Pulse Shift");
  addParamController("seedPulseSpeed", "Pulse Speed");
  addParamController("seedPointBrightness", "Image Pt Bright");
  addParamController("seedPointSize", "Image Pt Size");
  addParamController("seedPointContrast", "Image Pt Contrast");
  addParamController("seedPointerInfluence", "Image Pt Pointer");
  addParamController("sourceRadius", "Source Radius");
  addParamController("densityDissipation", "Density Keep");
  addParamController("velocityDissipation", "Velocity Keep");
  addParamController("buoyancy", "Buoyancy");
  addParamController("vorticity", "Vorticity");
  addParamController("pressureIterations", "Pressure Iter.");
  addParamController("noiseScale", "Noise Scale");
  addParamController("turbulence", "Turbulence");
  addParamController("advection", "Advection");
  addParamController("drag", "Drag");
  addParamController("opacity", "Opacity");
  addParamController("contrast", "Contrast");
  addParamController("persistence", "Persistence");
  addParamController("detailBoost", "Detail Boost");
  addParamController("shadowBoost", "Shadow Boost");
  addParamController("highlightBoost", "Highlight Boost");
  addParamController("asciiScale", "Point Size");
  addParamController("asciiLayers", "Point Layers");
  addParamController("asciiBlend", "Point Density");
  addParamController("asciiMix", "ASCII Mix");
  addParamController("asciiJitter", "Point Jitter");
  addParamController("asciiSpacingX", "ASCII Spacing X");
  addParamController("asciiSpacingY", "ASCII Spacing Y");
  addParamController("asciiThreshold", "Glyph Threshold");
  addParamController("asciiFlowDistort", "Flow Distort");

  const styleController = gui
    .add(state, "asciiStyle", { Mono: 0, Dust: 1, Glitch: 2, Ghost: 3, Fat: 4 })
    .name("Point Style");
  styleController.onChange((value: number | string) => {
    const normalized = Math.max(0, Math.min(4, Math.round(Number(value) || 0)));
    state.asciiStyle = normalized;
    callbacks.onParamsChange({ asciiStyle: normalized });
  });
  paramControllers.push(styleController);

  addParamController("pointerDarkness", "RMB Darkness");
  addParamController("pointerForce", "Pointer Force");
  addParamController("pointerRadius", "Pointer Scale");

  const pauseController = gui.add(state, "paused").name("Pause");
  pauseController.onChange((value: boolean) => {
    callbacks.onPauseChange(Boolean(value));
  });

  const seedFolder = gui.addFolder("Seed");
  const seedController = seedFolder.add(state, "seed", 1, MAX_SEED, 1).name("Value");
  seedController.onFinishChange((value: number) => {
    state.seed = Math.max(1, Math.min(MAX_SEED, Math.floor(value)));
    seedController.updateDisplay();
  });

  const seedActions = {
    resetSeed: () => {
      callbacks.onResetSeed(state.seed);
    },
    randomSeed: () => {
      state.seed = Math.floor(Math.random() * MAX_SEED) + 1;
      seedController.updateDisplay();
      callbacks.onResetSeed(state.seed);
    }
  };

  seedFolder.add(seedActions, "resetSeed").name("Reset Seed");
  seedFolder.add(seedActions, "randomSeed").name("Random Seed");

  const toolsFolder = gui.addFolder("Actions");
  const toolActions = {
    resetParams: () => {
      Object.assign(state, defaults);
      for (const controller of paramControllers) {
        controller.updateDisplay();
      }

      state.paused = false;
      pauseController.updateDisplay();

      callbacks.onResetParams({ ...defaults });
      callbacks.onPauseChange(false);
    },
    screenshot: () => {
      callbacks.onScreenshot();
    }
  };

  toolsFolder.add(toolActions, "resetParams").name("Reset Params");
  toolsFolder.add(toolActions, "screenshot").name("Screenshot PNG");

  return {
    dispose(): void {
      gui.destroy();
    },

    setPaused(paused: boolean): void {
      state.paused = paused;
      pauseController.updateDisplay();
    },

    setSeed(seed: number): void {
      state.seed = Math.max(1, Math.min(MAX_SEED, Math.floor(seed)));
      seedController.updateDisplay();
    }
  };
}
