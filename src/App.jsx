import React, { useState } from 'react'

import { StyledCommentsContainer } from './style'
import { Comment } from './components/Comment/Comment'
import ReplyTextBox from './components/ReplyTextBox/ReplyTextBox'

import data from '../data.json'

function App() {
  const [{ comments }] = useState(data)

  return (
    <StyledCommentsContainer>
      {comments.map((comment) => {
        return <Comment key={comment.id} comment={comment}></Comment>
      })}
      <ReplyTextBox></ReplyTextBox>
    </StyledCommentsContainer>
  )
}

export default App
