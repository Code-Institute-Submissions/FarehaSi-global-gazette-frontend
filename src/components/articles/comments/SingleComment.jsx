import React from 'react';
import './CommentsSection.css'; 

const SingleComment = ({ comment }) => {
  return (
    <div className="media mb-4">
      <img src="user_avatar.png" alt="User Avatar" className="mr-3 mt-1 rounded-circle" style={{ width: '40px' }} />
      <div className="media-body">
        <h5 className="mt-0">Username</h5> 
        {comment.text}
        <div className="comment-actions mt-2">
          <span className="comment-like">{comment.like_count} Like</span>
          <span className="comment-dislike">{comment.dislike_count} Dislike</span>
        </div>
      </div>
    </div>
  );
};

export default SingleComment;