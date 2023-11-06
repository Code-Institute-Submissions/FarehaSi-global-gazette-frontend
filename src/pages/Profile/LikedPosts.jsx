import React from 'react'
import AuthLayout from '../../layouts/Layout'
import Navigation from '../../components/Profile/Navigation'

const LikedPosts = () => {
  return (
    <AuthLayout>
        <Navigation />
        <h1>Liked Posts</h1>
    </AuthLayout>
  )
}

export default LikedPosts