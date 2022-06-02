import React from 'react'
import { CommentActionsFooter } from '../shared/CommentActionsFooter'
import { CommentActionsHeader } from '../shared/CommentActionsHeader'
import {
  StyledComment,
  StyledCommentHeader,
  StyledCommentText,
  StyledDecrementButton,
  StyledImage,
  StyledImageContainer,
  StyledIncrementButton,
  StyledLikeButtons,
  StyledLoggedUserBadge,
  StyledNumberedButton,
  StyledTime,
  StyledUsername,
  StyledCommentFooter,
} from '../shared/style'
import { ReplyList } from '../ReplyList/ReplyList'
import {
  StyledCommentContainer,
  StyledCommentSection,
  StyledLikeButtonsContainer,
} from './style'

export const Comment = ({
  comment: { content, user, createdAt, replies },
  currentUser,
}) => {
  return (
    <StyledCommentContainer>
      <StyledComment>
        <StyledLikeButtonsContainer>
          <StyledLikeButtons $vertical={true}>
            <StyledIncrementButton $vertical={true}>+</StyledIncrementButton>
            <StyledNumberedButton $vertical={true}>2</StyledNumberedButton>
            <StyledDecrementButton $vertical={true}>-</StyledDecrementButton>
          </StyledLikeButtons>
        </StyledLikeButtonsContainer>
        <StyledCommentSection>
          <StyledCommentHeader>
            <StyledImageContainer>
              <StyledImage src={user.image.png} />
            </StyledImageContainer>
            <StyledUsername>{user.username}</StyledUsername>
            {user && <StyledLoggedUserBadge>you</StyledLoggedUserBadge>}
            <StyledTime>{createdAt}</StyledTime>
            <CommentActionsHeader user={currentUser}></CommentActionsHeader>
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
        </StyledCommentSection>
      </StyledComment>
      <ReplyList replies={replies} currentUser={currentUser}></ReplyList>
    </StyledCommentContainer>
  )
}
