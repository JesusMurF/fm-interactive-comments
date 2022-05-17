import tw from 'tailwind-styled-components'

export const StyledReplyContainer = tw.div`
  h-auto
  bg-white
  w-full
  flex
  items-start
  justify-center
  rounded-md
  p-4
  flex-wrap
  
  md:flex-nowrap
`

export const StyledCommentInput = tw.textarea`
  outline-none
  rounded-md
  w-full
  m-2
  h-20
  resize-none
  py-2
  px-4
  ring-1
  focus:outline-none
  focus:ring-2
  focus:ring-sky-500 
  placeholder:text-gray-500
  hover:ring-2
  transition 
  ease-in-out 
  delay-300

  md:order-2
`
export const StyledReplyImageContainer = tw.div`
  flex 
  w-1/2 
  items-center 
  justify-start 
  
  md:order-1 
  md:w-20
`
export const StyledReplyButtonContainer = tw.div`
  flex 
  w-1/2 
  justify-end 
  
  md:order-3 
  md:w-20
`
