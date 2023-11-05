import React, { useState } from 'react';
import apiFetch from '../../../utils/api';


const NewComment = ({ articleId }) => {
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
      console.log(response); 
      setCommentText('');
    } catch (error) {
      console.error('Error posting comment:', error);
    }
  };

  return (
    <div className="new-comment-container">
      <form onSubmit={handleSubmit} className="comment-form">
        <textarea
          className="form-control"
          placeholder="What are your thoughts?"
          value={commentText}
          onChange={(e) => setCommentText(e.target.value)}
        />
        <div className="submit-buttons">
          <button type="button" className="cancel-button" onClick={() => setCommentText('')}>
            Cancel
          </button>
          <button type="submit" className="respond-button">
            Respond
          </button>
        </div>
      </form>
    </div>
  );
};

export default NewComment;
