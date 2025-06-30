import React from 'react';
import Hero from '../components/Hero';
import Specialties from '../components/Specialties';
import SuccessStories from '../components/SuccessStories';
import Approach from '../components/Approach';
import BlogPreview from '../components/BlogPreview';
import Location from '../components/Location';
import Contact from '../components/Contact';

const Home = () => {
  return (
    <div className="pt-20">
      <Hero />
      <Specialties />
      <SuccessStories />
      <Approach />
      <BlogPreview />
      <Location />
      <Contact />
    </div>
  );
};

export default Home;