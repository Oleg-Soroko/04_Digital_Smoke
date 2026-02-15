const UINT_32_MAX_PLUS_ONE = 0x100000000;

export function normalizeSeed(seed: number): number {
  if (!Number.isFinite(seed)) {
    return 1;
  }

  const normalized = Math.abs(Math.floor(seed)) >>> 0;
  return normalized === 0 ? 1 : normalized;
}

export class SeededRandom {
  private state: number;

  constructor(seed: number) {
    this.state = normalizeSeed(seed);
  }

  setSeed(seed: number): void {
    this.state = normalizeSeed(seed);
  }

  next(): number {
    let t = (this.state += 0x6d2b79f5);
    t = Math.imul(t ^ (t >>> 15), t | 1);
    t ^= t + Math.imul(t ^ (t >>> 7), t | 61);
    return ((t ^ (t >>> 14)) >>> 0) / UINT_32_MAX_PLUS_ONE;
  }

  signed(): number {
    return this.next() * 2 - 1;
  }

  range(min: number, max: number): number {
    return min + (max - min) * this.next();
  }
}
