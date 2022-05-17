import React, { Fragment } from 'react'
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

export const Comment = ({ isReply = true, user = false }) => {
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
            {user ? (
              <Fragment>
                <StyledDeleteButton role="button">
                  <img
                    className="h-4"
                    src="./icons/icon-delete.svg"
                    alt="Delete comment"
                  />
                  <p className="px-2">Delete</p>
                </StyledDeleteButton>
                <StyledEditButton
                  role="button"
                  onClick={() => console.log('click')}>
                  <img
                    className="h-4"
                    src="./icons/icon-edit.svg"
                    alt="Edit comment"
                  />
                  <p className="px-2">Edit</p>
                </StyledEditButton>
              </Fragment>
            ) : (
              <StyledEditButton
                role="button"
                onClick={() => console.log('click')}>
                <img
                  className="h-4"
                  src="./icons/icon-reply.svg"
                  alt="Reply comment"
                />
                <p className="px-2">Reply</p>
              </StyledEditButton>
            )}
          </StyledCommentFooter>
        </div>
      </StyledComment>
    </div>
  )
}
