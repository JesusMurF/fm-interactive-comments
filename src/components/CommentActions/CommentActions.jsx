import React from 'react'
import {
  StyledDeleteButton,
  StyledEditButton,
  StyledReplyButton,
} from '../Comment/style'

export const CommentActions = ({ user }) => {
  return (
    <div className="flex flex-1 justify-end">
      <StyledDeleteButton $user={user} role="button">
        <img
          className="h-4"
          src="./icons/icon-delete.svg"
          alt="Delete comment"
        />
        <p className="px-2">Delete</p>
      </StyledDeleteButton>
      <StyledEditButton
        $user={user}
        role="button"
        onClick={() => console.log('click')}>
        <img className="h-4" src="./icons/icon-edit.svg" alt="Edit comment" />
        <p className="px-2">Edit</p>
      </StyledEditButton>
      <StyledReplyButton
        $user={!user}
        role="button"
        onClick={() => console.log('click')}>
        <img className="h-4" src="./icons/icon-reply.svg" alt="Reply comment" />
        <p className="px-2">Reply</p>
      </StyledReplyButton>
    </div>
  )
}
