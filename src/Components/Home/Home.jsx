import React from 'react'
import Header from '../Common/Header/Header';
import Hero from '../../Screens/HomePage/BannerSession'
import AboutSession from '../../Screens/HomePage/AboutusSession'
import InfoCards from '../../Screens/HomePage/Infocards'
import ContactForm from '../../Screens/HomePage/ContactSession'
import Footer from '../Common/Footer/Footer';
import Principles from '../Service/Services';
function Home() {
  return (
    <div>
        <Header/>
        <Hero/>
        <Principles/>
        <AboutSession/>
        <InfoCards/>
        <ContactForm/>
        <Footer/>

    </div>
  )
}

export default Home