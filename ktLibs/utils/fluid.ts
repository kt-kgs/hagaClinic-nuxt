type FluidOpts = {
  minWidth: number
  maxWidth: number
  extMinSize: number | boolean
  extMaxSize: number | boolean
}

function fluid(
  minSize: number,
  maxSize: number,
  minWidth: number | false = false,
  maxWidth: number | false = false,
  extMinSize: number | boolean = false,
  extMaxSize: number | boolean = false
): string {
  // default options
  const defaultOpts = {
    minWidth: 640,
    maxWidth: 1920,
    extMinSize: false,
    extMaxSize: false,
  }
  // new options
  const opts: FluidOpts = {
    minWidth: Number(isNumeric(minWidth) ? minWidth : defaultOpts.minWidth),
    maxWidth: Number(isNumeric(maxWidth) ? maxWidth : defaultOpts.maxWidth),
    extMinSize: extMinSize,
    extMaxSize: extMaxSize,
  }

  function isNumeric(value: any): boolean {
    return typeof value === 'number' && !isNaN(value)
  }

  const rate = Number(
    ((100 * (maxSize - minSize)) / (opts.maxWidth - opts.minWidth)).toFixed(2)
  )

  const interceptY = Number((minSize - (opts.minWidth / 100) * rate).toFixed(2))

  const resultMinSize = (() => {
    if (opts.extMinSize === false) return minSize
    if (opts.extMinSize === true) return 0
    return opts.extMinSize
  })()
  const resultMaxSize = (() => {
    if (opts.extMaxSize === false) return maxSize
    if (opts.extMaxSize === true) return 9999
    return opts.extMaxSize
  })()

  return `clamp(${resultMinSize}px, ${rate}vw + ${interceptY}px, ${resultMaxSize}px)`
}

export { fluid }
