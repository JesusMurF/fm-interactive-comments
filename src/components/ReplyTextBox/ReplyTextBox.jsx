import React from 'react'
import {
  StyledReplyInput,
  StyledReplyContainer,
  StyledReplyImageContainer,
  StyledReplyButtonContainer,
  StyledAvatarImg,
  StyledSendButton,
} from './style'

export default function ReplyTextBox() {
  return (
    <StyledReplyContainer>
      <StyledReplyInput placeholder="Add a comment..."></StyledReplyInput>
      <StyledReplyImageContainer>
        <StyledAvatarImg src="./images/avatars/image-juliusomo.png"></StyledAvatarImg>
      </StyledReplyImageContainer>

      <StyledReplyButtonContainer>
        <StyledSendButton>SEND</StyledSendButton>
      </StyledReplyButtonContainer>
    </StyledReplyContainer>
  )
}
