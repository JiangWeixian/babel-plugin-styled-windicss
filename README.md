# `babel-plugin-styled-windicss`
> windicss + styled-components = 🥰

a fork version of [babel-plugin-styled-components](https://github.com/styled-components/babel-plugin-styled-components), but just compile windicss into css

## feature

1. support compile tailwindcss `@apply`
2. support compile windicss `group`

## install

Install the plugin first:

```
npm install --save-dev babel-plugin-styled-windicss
```

Then add it to your babel configuration:

```JSON
{
  "plugins": ["babel-plugin-styled-windicss"]
}
```
## usage

> **💡 NOTE**  
see more example [here](./example/src/pages/index.tsx)

**compile tailwindcss `@apply`**

```tsx
// input
const Wrapped = styled(Inner)`
  color: red;
  @apply m-0 p-0 w-100vw h-100vh overflow-hidden;
`
// output
const Wrapped = styled(Inner)`
  color: red;
  margin: 0px;
  overflow: hidden;
  padding: 0px;
  width: 100vw;
`
```

**compile windicss `group`**

- **limitations**

```tsx
// input
const Wrapped = styled(Inner)`
  @apply m-0 p-0 w-100vw h-100vh overflow-hidden hover:(bg-blue-500 text-xs);
`

const Wrapped = styled(Inner)`
  color: red;
  &:hover {
    -tw-bg-opacity: 1;
    background-color: rgba(59, 130, 246, var(--tw-bg-opacity));
    font-size: 0.75rem;\
    line-height: 1rem;
  }
  & {
    height: 100vh;
    margin: 0px;
    overflow: hidden;
    padding: 0px;
    width: 100vw;
  }
`
```


