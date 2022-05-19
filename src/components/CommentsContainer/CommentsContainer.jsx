import React, { useState } from 'react'

import { Comment } from '../Comment/Comment'
import ReplyTextBox from '../ReplyTextBox/ReplyTextBox'
import { StyledCommentsContainer } from './style'

import data from '../../../data.json'

const CommentsContainer = () => {
  const [comments] = useState(data.comments)

  return (
    <StyledCommentsContainer>
      {comments.map((comment) => {
        return <Comment key={comment.id} comment={comment}></Comment>
      })}
      <ReplyTextBox></ReplyTextBox>
    </StyledCommentsContainer>
  )
}

export default CommentsContainer
