import React from 'react'

import { Comment } from '../Comment/Comment'
import ReplyComment from '../ReplyComment/ReplyComment'
import { StyledCommentsContainer } from './style'

const CommentsContainer = () => {
  return (
    <StyledCommentsContainer>
      <Comment></Comment>
      <Comment></Comment>
      <Comment></Comment>
      <ReplyComment></ReplyComment>
    </StyledCommentsContainer>
  )
}

export default CommentsContainer
