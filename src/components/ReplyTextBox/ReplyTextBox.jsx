import React from 'react'
import {
  StyledReplyInput,
  StyledReplyContainer,
  StyledReplyImageContainer,
  StyledReplyButtonContainer,
  StyledAvatarImg,
  StyledSendButton,
} from './style'

export default function ReplyTextBox({ currentUser: { image } }) {
  return (
    <StyledReplyContainer>
      <StyledReplyInput placeholder="Add a comment..."></StyledReplyInput>
      <StyledReplyImageContainer>
        <StyledAvatarImg src={image.png}></StyledAvatarImg>
      </StyledReplyImageContainer>

      <StyledReplyButtonContainer>
        <StyledSendButton>SEND</StyledSendButton>
      </StyledReplyButtonContainer>
    </StyledReplyContainer>
  )
}
