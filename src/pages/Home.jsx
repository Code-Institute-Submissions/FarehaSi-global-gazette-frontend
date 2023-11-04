import React from 'react'
import GNavbar from '../components/GNavbar'
import Hero from '../components/home/Hero'
import Articles from '../components/articles/Articles'

const Home = () => {
  return (
    <div>
        <GNavbar />
        <Hero />
        <Articles />
    </div>
  )
}

export default Home