import React from 'react'
import AuthLayout from '../../layouts/Layout'
import Profile from '../../components/Profile/Profile'
import Navigation from '../../components/Profile/Navigation'

const Index = () => {
  return (
    <AuthLayout>
        <Navigation />
        <Profile />
    </AuthLayout>
  )
}

export default Index