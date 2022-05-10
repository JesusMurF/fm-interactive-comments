import React from 'react'

import { Comment } from '../Comment/Comment'
import { StyledCommentsContainer } from './style'

const CommentsContainer = () => {
  return (
    <StyledCommentsContainer>
      <Comment></Comment>
      <Comment></Comment>
      <Comment></Comment>
    </StyledCommentsContainer>
  )
}

export default CommentsContainer
