import React from 'react'
import AuthLayout from '../../layouts/Layout'
import Navigation from '../../components/Profile/Navigation'
import UserFollowers from '../../components/Profile/Followings/UserFollowers'

const Followers = () => {
  return (
    <AuthLayout>
      
      <Navigation />
        <UserFollowers />
    </AuthLayout>
  )
}

export default Followers