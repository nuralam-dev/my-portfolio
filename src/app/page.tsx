import About from '@/components/sections/About';
import Contact from '@/components/sections/Contact';
import Education from '@/components/sections/Education';
import Experience from '@/components/sections/Experience';
import Hero from '@/components/sections/Hero';
import PersonalJourney from '@/components/sections/PersonalJourney';
import Projects from '@/components/sections/Projects';
import Skills from '@/components/sections/Skills';

import React from 'react';

const page = () => {
  return (
    <div>
      <Hero></Hero>
      <About></About>
      <Skills></Skills>
      <Projects></Projects>
      <Experience></Experience>
      <Education></Education>
      <PersonalJourney></PersonalJourney>
      <Contact></Contact>
    </div>
  );
};

export default page;