import React, { useEffect, useState } from 'react'
import { useQuery } from 'react-query';
import apiFetch from '../../utils/api';
import './articleSkeleton.css'
import UserProfile from './UserProfile';
import ArticleActions from './ArticleActions';


const Single = ({ articleId }) => {
    const { data: article, error, isLoading } = useQuery(
        ['article', articleId],
        () => apiFetch(`/articles/${articleId}/`), 
        {
          refetchOnWindowFocus: true
        }
      );

    if (isLoading) {
        return <SkeletonLoader />;
    }
    
    if (error) {
        return <div className="alert alert-danger" role="alert">Error: {error.message}</div>;
    }
  return (
    <div className="container my-5">
      <div className="row justify-content-center">
        <div className="col-lg-8">
          <article>
            <h1 className="mb-4">{article?.title}</h1>
            <span className='text-muted'>{article?.truncated_content}</span>
            <UserProfile userId={article.author.id} datePosted={article.created_at}/>
            <ArticleActions articleId={article.id} totalComments={article.comment_count} totalLikes={article.like_count}/>
            {article?.thumbnail && (
              <img src={article?.thumbnail} alt={article?.title} className="img-fluid rounded" />
            )}
            <div className="mt-4 mb-5" dangerouslySetInnerHTML={{ __html: article?.content }}></div>
          </article>
        </div>
      </div>
    </div>
  )
}

export default Single

const SkeletonLoader = () => (
    <div className='container my-5'>
        <div className='row justify-content-center'>
            <div className="col-lg-8">
                <div className="skeleton-loader">
                    <div className="animated-background">
                        <div className="mb-4 skeleton-title"></div>
                        <div className="mb-3 skeleton-img"></div>
                        <div className="skeleton-text"></div>
                        <div className="skeleton-text"></div>
                        <div className="skeleton-text"></div>
                    </div>
                </div>
            </div>
        </div>
    </div>
);