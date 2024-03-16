export { fluid } from '../utils/fluid'

type ParsedValue = {
  value: string
  cssVarName: string
  raw: string | number
}
type ParsedSet = Record<string, ParsedValue>

/**
 * KtUnoCssVar
 */
export class KtUnoCssVar {
  private parsedSet: ParsedSet
  private prefix: string

  constructor(prefix: string, obj: Record<string, any>) {
    this.prefix = prefix
    this.parsedSet = this.parseObject(obj)
  }

  parseObject(obj: Record<string, any>, parentKey: string = ''): ParsedSet {
    return Object.entries(obj).reduce((result, [key, value]) => {
      const newKey =
        key === 'DEFAULT' ? parentKey : parentKey ? `${parentKey}-${key}` : key
      const hyphenatedKey = this.camelCaseToHyphenated(newKey)

      if (
        typeof value === 'object' &&
        !Array.isArray(value) &&
        value !== null
      ) {
        // オブジェクトの場合は再帰的に処理
        Object.assign(result, this.parseObject(value, hyphenatedKey))
      } else {
        // それ以外の値の場合
        result[hyphenatedKey] = {
          value: typeof value === 'number' ? `${value}px` : value,
          cssVarName: `--${this.prefix}-${hyphenatedKey}`,
          raw: value,
        }
      }
      return result
    }, {} as ParsedSet)
  }

  camelCaseToHyphenated(str: string): string {
    return str.replace(/([a-z])([A-Z])/g, '$1-$2').toLowerCase()
  }

  toCss(): string {
    return Object.entries(this.parsedSet)
      .map(([key, { value, cssVarName }]) => {
        if (this.prefix === 'fz' && Array.isArray(value)) {
          return `${cssVarName}: ${value[0]};`
        }
        return `${cssVarName}: ${value};`
      })
      .join('\n')
  }

  toUno(): Record<string, string> {
    return Object.entries(this.parsedSet).reduce(
      (acc, [key, { cssVarName, raw }]) => {
        if (this.prefix === 'fz') {
          const extraStyle = Array.isArray(raw) ? raw[1] : {}
          acc[key] = [`var(${cssVarName})`, extraStyle]
          return acc
        } else if (this.prefix === 's') {
          // スペーシングの場合は、calc() で囲まないとマイナス値のクラスが有効にならない
          acc[key] = `calc(var(${cssVarName}))`
          return acc
        } else {
          acc[key] = `var(${cssVarName})`
          return acc
        }
      },
      {} as Record<string, any>
    )
  }
}
