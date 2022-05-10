import tw from 'tailwind-styled-components'

export const CommentHeader = tw.div`
  h-14
  flex
`

export const StyledComment = tw.div`
  h-auto
  w-3/4
  rounded-md
  text-2xl
  bg-white
  m-2
  md:w-1/2
`

export const StyledImageContainer = tw.div`
  align-middle
  justify-center
  items-center
  flex
  px-4
`

export const StyledImage = tw.img`
  h-10
  w-10
`

export const StyledUsername = tw.div`
  text-sm
  flex-none
  flex
  items-center
`

export const StyledTime = tw.div`
  text-sm
  flex-auto
  text-gray-500
  items-center
  flex
  px-4
`

export const StyledCommentText = tw.div`
  p-4
  text-sm
  text-gray-500
`
export const StyledCommentFooter = tw.footer`
  flex
  h-auto
`

export const StyledLikeButtons = tw.div`
  flex  
  flex-1
  items-center
  p-4
`

export const StyledDeleteButton = tw.span`
  flex
  h-auto
  items-center
  text-sm
  px-2
`

export const StyledEditButton = tw.span`
  flex
  h-auto
  items-center
  text-sm
  px-2
`
