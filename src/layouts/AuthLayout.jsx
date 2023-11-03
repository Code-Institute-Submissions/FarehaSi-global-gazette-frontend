import React from 'react'
import AuthNavbar from '../components/AuthNavbar'

const AuthLayout = ({ children }) => {
  return (
    <div>
        <AuthNavbar />
        <div className='mt-5'>
            {children}
        </div>
    </div>
  )
}

export default AuthLayout