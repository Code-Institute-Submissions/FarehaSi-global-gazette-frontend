import React from 'react'
import GuestLayout from '../../layouts/GuestLayout'
import Single from '../../components/articles/Single'

const SingleArticle = () => {
    const articleId = 1;
  return (
    <>
        <GuestLayout>
            <Single articleId={1} />
        </GuestLayout>
    </>
  )
}

export default SingleArticle