function roundFixed(value: number, digits: number): number {
  const multiplier = Math.pow(10, digits)
  return Math.round(value * multiplier) / multiplier
}

interface FluidOpts {
  minVw: number
  maxVw: number
  extendMin: number | null
  extendMax: number | null
}

function fluid(
  start: number,
  end: number,
  minVwOrOpts?: number | Partial<FluidOpts>,
  maxVwArg?: number,
  extendMinPxArg?: number,
  extendMaxPxArg?: number
): string {
  const defaultOpts: FluidOpts = {
    minVw: 375,
    maxVw: 1920,
    extendMin: null,
    extendMax: null,
  }

  const opts: FluidOpts =
    typeof minVwOrOpts === 'object'
      ? { ...defaultOpts, ...minVwOrOpts }
      : {
          minVw: minVwOrOpts ?? defaultOpts.minVw,
          maxVw: maxVwArg ?? defaultOpts.maxVw,
          extendMin: extendMinPxArg ?? defaultOpts.extendMin,
          extendMax: extendMaxPxArg ?? defaultOpts.extendMax,
        }

  const { minVw, maxVw, extendMin, extendMax } = opts

  const rate = roundFixed((100 * (end - start)) / (maxVw - minVw), 1)
  const interceptY = roundFixed(start - (minVw / 100) * rate, 1)

  return `clamp(${start}px, calc(${rate}vw + ${interceptY}px), ${end}px)`
}

export { fluid }
