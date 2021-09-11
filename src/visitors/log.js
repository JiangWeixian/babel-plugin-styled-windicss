import debug from 'debug'

const NAME = 'babel-plugin-styled-windicss'

export const log = {
  template: {
    input: debug(`${NAME}:template:input`),
    output: debug(`${NAME}:template:output`),
  },
}
