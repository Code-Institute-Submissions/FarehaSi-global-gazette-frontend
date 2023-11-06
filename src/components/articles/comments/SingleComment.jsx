import React, { useState } from 'react';
import './SingleComment.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faThumbsUp } from '@fortawesome/free-solid-svg-icons';
import apiFetch from '../../../utils/api';
import { faCommentDots } from '@fortawesome/free-regular-svg-icons';

const SingleComment = ({ comment }) => {
    const [likeCount, setLikeCount] = useState(comment.like_count);
    const [liked, setLiked] = useState(false);
    const [replyText, setReplyText] = useState('');
    const [showReply, setShowReply] = useState(false);

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

  const handleSubmitReply = async () => {
    try {
      const response = await apiFetch(`/comments/${comment.id}/reply/`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify({
          text: replyText,
          article: comment.article,
          parent_comment: comment.id
        })
      });

      if (response.ok) {
        const newReply = await response.json();
        updateComments(newReply);
        setReplyText('');
        setShowReply(false);
      } else {
        console.error('Failed to submit reply');
      }
    } catch (error) {
      console.error('Error submitting the reply:', error);
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
            alt={`${comment.username}'s avatar`} 
            className="mr-3 rounded-circle" 
            style={{ width: '28px', height: '28px' }} 
          />
          <h5 className="mt-0 mb-1">{comment.username}</h5>
        </div>
        <p className="mb-2">{comment.text}</p>
        <div className="comment-actions">
          <button className={`btn btn-outline-dark comment-like me-2 ${liked ? 'liked' : ''}`} onClick={handleLike}>
            <FontAwesomeIcon icon={faThumbsUp} /> {likeCount}
          </button>
          <button className="btn btn-outline-dark comment-reply" onClick={() => setShowReply(!showReply)}>
            <FontAwesomeIcon icon={faCommentDots} /> Reply
          </button>
        </div>
        {showReply && (
          <div className="reply-form">
            <textarea
              className="form-control"
              value={replyText}
              onChange={(e) => setReplyText(e.target.value)}
              placeholder="Write a reply..."
            />
            <button
              className="btn btn-primary mt-2"
              onClick={handleSubmitReply}
              disabled={!replyText.trim()}
            >
              Submit Reply
            </button>
            <button
              className="btn btn-secondary mt-2"
              onClick={() => setShowReply(false)}
            >
              Cancel
            </button>
          </div>
        )}
        <div className="comment-replies">
          {comment.replies && renderReplies(comment.replies)}
        </div>
      </div>
    </div>
  );
};

export default SingleComment;
