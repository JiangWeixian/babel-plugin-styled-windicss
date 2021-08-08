import { createUtils } from '@windicss/plugin-utils'

// TODO: enable custom user options
export const utils = createUtils(
  {},
  {
    name: 'babel-loader-styled-windicss',
    onConfigurationError(e) {
      throw e
    },
  },
)

utils.ensureInit()