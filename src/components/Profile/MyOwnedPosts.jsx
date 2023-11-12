import React, { useState } from 'react';
import { useQuery, useQueryClient } from 'react-query';
import { Pagination } from 'react-bootstrap';
import apiFetch from '../../utils/api';
import { CLOUDINARY_URL } from '../../data/config';
import OwnArticleSingle from '../articles/OwnArticleSingle';

const MyOwnedPosts = () => {
  const [currentPage, setCurrentPage] = useState(1);
  const queryClient = useQueryClient();
  const { isLoading, isError, error, data: articlesData } = useQuery(
    ['articles', currentPage], 
    () => apiFetch(`/user/articles/?page=${currentPage}`, {
      headers: {
        'Content-Type': 'application/json',
      },
    }),
    {
      keepPreviousData: true,
    }
  );

  const handlePageChange = (newPage) => {
    setCurrentPage(newPage);
    queryClient.invalidateQueries(['articles', newPage]);
  };

  if (isLoading) {
    return <div>Loading...</div>;
  }

  if (isError) {
    return <div>Error: {error.message}</div>;
  }

  return (
    <>
      {articlesData?.results.map((article) => (
        <OwnArticleSingle
          key={article.id}
          articleId={article.id}
          author={article.author.username}
          title={article.title}
          snippet={article.truncated_content}
          date={new Date(article.created_at).toLocaleDateString()}
          likes={article.like_count}
          comments={article.comment_count}
          tags={(article.tag_names || []).map(tag => tag.name)}
          thumbnail={`${CLOUDINARY_URL}${article.thumbnail}`}
        />
      ))}

      <Pagination className="justify-content-center">
        <Pagination.Prev
          onClick={() => handlePageChange(currentPage - 1)}
          disabled={currentPage <= 1}
        />
        <Pagination.Item active>{currentPage}</Pagination.Item>
        <Pagination.Next
          onClick={() => handlePageChange(currentPage + 1)}
          disabled={!articlesData.next}
        />
      </Pagination>
    </>
  );
};

export default MyOwnedPosts;
