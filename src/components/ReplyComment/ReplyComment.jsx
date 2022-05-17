import React from 'react'
import {
  StyledCommentInput,
  StyledReplyContainer,
  StyledReplyImageContainer,
  StyledReplyButtonContainer,
} from './style'

export default function ReplyComment() {
  return (
    <StyledReplyContainer>
      <StyledCommentInput placeholder="Add a comment..."></StyledCommentInput>
      <StyledReplyImageContainer>
        <img
          className="mt-2 mb-4 h-8 w-8 md:h-12 md:w-12"
          src="./images/avatars/image-juliusomo.png"></img>
      </StyledReplyImageContainer>

      <StyledReplyButtonContainer>
        <button className="text-md mt-2 mb-4 h-10 w-20 rounded-lg bg-[#5358b6] text-xs font-semibold text-white">
          SEND
        </button>
      </StyledReplyButtonContainer>
    </StyledReplyContainer>
  )
}
