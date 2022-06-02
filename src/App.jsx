import React, { useState } from 'react'
import PropTypes from 'prop-types'

import { StyledCommentsContainer } from './style'
import { Comment } from './components/Comment/Comment'
import ReplyTextBox from './components/ReplyTextBox/ReplyTextBox'

import data from '../data.json'

function App() {
  const [{ comments, currentUser }] = useState(data)

  return (
    <StyledCommentsContainer>
      {comments.map((comment) => {
        return (
          <Comment
            key={comment.id}
            comment={comment}
            currentUser={currentUser}></Comment>
        )
      })}
      <ReplyTextBox currentUser={currentUser}></ReplyTextBox>
    </StyledCommentsContainer>
  )
}

App.propTypes = {
  comments: PropTypes.array,
  currentUser: PropTypes.object,
}

export default App
