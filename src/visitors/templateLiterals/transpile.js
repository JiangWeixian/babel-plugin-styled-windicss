import { isStyled, isHelper } from '../../utils/detectors'
import { getWindiCSSService } from '../../utils/windicss'
import { transformGroups } from '@windicss/plugin-utils'

export default (t) => (path, state) => {
  const utils = getWindiCSSService(state.opts)
  if (isStyled(t)(path.node.tag, state) || isHelper(t)(path.node.tag, state)) {
    const {
      tag: callee,
      quasi: { quasis, expressions },
    } = path.node

    const values = t.arrayExpression(
      quasis
        .filter((quasi) => quasi.value.cooked !== undefined)
        .map((quasi) => {
          if (/@apply/g.test(quasi.value.cooked)) {
            const result = utils.transformCSS(quasi.value.cooked, './index.js')
            const translated = transformGroups(result)
            if (translated) {
              return t.stringLiteral(translated.code)
            }
            return t.stringLiteral(result)
          }
          return t.stringLiteral(quasi.value.cooked)
        }),
    )

    path.replaceWith(t.callExpression(callee, [values, ...expressions]))
  }
}
