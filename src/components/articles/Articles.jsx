import React, { useEffect } from 'react';
import { useInfiniteQuery } from 'react-query';
import ListSingleView from './ListSingleView';
import apiFetch from '../../utils/api';

const fetchArticles = async ({ pageParam = 1 }) => {
    const res = await apiFetch(`/articles/?page=${pageParam}`);
    return res; 
};



const Articles = () => {
    const {
        data,
        error,
        fetchNextPage,
        hasNextPage,
        isFetchingNextPage,
        status
    } = useInfiniteQuery(
        'articles',
        fetchArticles,
        {
            getNextPageParam: (lastPage, pages) => {
                if (lastPage.next) {
                    const url = new URL(lastPage.next);
                    const nextPage = url.searchParams.get("page");
                    return Number(nextPage);
                }
                return undefined;
            },
        }
    );

    useEffect(() => {
        const handleScroll = () => {
            const { scrollTop, clientHeight, scrollHeight } = document.documentElement;
            if (scrollHeight - scrollTop <= clientHeight * 1.5 && hasNextPage && !isFetchingNextPage) {
                fetchNextPage();
            }
        };

        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, [hasNextPage, isFetchingNextPage, fetchNextPage]);

    return (
        <div>
            {status === 'loading' ? (
                <p>Loading...</p>
            ) : status === 'error' ? (
                <span>Error: {error.message}</span>
            ) : (
                <>
                    {data.pages.map((group, i) => (
                        <React.Fragment key={i}>
                            {group.results.map(article => (
                                <ListSingleView
                                    key={article.id}
                                    author={article.author.username}
                                    title={article.title}
                                    snippet={article.truncated_content}
                                    date={new Date(article.created_at).toLocaleDateString()}
                                    likes={article.like_count}
                                    shares={article.dislike_count} // Assuming you want to display this as shares
                                    tags={article.tag_names ? article.tag_names.map(tag => tag.name) : []}
                                    thumbnail={article.thumbnail}
                                />
                            ))}
                        </React.Fragment>
                    ))}
                    <div>
                      {isFetchingNextPage ? 'Loading more...' : hasNextPage ? 'Load More' : 'Nothing more to load'}
                    </div>
                </>
            )}
        </div>
    );
};

export default Articles;
