import React from 'react'
import { useAuth } from '../../hooks/useAuth'
import {
  StyledCommentActionsHeaderContainer,
  StyledDeleteButton,
  StyledEditButton,
  StyledReplyButton,
} from './style'

export const CommentActionsHeader = (currentUser) => {
  const { isAuthenticated } = useAuth(currentUser)

  return (
    <StyledCommentActionsHeaderContainer>
      <StyledDeleteButton $user={isAuthenticated} role="button">
        <img
          className="h-4"
          src="./icons/icon-delete.svg"
          alt="Delete comment"
        />
        <p className="px-2">Delete</p>
      </StyledDeleteButton>
      <StyledEditButton
        $user={isAuthenticated}
        role="button"
        onClick={() => console.log('click')}>
        <img className="h-4" src="./icons/icon-edit.svg" alt="Edit comment" />
        <p className="px-2">Edit</p>
      </StyledEditButton>
      <StyledReplyButton
        $user={!isAuthenticated}
        role="button"
        onClick={() => console.log('click')}>
        <img className="h-4" src="./icons/icon-reply.svg" alt="Reply comment" />
        <p className="px-2">Reply</p>
      </StyledReplyButton>
    </StyledCommentActionsHeaderContainer>
  )
}
