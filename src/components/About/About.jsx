import React from 'react';
import {NavLink} from "react-router-dom";
import History from "../../utils/img/MyHistory.png";

const AboutContainer = () => {
    return (
        <div className='About'>
            <div className='Content'>
                <h1 className='title'>I'm Gabriel, nice to meet you</h1>
                <p className='BigDesc'>I am a Front-end developer located in Colombia, I started programming 4 years ago in flowcharts with <a href="https://raptor.martincarlisle.com"  rel="noreferrer" target='_blank'>Raptor</a> and Java with Eclipse IDE. After, I study at <a href="http://www.senasofiaplus.edu.co" rel="noreferrer" target='_blank'>SENA</a> an ADIS (Analysis and Development of Information Systems) technologist. There, I learned about JavaScript ES6, HTML 5, CSS 6 and a bit of SQL, PHP and Mobile (Android) development.<br/><br/>
                In the last year, I started getting work experience, I started studying at <a href="https://platzi.com" rel="noreferrer" target='_blank'>Platzi</a> together with my study group and now I'm learning about Node.JS, React.js, ML with Python and game development with Unity.<br/><br/>
                I hope we can do amazing and innovative projects in the future.</p>
                <NavLink className="WhoIsMe" to="/Skills">My work tools</NavLink>
                <NavLink className="StartWorking" to="/Contact">¡Start creating!</NavLink>
            </div>
            <div className='Img'>
                <img src={History} alt="My history" title='My history in one image'/>
            </div>
        </div>
    );
};

export default AboutContainer;