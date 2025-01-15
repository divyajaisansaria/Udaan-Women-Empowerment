import React from 'react'
import NavBar from '../components/NavBar'
import Hero from '../components/Hero'
import { AppContextProvider } from '../context/AppContext';
import Footer from '../components/Footer';
import JobListing from '../components/JobListing';


const Jobportal = () => {
  return (
    <div>
      <NavBar/>
      <AppContextProvider>
        <Hero/>
        <JobListing/>
        <Footer/>
        </AppContextProvider>
        
    </div>
  )
}

export default Jobportal