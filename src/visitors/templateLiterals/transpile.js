import { isStyled, isHelper } from '../../utils/detectors'
import { parse } from '../../utils/windicss'
import { log } from '../log'

const APPLY_REGEX = /(.*)@apply([^`\${};]*);\n/gm

export default (t) => (path, state) => {
  if (isStyled(t)(path.node.tag, state) || isHelper(t)(path.node.tag, state)) {
    const {
      tag: callee,
      quasi: { quasis, expressions },
    } = path.node

    const values = t.arrayExpression(
      quasis
        .filter((quasi) => quasi.value.cooked !== undefined)
        .map((quasi) => {
          log.template.input(quasi.value.cooked)
          if (/@apply/g.test(quasi.value.cooked)) {
            const next = quasi.value.cooked.replace(
              APPLY_REGEX,
              (_match, pre, applyCss) => {
                const parsed = parse(`&{@apply ${applyCss}}`)
                return `${pre} ${parsed}`
              },
            )
            log.template.output(next)
            return t.stringLiteral(next)
          }
          return t.stringLiteral(quasi.value.cooked)
        }),
    )

    path.replaceWith(t.callExpression(callee, [values, ...expressions]))
  }
}
