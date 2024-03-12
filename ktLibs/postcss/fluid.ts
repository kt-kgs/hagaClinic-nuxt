import { fluid } from '../utils/fluid'
import type { Plugin } from 'postcss'
import valueParser from 'postcss-value-parser'

const pluginCreator = (opts: {}): Plugin => {
  return {
    postcssPlugin: 'postcss-kt-fluid',
    Declaration(decl) {
      const { value } = decl
      if (!value.includes('fluid(')) return

      const parsedValue = valueParser(value)
      parsedValue.nodes.map((node) => {
        if (node.type !== 'function' || node.value !== 'fluid') return

        const args = node.nodes
          .filter((node) => node.type === 'word')
          .map((node) => +node.value)

        decl.value = fluid(args[0], args[1])
      })
    },
  }
}
pluginCreator.postcss = true
export default pluginCreator
