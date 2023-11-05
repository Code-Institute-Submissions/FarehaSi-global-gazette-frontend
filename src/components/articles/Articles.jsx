import React, { useEffect, useState } from 'react';
import { useInfiniteQuery, useQuery } from 'react-query';
import ListSingleView from './ListSingleView';
import apiFetch from '../../utils/api';
import Skeleton from './Skeleton';

const fetchArticles = async ({ pageParam = 1, queryKey }) => {
    const [_key, searchTerm] = queryKey;
    const searchQueryParam = searchTerm ? `&search=${searchTerm}` : '';
    const res = await apiFetch(`/articles/search/?page=${pageParam}${searchQueryParam}`, { method: 'GET' }, false);
    return res;
};

const fetchCategories = async () => {
    const res = await apiFetch(`/categories`, { method: 'GET' }, false);
    return res;
};


const Articles = () => {
    const skeletonPlaceholderCount = 5;

    const [categories, setCategories] = useState([]);
    const [searchTerm, setSearchTerm] = useState('');

    useEffect(() => {
        fetchCategories().then(data => {
            setCategories(data.results);
        });
    }, []);


    const handleSearchChange = (event) => {
        setSearchTerm(event.target.value);
    };

    const {
        data,
        error,
        fetchNextPage,
        hasNextPage,
        isFetchingNextPage,
        status
    } = useInfiniteQuery(
        ['articles', searchTerm],
        fetchArticles,
        {
            getNextPageParam: (lastPage, _pages) => {
                if (lastPage.next) {
                    const url = new URL(lastPage.next);
                    const nextPage = url.searchParams.get("page");
                    return Number(nextPage);
                }
                return undefined;
            },
            enabled: searchTerm.length === 0 || searchTerm.length > 2, 
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
        <div className="container-fluid mt-4">
            <div className="row">
                <div className="col-md-8">
                    {status === 'loading' ? (
                        Array.from({ length: skeletonPlaceholderCount }, (_, index) => (
                            <Skeleton key={index} />
                        ))
                    ) : status === 'error' ? (
                        <span>Error: {error.message}</span>
                    ) : (
                        <>
                            {data?.pages.map((group, i) => (
                                <React.Fragment key={i}>
                                    {group.results.map(article => (
                                        <ListSingleView
                                            key={article.id}
                                            articleId={article.id}
                                            author={article.author.username}
                                            title={article.title}
                                            snippet={article.truncated_content}
                                            date={new Date(article.created_at).toLocaleDateString()}
                                            likes={article.like_count}
                                            comments={article.comment_count}
                                            tags={article.tag_names ? article.tag_names.map(tag => tag.name) : []}
                                            thumbnail={article.thumbnail}
                                        />
                                    ))}
                                </React.Fragment>
                            ))}
                            <div>
                                {isFetchingNextPage
                                    ? 'Loading more...'
                                    : hasNextPage
                                        ? 'Load More'
                                        : <hr />}
                            </div>
                        </>
                    )}
                </div>

                <div className="col-md-4">
                    <div className="sticky-top" style={{ top: '70px' }}>
                        <div className="mb-4">
                            <h1>Explore the world</h1>
                            <input
                                type="text"
                                className="form-control"
                                placeholder="search"
                                value={searchTerm}
                                onChange={handleSearchChange}
                            />
                        </div>
                        {/* <h2 className="mb-3">Discover more of what matters to you</h2>
                        <div className="row">
                            {categories.map((category) => (
                                <div key={category.id} className="col">
                                    <a href="#" className="btn btn-light btn-block mb-2 text-start">
                                        {category.name}
                                    </a>
                                </div>
                            ))}
                        </div> */}
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Articles;
