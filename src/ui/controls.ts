import GUI from "lil-gui";
import { DEFAULT_SMOKE_PARAMS, SMOKE_PARAM_LIMITS, type SmokeParams } from "../smoke/types";

export interface SmokeControlCallbacks {
  onParamsChange(next: Partial<SmokeParams>): void;
  onPauseChange(paused: boolean): void;
  onResetSeed(seed: number): void;
  onResetParams(next: SmokeParams): void;
  onTiltLegacyChange(legacy: boolean): void;
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
};

const MAX_SEED = 2147483646;

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
    tiltLegacy: Boolean(initialTiltLegacy)
  };

  const gui = new GUI({
    title: "Digital Smoke",
    width: 330
  });

  const paramControllers: Array<{ updateDisplay: () => void }> = [];

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

  const imageFolder = gui.addFolder("Image Source");
  addParamController(imageFolder, "seedInfluence", "Seed Influence");
  addParamController(imageFolder, "seedContrast", "Image Contrast");
  addParamController(imageFolder, "seedColorFilter", "Color Filter");

  const imagePointsFolder = gui.addFolder("Image Points");
  addParamController(imagePointsFolder, "seedPointBrightness", "Point Bright");
  addParamController(imagePointsFolder, "seedPointSize", "Point Size");
  addParamController(imagePointsFolder, "seedPointContrast", "Point Contrast");
  addParamController(imagePointsFolder, "seedPointerInfluence", "Pointer Influence");
  addParamController(imagePointsFolder, "seedParallax", "Parallax");
  addParamController(imagePointsFolder, "seedPulseShift", "Pulse Shift");
  addParamController(imagePointsFolder, "seedPulseSpeed", "Pulse Speed");

  const asciiFolder = gui.addFolder("ASCII");
  addParamController(asciiFolder, "asciiScale", "Point Size");
  addParamController(asciiFolder, "asciiLayers", "Point Layers");
  addParamController(asciiFolder, "asciiBlend", "Point Density");
  addParamController(asciiFolder, "asciiMix", "ASCII Mix");
  addParamController(asciiFolder, "asciiJitter", "Point Jitter");
  addParamController(asciiFolder, "asciiSpacingX", "Spacing X");
  addParamController(asciiFolder, "asciiSpacingY", "Spacing Y");
  addParamController(asciiFolder, "asciiThreshold", "Glyph Threshold");
  addParamController(asciiFolder, "asciiFlowDistort", "Flow Distort");

  const styleController = asciiFolder
    .add(state, "asciiStyle", { Mono: 0, Dust: 1, Glitch: 2, Ghost: 3, Fat: 4 })
    .name("Point Style");
  styleController.onChange((value: number | string) => {
    const normalized = Math.max(0, Math.min(4, Math.round(Number(value) || 0)));
    state.asciiStyle = normalized;
    callbacks.onParamsChange({ asciiStyle: normalized });
  });
  paramControllers.push(styleController);

  const interactionFolder = gui.addFolder("Interaction");
  addParamController(interactionFolder, "planeTilt", "Plane Tilt");
  addParamController(interactionFolder, "planeTiltEase", "Tilt Follow");
  const legacyTiltController = interactionFolder.add(state, "tiltLegacy").name("Legacy Tilt");
  legacyTiltController.onChange((value: boolean) => {
    callbacks.onTiltLegacyChange(Boolean(value));
  });
  addParamController(interactionFolder, "pointerDarkness", "RMB Darkness");
  addParamController(interactionFolder, "pointerForce", "Pointer Force");
  addParamController(interactionFolder, "pointerRadius", "Pointer Scale");

  const lookFolder = gui.addFolder("Look");
  addParamController(lookFolder, "opacity", "Opacity");
  addParamController(lookFolder, "contrast", "Contrast");
  addParamController(lookFolder, "detailBoost", "Detail Boost");
  addParamController(lookFolder, "shadowBoost", "Shadow Boost");
  addParamController(lookFolder, "highlightBoost", "Highlight Boost");

  const pauseController = interactionFolder.add(state, "paused").name("Pause");
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
