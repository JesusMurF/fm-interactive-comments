import tw from 'tailwind-styled-components'

export const StyledCommentHeader = tw.div`
  h-14
  flex
`

export const StyledComment = tw.div`
  h-auto
  rounded-md
  text-2xl
  bg-white
  m-2
  flex

  ${({ isReply }) => (isReply ? 'ml-10' : '')}
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

export const StyledLoggedUserBadge = tw.div`
  flex
  justify-center
  text-[10px]
  items-center
  uppercase
  h-5
  w-10
  bg-[#5358b6]
  text-white
  my-4
  mx-2
  rounded-sm
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
  flex
`
export const StyledCommentFooter = tw.footer`
  flex
  h-auto
  md:hidden
`

export const StyledLikeButtons = tw.div`
  flex
  items-center 

  ${({ vertical }) =>
    vertical ? 'flex-col w-full justify-center' : 'flex-1 p-4'}
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
