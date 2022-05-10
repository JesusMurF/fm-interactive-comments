import tw from 'tailwind-styled-components'

export const StyledReplyContainer = tw.div`
  h-auto
  bg-white
  w-3/4
  flex
  items-center
  justify-center
  rounded-md
  flex-col
`

export const StyledCommentInput = tw.textarea`
  outline-none
  rounded-md
  w-11/12
  m-2
  h-20
  resize-none
  py-2
  px-4
  ring-1
  focus:outline-none
  focus:ring-2
  focus:border-sky-500 
  focus:ring-sky-500 
  placeholder:text-gray-500
  hover:ring-2
`

export const StyledReplyFooter = tw.footer`
  flex
  flex-row
  justify-between
  w-11/12
  items-center
`
