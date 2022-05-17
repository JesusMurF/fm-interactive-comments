import React, { Fragment } from 'react'
import { CommentActions } from '../CommentActions/CommentActions'
import {
  StyledCommentHeader,
  StyledComment,
  StyledCommentFooter,
  StyledCommentText,
  StyledDeleteButton,
  StyledEditButton,
  StyledImage,
  StyledImageContainer,
  StyledLikeButtons,
  StyledTime,
  StyledUsername,
  StyledLoggedUserBadge,
  StyledIncrementButton,
  StyledNumberedButton,
  StyledDecrementButton,
  StyledVerticalLine,
} from './style'

export const Comment = ({ isReply = true, user = true }) => {
  return (
    <div className="flex">
      <StyledVerticalLine $reply={isReply} />
      <StyledComment>
        <div className="hidden items-center justify-center md:flex md:w-1/6">
          <StyledLikeButtons $vertical={true}>
            <StyledIncrementButton $vertical={true}>+</StyledIncrementButton>
            <StyledNumberedButton $vertical={true}>2</StyledNumberedButton>
            <StyledDecrementButton $vertical={true}>-</StyledDecrementButton>
          </StyledLikeButtons>
        </div>
        <div className="w-full md:w-5/6">
          <StyledCommentHeader>
            <StyledImageContainer>
              <StyledImage src="./images/avatars/image-amyrobson.png" />
            </StyledImageContainer>
            <StyledUsername>Amy Robson</StyledUsername>
            {user && <StyledLoggedUserBadge>you</StyledLoggedUserBadge>}
            <StyledTime>one month ago</StyledTime>
            <CommentActions
              className="hidden md:flex"
              user={user}></CommentActions>
          </StyledCommentHeader>

          <StyledCommentText>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Labore
            provident, nostrum doloremque similique natus recusandae, esse modi
            tempore quia dolore, odit numquam omnis reprehenderit necessitatibus
            animi ex hic ipsum! Excepturi?
          </StyledCommentText>
          <StyledCommentFooter>
            <StyledLikeButtons>
              <StyledIncrementButton>+</StyledIncrementButton>
              <StyledNumberedButton>2</StyledNumberedButton>
              <StyledDecrementButton>-</StyledDecrementButton>
            </StyledLikeButtons>
            <CommentActions className="md:hidden" user={user}></CommentActions>
          </StyledCommentFooter>
        </div>
      </StyledComment>
    </div>
  )
}
