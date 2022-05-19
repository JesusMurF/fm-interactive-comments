import React from 'react'
import {
  StyledCommentInput,
  StyledReplyContainer,
  StyledReplyImageContainer,
  StyledReplyButtonContainer,
  StyledAvatarImg,
  StyledSendButton,
} from './style'

export default function ReplyTextBox() {
  return (
    <StyledReplyContainer>
      <StyledCommentInput placeholder="Add a comment..."></StyledCommentInput>
      <StyledReplyImageContainer>
        <StyledAvatarImg src="./images/avatars/image-juliusomo.png"></StyledAvatarImg>
      </StyledReplyImageContainer>

      <StyledReplyButtonContainer>
        <StyledSendButton>SEND</StyledSendButton>
      </StyledReplyButtonContainer>
    </StyledReplyContainer>
  )
}
