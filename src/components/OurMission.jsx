import React from 'react';
import './OurMission.css';
import { Link } from 'react-router-dom';


const OurMission = () => {
  return (
    <div className="container my-5">
      <section className="welcome">
        <h1>Welcome to Global Gazette</h1>
        <p>the digital haven for diverse voices and thought-provoking content from around the world.</p>
      </section>
      
      <section className="mission">
        <h2>Our Mission:</h2>
        <p>Global Gazette was born from a simple yet profound idea: to create a platform that transcends borders, unites cultures, and fosters meaningful conversations. Our mission is to empower individuals, regardless of their background or location, to share their stories, ideas, and perspectives with a global audience.</p>
      </section>

      <section className="mission">
        <h2>Our Commitment to Diversity and Inclusivity:</h2>
        <p>We believe in the power of diversity. Global Gazette is committed to providing a safe and inclusive space where every voice can be heard. We encourage contributors from all walks of life to join us, ensuring that our platform reflects the rich tapestry of human experiences and beliefs.</p>
      </section>

      <section className="mission">
        <h2>A Hub for Knowledge Sharing:</h2>
        <p>At Global Gazette, we're more than just a publishing platform. We're a hub for knowledge sharing. Whether you're here to learn, teach, or engage in enlightening discussions, you'll find a welcoming community eager to exchange ideas and insights.</p>
      </section>
      <section className="mission">
        <h2>Our Features:</h2>
        <ul>
            <li><b>Content Creation:</b> Create and share articles, stories, tutorials, and more with a global audience.</li>
            <li> <b>Content Discovery:</b> Explore a vast array of topics and discover content that resonates with your interests.</li>
            <li><b>Interaction:</b> Engage in meaningful conversations by commenting on and voting for your favorite content.</li>
            <li><b>User Profiles:</b> Connect with others, follow your favorite authors, and personalize your content feed.</li>
            <li><b>Collaboration:</b> Collaborate on projects, co-author articles, and embrace the power of collective creativity.</li>
            <li><b>Empowerment:</b> We provide tools and resources to empower content creators and enhance their storytelling skills</li>
        </ul>
      </section>

      {/* ... other sections ... */}

      <section className="">
        <div className="row">
          <div className="col-md-12">
            <h2>Join Our Global Community</h2>
            <p>We invite you to be part of our ever-growing community of thinkers, creators, and learners. Whether you're a seasoned writer, an aspiring artist, or simply an enthusiast eager to explore the world through the written word, you have a place here.</p>
            <p>Together, we'll break down barriers, celebrate our differences, and build a brighter future through the exchange of ideas and stories. Welcome to Global Gazette—your passport to a world of inspiration and connection.</p>
          </div>
          <div className="col-md-6 text-left">
            <Link to="/register" className="btn btn-primary btn-lg btn-block bg-black text-white">
            Join Our Global Community
            </Link>
          </div>
        </div>
      </section>
    </div>
  )
}

export default OurMission