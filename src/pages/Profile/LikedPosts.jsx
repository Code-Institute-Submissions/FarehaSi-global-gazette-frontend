import React from 'react'
import AuthLayout from '../../layouts/Layout'
import Navigation from '../../components/Profile/Navigation'
import AllLikedPosts from '../../components/Profile/AllLikedPosts'

const LikedPosts = () => {
  return (
    <AuthLayout>
        <Navigation />
        <div className="container">
          <h1>Liked Posts</h1>
          <AllLikedPosts />
        </div>
        
        
    </AuthLayout>
  )
}

export default LikedPosts