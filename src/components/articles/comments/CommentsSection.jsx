import React, { useState, useEffect } from 'react';
import SingleComment from './SingleComment';
import apiFetch from '../../../utils/api';

const CommentsSection = ({ articleId }) => {
  const [comments, setComments] = useState([]);

  useEffect(() => {
    const fetchComments = async () => {
      try {
        const data = await apiFetch(`/articles/${articleId}/comments/`);
        setComments(data.results);
      } catch (error) {
        console.error('Error fetching comments:', error);
      }
    };

    fetchComments();
  }, [articleId]);

  return (
    <div className="comments-section">
      {comments.map(comment => (
        <SingleComment key={comment.id} comment={comment} />
      ))}
    </div>
  );
};

export default CommentsSection;
