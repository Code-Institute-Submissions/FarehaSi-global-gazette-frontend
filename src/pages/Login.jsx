import React, { useState } from 'react'
import GNavbar from '../components/GNavbar'
import { useAuth } from '../context/ReactQueryContext';
import Form from '../components/Login/Form';

const Login = () => {
  return (
    <div>
        <GNavbar />
        <Form />
    </div>
  )
}

export default Login