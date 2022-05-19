import React from 'react'
import { CommentActionsFooter } from '../shared/CommentActionsFooter'
import { CommentActionsHeader } from '../shared/CommentActionsHeader'
import {
  StyledComment,
  StyledCommentHeader,
  StyledDecrementButton,
  StyledImageContainer,
  StyledIncrementButton,
  StyledLikeButtons,
  StyledNumberedButton,
  StyledImage,
  StyledUsername,
  StyledLoggedUserBadge,
  StyledTime,
  StyledCommentFooter,
  StyledCommentText,
} from '../shared/style'
import {
  StyledReplyContainer,
  StyledReplySection,
  StyledVerticalLine,
} from './style'

export const Reply = ({ reply: { content, user, createdAt } }) => {
  return (
    <StyledReplyContainer>
      <StyledVerticalLine $reply={true} />
      <StyledComment>
        <div className="hidden items-center justify-center md:flex md:w-2/12">
          <StyledLikeButtons $vertical={true}>
            <StyledIncrementButton $vertical={true}>+</StyledIncrementButton>
            <StyledNumberedButton $vertical={true}>2</StyledNumberedButton>
            <StyledDecrementButton $vertical={true}>-</StyledDecrementButton>
          </StyledLikeButtons>
        </div>

        <StyledReplySection>
          <StyledCommentHeader>
            <StyledImageContainer>
              <StyledImage src={user.image.png} />
            </StyledImageContainer>
            <StyledUsername>{user.username}</StyledUsername>
            {user && <StyledLoggedUserBadge>you</StyledLoggedUserBadge>}
            <StyledTime>{createdAt}</StyledTime>
            <CommentActionsHeader user={user}></CommentActionsHeader>
          </StyledCommentHeader>

          <StyledCommentText>{content}</StyledCommentText>
          <StyledCommentFooter>
            <StyledLikeButtons>
              <StyledIncrementButton>+</StyledIncrementButton>
              <StyledNumberedButton>2</StyledNumberedButton>
              <StyledDecrementButton>-</StyledDecrementButton>
            </StyledLikeButtons>
            <CommentActionsFooter user={user}></CommentActionsFooter>
          </StyledCommentFooter>
        </StyledReplySection>
      </StyledComment>
    </StyledReplyContainer>
  )
}
