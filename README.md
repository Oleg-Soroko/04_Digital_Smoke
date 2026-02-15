# Digital Smoke

Interactive GPU fluid smoke tool built with Three.js, TypeScript, and Vite.

## Features

- 2D GPU fluid simulation with turbulence and vorticity
- Image/video seeded smoke source
- Point-cloud and ASCII styled rendering mix
- Mouse interaction for white/black smoke injection
- Tilt/parallax interaction panel controls
- PNG export from UI

## Stack

- `three`
- `lil-gui`
- `vite`
- `typescript`

## Run

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
- `Space`: pause/resume
- `R`: reset seed
- `P`: screenshot PNG

## UI Folders

- `Input Output`: load image/video seed, use default seed, export PNG
- `Look`: seed distortion/color and global look tuning
- `Points + ASCII`: point/ASCII style controls
- `Simulation`: solver and fluid behavior
- `Interaction`: plane tilt/parallax response
- `Reset`: reset params and random seed

## Project

- Entry: `src/main.ts`
- Solver: `src/smoke/SmokeSystem.ts`
- Params: `src/smoke/types.ts`
- Controls: `src/ui/controls.ts`
- Screenshot util: `src/utils/screenshot.ts`
