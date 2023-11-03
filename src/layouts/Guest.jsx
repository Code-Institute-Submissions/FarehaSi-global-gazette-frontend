import React from 'react'
import GNavbar from '../components/GNavbar'

const Guest = ({ children }) => {
  return (
    <div>
        <GNavbar/>
        <div className='mt-5'>
            {children}
        </div>
        
    </div>
  )
}

export default Guest