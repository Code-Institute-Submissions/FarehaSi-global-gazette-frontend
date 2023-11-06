import React, { useState } from 'react';
import apiFetch from '../../../utils/api';
import './NewComment.css';
const NewComment = ({ articleId, onCommentPosted }) => {
  const [commentText, setCommentText] = useState('');

  const handleSubmit = async (event) => {
    event.preventDefault();
    try {
      const response = await apiFetch(`/articles/${articleId}/comment/`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify({
          text: commentText,
          article: articleId
        }),
      });
      if (response.id) {
        setCommentText('');
        onCommentPosted();
      }
    } catch (error) {
      console.error('Error posting comment:', error);
    }
  };

  return (
    <div className="new-comment-container">
      <form onSubmit={handleSubmit} className="comment-form">
        <div className="mb-3">
          <textarea
            className="form-control"
            placeholder="What are your thoughts?"
            value={commentText}
            onChange={(e) => setCommentText(e.target.value)}
            rows="3"
          ></textarea>
        </div>
        <div className="text-end">
          <button type="button" className="btn btn-link text-muted me-2" onClick={() => setCommentText('')}>
            Cancel
          </button>
          <button type="submit" className="btn btn-success">
            Respond
          </button>
        </div>
      </form>
    </div>
  );
};

export default NewComment;
