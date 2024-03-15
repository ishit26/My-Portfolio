import React from 'react';
import Navbar from './components/navbar/Navbar';
import Banner from './components/banner/Banner';
import './App.css';
import Skills from './components/skills/Skills';
import WorkExperience from './components/workexperience/WorkExperience';
import ContactMe from './components/contactme/ContactMe';
import Footer from './components/footer/Footer';

const App = () => {
  return (
    <>
      <Navbar />

      <div className="container">
        <Banner /> <br/>
        <Skills /> <br/>
        <WorkExperience /> <br/>
        <ContactMe /> <br />
      </div>
      <Footer />
    </>
  )
}

export default App;