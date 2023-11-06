import React from 'react';
import './SingleComment.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faComment, faThumbsUp } from '@fortawesome/free-solid-svg-icons';

const SingleComment = ({ comment }) => {
  const avatarUrl = comment.userImage || `https://api.multiavatar.com/${encodeURIComponent(comment.username)}.svg`;

  return (
    <div className="media py-3">
      <div className="media-body">
        <div className="d-flex align-items-center">
            <img 
                src={avatarUrl} 
                alt={`${comment.username}'s Avatar`} 
                className="mr-3 rounded-circle" 
                style={{ width: '28px', height: '28px' }} 
            />
            <span>Hero</span>
        </div>
        <h5 className="mt-0 mb-1">{comment.username}</h5>
        <p className="mb-2">{comment.text}</p>
        <div className="comment-actions">
          <span className="comment-like me-2">
            <FontAwesomeIcon icon={faThumbsUp} /> {comment.like_count}
          </span>
          <span className="comment-reply">
            <FontAwesomeIcon icon={faComment} /> Reply
          </span>
        </div>

      </div>
    </div>
  );
};

export default SingleComment;
