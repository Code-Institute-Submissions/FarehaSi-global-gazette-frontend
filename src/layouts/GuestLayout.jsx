import React from 'react'
import GNavbar from '../components/GNavbar'

const GuestLayout = ({ children }) => {
  return (
    <div>
        <GNavbar/>
        <div className='mt-5'>
            {children}
        </div>
        
    </div>
  )
}

export default GuestLayout