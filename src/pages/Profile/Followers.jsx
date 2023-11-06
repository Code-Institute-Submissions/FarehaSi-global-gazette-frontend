import React from 'react'
import AuthLayout from '../../layouts/Layout'
import Navigation from '../../components/Profile/Navigation'
import UserFollowers from '../../components/Profile/Followings/UserFollowers'
import UserFollowings from '../../components/Profile/Followings/UserFollowings'

const Followers = () => {
  return (
    <AuthLayout>
      
      <Navigation />
      <UserFollowings />
      <UserFollowers />
    </AuthLayout>
  )
}

export default Followers