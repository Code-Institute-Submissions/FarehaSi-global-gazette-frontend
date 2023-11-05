import React, { useState } from 'react'
import apiFetch from '../../utils/api';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowUpFromBracket, faComment, faHandsClapping } from '@fortawesome/free-solid-svg-icons';
import './ArticleActions.css'
const ArticleActions = ({ articleId, totalLikes, totalComments }) => {
    const [liked, setLiked] = useState(false);
    const [likes, setLikes] = useState(0);

    
  const handleLike = async () => {
    try {
      const endpoint = `/articles/${articleId}/react/like/`;
      const response = await apiFetch(endpoint, { method: 'POST' });

      if (response.detail === "Reaction 'like' set.") {
        setLiked(true);
        setLikes((prev) => prev + 1); 
      } else if (response.detail === "Reaction 'like' removed.") {
        setLiked(false);
      }
    } catch (error) {
      console.error('Error reacting to article', error);
    }
  };
  return (
    <div className="action-bar d-flex justify-content-between align-items-center my-3 mb-7">
  <div className="d-flex">
    <div className="action-item">
      <FontAwesomeIcon icon={faHandsClapping} />
      <span className="action-count">{totalLikes}</span>
    </div>
    <div className="action-item">
      <FontAwesomeIcon icon={faComment} />
      <span className="action-count">{totalComments}</span>
    </div>
  </div>

  <div className="action-item">
    <FontAwesomeIcon icon={faArrowUpFromBracket} />
  </div>
</div>


  )
}

export default ArticleActions