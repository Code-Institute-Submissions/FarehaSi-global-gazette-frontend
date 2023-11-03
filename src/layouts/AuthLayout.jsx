import React from 'react'
import AuthNavbar from '../components/AuthNavbar'
import Navigation from '../components/Profile/Navigation'

const AuthLayout = ({ children }) => {
  return (
    <div>
        <AuthNavbar />
        <div className='mt-5'>
          <Navigation />
            {children}
        </div>
    </div>
  )
}

export default AuthLayout