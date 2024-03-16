import { fluid } from '../utils/fluid'
import type { Plugin } from 'postcss'
import valueParser from 'postcss-value-parser'
import type { FunctionNode } from 'postcss-value-parser'

const pluginCreator = (opts: {}): Plugin => {
  return {
    postcssPlugin: 'postcss-kt-fluid',
    Declaration(decl) {
      const parsedValue = valueParser(decl.value)
      let valueChanged = false

      parsedValue.walk((node) => {
        if (node.type !== 'function' || node.value !== 'fluid') return

        const args = node.nodes
          .filter((node) => node.type === 'word')
          .map((node) => {
            const value = node.value
            const jsType = ['true', 'false']

            if (!['true', 'false', 'undefined'].includes(value)) {
              if (value === 'f') return false
              if (value === 't') return true
              new Error('v is not a valid value for fluid function: ')
            }

            return JSON.parse(node.value)
          })

        const clamp = fluid(
          args[0],
          args[1],
          args[2],
          args[3],
          args[4],
          args[5]
        )

        const newNodes = (valueParser(clamp).nodes[0] as FunctionNode).nodes

        node.value = 'clamp'
        node.nodes = newNodes
        valueChanged = true
      })

      if (valueChanged) {
        decl.value = parsedValue.toString()
      }
    },
  }
}
pluginCreator.postcss = true
export default pluginCreator
