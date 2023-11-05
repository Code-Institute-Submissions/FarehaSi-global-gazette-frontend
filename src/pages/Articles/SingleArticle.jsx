import React from 'react'
import GuestLayout from '../../layouts/GuestLayout'
import Single from '../../components/articles/Single'
import { useParams } from 'react-router-dom';

const SingleArticle = () => {
    const { articleId } = useParams();
  return (
    <>
        <GuestLayout>
            <Single articleId={articleId} />
        </GuestLayout>
    </>
  )
}

export default SingleArticle