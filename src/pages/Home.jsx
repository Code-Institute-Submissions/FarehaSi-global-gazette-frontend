import React from 'react'
import Hero from '../components/home/Hero'
import Articles from '../components/articles/Articles'
import NavBar from '../components/NavBar'

const Home = () => {
  return (
    <div>
        <NavBar />
        <Hero />
        <Articles />
    </div>
  )
}

export default Home