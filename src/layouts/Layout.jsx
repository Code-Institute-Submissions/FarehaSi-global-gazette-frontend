import React from 'react'
import Navigation from '../components/Profile/Navigation'
import Navbar from '../components/NavBar'

const AuthLayout = ({ children }) => {
  return (
    <div>
        <Navbar />
        <div className='mt-5'>
            {children}
        </div>
    </div>
  )
}

export default AuthLayout