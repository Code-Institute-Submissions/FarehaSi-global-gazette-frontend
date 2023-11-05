import React, { useState, useEffect } from 'react'
import apiFetch from '../../utils/api';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowUpFromBracket, faComment, faHandsClapping } from '@fortawesome/free-solid-svg-icons';
import './ArticleActions.css';
import Slideover from '../Slideover';

const ArticleActions = ({ articleId, totalLikes, totalComments }) => {
    const [liked, setLiked] = useState(false);
    const [likes, setLikes] = useState(totalLikes); 
    const [isCommentsOpen, setCommentsOpen] = useState(false);

    const toggleComments = () => {
        setCommentsOpen(!isCommentsOpen);
    };

    useEffect(() => {
        setLikes(totalLikes);
    }, [totalLikes]);

    const handleLike = async () => {
        try {
            const endpoint = `/articles/${articleId}/react/like/`; 
            const response = await apiFetch(endpoint, { method: 'POST' });

            if (response.detail === "Reaction 'like' set.") {
                setLiked(true);
                setLikes((prev) => prev + 1);
            } else if (response.detail === "Reaction 'like' removed.") {
                setLiked(false);
                setLikes((prev) => prev - 1);
            }
        } catch (error) {
            console.error('Error reacting to article', error);
        }
    };

    // Apply a class to reflect the like status
    const likeIconClass = liked ? "liked" : "";

    return (
        <div className="action-bar d-flex justify-content-between align-items-center my-3 mb-7">
            <div className="d-flex">
                <div className="action-item" onClick={handleLike}>
                    <FontAwesomeIcon icon={faHandsClapping} className={likeIconClass} />
                    <span className="action-count">{likes}</span>
                </div>
                <div className="action-item" onClick={toggleComments}>
                    <FontAwesomeIcon icon={faComment} />
                    <span className="action-count">{totalComments}</span>
                </div>
            </div>

            <div className="action-item">
                <FontAwesomeIcon icon={faArrowUpFromBracket} />
            </div>
            <Slideover isOpen={isCommentsOpen} onClose={() => setCommentsOpen(false)}>
                <h1>Hello</h1>
            </Slideover>
        </div>
    );
};

export default ArticleActions;
