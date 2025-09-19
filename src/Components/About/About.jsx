import React from 'react'
import Abooutsession from '../../Screens/Aboutpage/aboutbanner'
import Footer from '../Common/Footer/Footer';
import Couting from '../../Screens/Aboutpage/Couting'
import Header from '../Common/Header/Header';

function About() {
    return (
        <div>
            <Header/>
            <Abooutsession />
            <Couting/>
            <Footer/>

        </div>
    )
}

export default About