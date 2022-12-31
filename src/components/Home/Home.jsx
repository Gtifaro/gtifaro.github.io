import React from 'react';
import { NavLink } from 'react-router-dom';
import HomeImg from "../../utils/img/HomeImg.png";

const HomeContainer = () => {
    return (
        <div className='Home'>
            <div className='Description'>
                <h1 className='BigDesc'>
                    ¡Hi!, I'm Gabriel, <br/> <span>Front-end Developer.</span>
                </h1>
                <p className='ShortDesc'>
                    Lifelong learner and fond of engineering and science
                </p>
                <NavLink className="WhoIsMe" to="/About">Who is Gabriel?</NavLink>
                <NavLink className="StartWorking" to="/Contact">¡Start talking!</NavLink>
            </div>
            <div className='Imgs'>
                <img alt="My principal skills" src={HomeImg}/>
            </div>
        </div>
    );
};

export default HomeContainer;