import tw from 'tailwind-styled-components/dist/tailwind'

export const StyledComment = tw.div`
  h-auto
  rounded-md
  text-2xl
  bg-white
  m-2
  flex
  w-full
`

export const StyledCommentHeader = tw.div`
  h-14
  flex
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

export const StyledDeleteButton = tw.span`
  h-auto
  items-center
  text-sm
  px-2

  ${(p) => (p.$user ? 'flex' : 'hidden')}
`

export const StyledEditButton = tw.span`
  h-auto
  items-center
  text-sm
  px-2

  ${(p) => (p.$user ? 'flex' : 'hidden')}
`

export const StyledReplyButton = tw.span`
  h-auto
  items-center
  text-sm
  px-2

  ${(p) => (p.$user ? 'flex' : 'hidden')}
`

export const StyledLikeButtons = tw.div`
  flex
  items-center 

  ${(p) => (p.$vertical ? 'flex-col w-full justify-center' : 'flex-1 p-4')}
`

export const StyledNumberedButton = tw.button`
 bg-[#F3F5F6] 
 p-1 
 text-sm

 ${(p) => (p.$vertical ? 'w-8' : 'h-8 w-6')}
`

export const StyledIncrementButton = tw.button`
  h-8 
  bg-[#F3F5F6] 
  p-1 
  text-sm 
  text-[#BFBDDA]

  ${(p) => (p.$vertical ? 'w-8 rounded-t-md' : 'w-6 rounded-l-md ')}
`

export const StyledDecrementButton = tw.button`
 flex
 items-center
 justify-center
 h-8 
 bg-[#F3F5F6] 
 p-1 
 text-[#BFBDDA]

  ${(p) => (p.$vertical ? 'w-8 rounded-b-md' : 'w-6  rounded-r-md  ')}
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

export const StyledCommentActionsHeaderContainer = tw.div`
hidden justify-end md:flex
`

export const StyledCommentActionsFooterContainer = tw.div`
flex justify-end md:hidden
`
