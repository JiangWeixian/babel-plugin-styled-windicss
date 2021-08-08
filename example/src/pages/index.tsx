import styled from 'styled-components'

const NamedWithInterpolation = styled.div`
  & {
    @apply m-0 p-0 w-100vw h-100vh overflow-hidden hover:(bg-blue-500 text-xs);
  }
`

export default function IndexPage() {
  return (
    <div>
      1
      <NamedWithInterpolation />
    </div>
  );
}
