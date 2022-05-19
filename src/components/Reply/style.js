import tw from 'tailwind-styled-components'

export const StyledVerticalLine = tw.hr`
  ${(p) => (p.$reply ? 'h-full border-l-4 ml-2' : 'hidden')}
`

export const StyledReplyContainer = tw.div`
flex w-10/12 2xl:w-10/12
`

export const StyledReplySection = tw.div`
w-full 2xl:w-10/12
`
