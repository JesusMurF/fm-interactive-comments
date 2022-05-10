import React from 'react'
import {
  CommentHeader,
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
} from './style'

export const Comment = () => {
  return (
    <StyledComment>
      <CommentHeader>
        <StyledImageContainer>
          <StyledImage src="./images/avatars/image-amyrobson.png" />
        </StyledImageContainer>
        <StyledUsername>Amy Robson</StyledUsername>
        <StyledTime>one month ago</StyledTime>
      </CommentHeader>
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
        <StyledDeleteButton role="button">
          <img
            className="h-4"
            src="./icons/icon-delete.svg"
            alt="Delete comment"
          />
          <p className="px-2">Delete</p>
        </StyledDeleteButton>
        <StyledEditButton role="button" onClick={() => console.log('click')}>
          <img className="h-4" src="./icons/icon-edit.svg" alt="Edit comment" />
          <p className="px-2">Edit</p>
        </StyledEditButton>
      </StyledCommentFooter>
    </StyledComment>
  )
}
