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
} from './style'

export const Comment = ({ isReply = false, user = false }) => {
  return (
    <StyledComment isReply={isReply}>
      {isReply && <hr className="float-left h-[110%] border-l-2" />}
      <div className="hidden items-center justify-center md:flex md:w-1/6">
        <StyledLikeButtons vertical={true}>
          <button className="w-8 rounded-t-md bg-[#F3F5F6] p-1 text-sm text-[#BFBDDA]">
            +
          </button>
          <button className="w-8 bg-[#F3F5F6] p-1 text-sm">2</button>
          <button className="w-8 rounded-b-md bg-[#F3F5F6] p-1 text-[#BFBDDA]">
            -
          </button>
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
            <button className="h-8 w-6 rounded-l-md bg-[#F3F5F6] text-sm text-[#BFBDDA]">
              +
            </button>
            <button className="h-8 w-6 bg-[#F3F5F6] text-sm">2</button>
            <button className="h-8 w-6 rounded-r-md bg-[#F3F5F6] text-[#BFBDDA]">
              -
            </button>
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
  )
}
