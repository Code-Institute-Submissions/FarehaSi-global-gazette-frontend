import React, { useState } from 'react';
import './SingleComment.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faComment, faThumbsUp } from '@fortawesome/free-solid-svg-icons';
import apiFetch from '../../../utils/api';

const SingleComment = ({ comment }) => {
  const [likeCount, setLikeCount] = useState(comment.like_count);
  const [liked, setLiked] = useState(false);

  const avatarUrl = comment.userImage || `https://api.multiavatar.com/${encodeURIComponent(comment.username)}.svg`;

  const handleLike = async () => {
    try {
      const response = await apiFetch(`/comments/${comment.id}/react/like/`, { method: 'POST' });

      if (response.detail === "Reaction 'like' set.") {
        setLikeCount(prevCount => prevCount + 1); 
        setLiked(true);
      } else if (response.detail === "Reaction 'like' removed.") {
        setLikeCount(prevCount => prevCount - 1);
        setLiked(false);
      }
    } catch (error) {
      console.error('Error liking the comment:', error);
    }
  };

  const renderReplies = (replies) => {
    return replies.map(reply => (
      <div className="media py-3" key={reply.id} style={{ marginLeft: '20px' }}>
        <SingleComment comment={reply} />
      </div>
    ));
  };

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
          <button className={`btn btn-outline-dark comment-like me-2 ${liked ? 'liked' : ''}`} onClick={handleLike}>
            <FontAwesomeIcon icon={faThumbsUp} /> {likeCount}
          </button>
          <span className="comment-reply">
            <FontAwesomeIcon icon={faComment} /> Reply
          </span>
        </div>
        {comment.replies && renderReplies(comment.replies)}
      </div>
    </div>
  );
};

export default SingleComment;
