# Digital Smoke

Interactive GPU fluid smoke playground built with Three.js, TypeScript, and Vite.
The current version focuses on image/video-driven smoke shaping, point + ASCII rendering,
and fast live tuning from a compact control panel.

## Features

- 2D GPU fluid simulation with turbulence, vorticity, pressure solve, and advection controls
- Seed input pipeline: load image, load video, or switch back to default source
- Point + ASCII hybrid rendering with selectable styles (`Dust`, `Glitch`)
- Look controls for `Seed Distortion`, `Image Contrast`, `Hue`, and `Temperature`
- Pointer-reactive smoke with `Pointer Force`, `Pointer Scale`, and `Pointer Trail`
- Plane interaction controls (tilt/parallax follow)
- Reliable PNG export directly from the UI (`Export PNG`)
- Updated default preset tuned to the current UI setup

## Stack

- `three`
- `lil-gui`
- `vite`
- `typescript`

## Run

Getting started:

```bash
npm install
npm run dev
```

Build:

```bash
npm run build
npm run preview
```

## Controls

- `LMB` drag: white smoke
- `RMB` drag: black smoke
- `Mouse wheel`: subtle plane zoom
- `Space`: pause/resume
- `R`: reset seed
- `P`: screenshot PNG

## UI Folders

- `Input Output`: `Load Image...`, `Load Video...`, `Use Default`, `Export PNG`
- `Look`: seed distortion and look shaping, pointer force/scale/trail, point style
- `Points + ASCII`: image-point response and ASCII density/jitter/flow controls
- `Simulation`: core fluid solver and persistence tuning
- `Interaction`: plane tilt and parallax motion response
- `Reset`: `Reset Params` and `Random Seed`

## Project

- Entry: `src/main.ts`
- Solver: `src/smoke/SmokeSystem.ts`
- Params: `src/smoke/types.ts`
- Controls: `src/ui/controls.ts`
- Screenshot util: `src/utils/screenshot.ts`
