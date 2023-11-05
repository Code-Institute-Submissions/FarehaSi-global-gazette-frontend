import React, { useState, useEffect, useCallback } from 'react';
import SingleComment from './SingleComment';
import apiFetch from '../../../utils/api';

const CommentsSection = ({ articleId, onCommentPosted }) => {
  const [comments, setComments] = useState([]);

  const fetchComments = useCallback(async () => {
    try {
      const data = await apiFetch(`/articles/${articleId}/comments/`);
      setComments(data.results);
    } catch (error) {
      console.error('Error fetching comments:', error);
    }
  }, [articleId]);

  useEffect(() => {
    fetchComments();
  }, [articleId, fetchComments]);
  
  useEffect(() => {
    if (onCommentPosted) {
      fetchComments();
    }
  }, [onCommentPosted, fetchComments]);

  return (
    <div className="comments-section">
      {comments.map(comment => (
        <SingleComment key={comment.id} comment={comment} />
      ))}
    </div>
  );
};

export default CommentsSection;
