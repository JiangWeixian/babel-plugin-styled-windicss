import { createUtils } from '@windicss/plugin-utils'

let utils

export const getWindiCSSService = (options) => {
  if (utils) {
    return utils
  }
  utils = createUtils(
    options,
    {
      name: 'babel-plugin-styled-windicss',
      onConfigurationError(e) {
        throw e
      },
    },
  )
  utils.ensureInit()
  return utils
}
