import React from 'react'
import { Reply } from '../Reply/Reply'
import ReplyTextBox from '../ReplyTextBox/ReplyTextBox'
import { StyledReplyList } from './style'

export const ReplyList = ({ replies, currentUser }) => {
  return (
    <StyledReplyList>
      {replies.map((reply) => (
        <Reply key={reply.id} reply={reply}></Reply>
      ))}
      {replies.length > 0 && (
        <ReplyTextBox currentUser={currentUser}></ReplyTextBox>
      )}
    </StyledReplyList>
  )
}
