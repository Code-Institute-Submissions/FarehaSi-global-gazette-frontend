import React from 'react'
import NavBar from '../components/NavBar'

const GuestLayout = ({ children }) => {
  return (
    <div>
        <NavBar/>
        <div className='mt-5'>
            {children}
        </div>
        
    </div>
  )
}

export default GuestLayout