import React from 'react'
import AuthLayout from '../../layouts/Layout'
import Navigation from '../../components/Profile/Navigation'
import MyOwnedPosts from '../../components/Profile/MyOwnedPosts'

const MyPosts = () => {
  return (
    <AuthLayout>
        <Navigation />
        <MyOwnedPosts />
    </AuthLayout>
  )
}

export default MyPosts