import React from 'react'
import {
  CommentHeader,
  StyledComment,
  StyledCommentText,
  StyledImage,
  StyledImageContainer,
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
    </StyledComment>
  )
}
