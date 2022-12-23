import React from 'react';
import {
    NavLink
} from "react-router-dom";

const Header = () => {
    return (
        <React.Fragment>
            <div className='HeaderContainer'>
                <div className='LogoContainer'>
                    <NavLink className='NavLink' to="/"><img className="logo" alt="Logo"/></NavLink>
                </div>
                <div className='OptionsContainer'>
                    <NavLink className={(data) => data.isActive ? 'NavLink-Active': 'NavLink'} to="/About">About</NavLink>
                    <NavLink className={(data) => data.isActive ? 'NavLink-Active': 'NavLink'} to="/Skills">Skills</NavLink>
                    <NavLink className={(data) => data.isActive ? 'NavLink-Active': 'NavLink'} to="/Work">Work</NavLink>
                    <NavLink className={(data) => data.isActive ? 'NavLink-Active': 'NavLink'} to="/Contact">Contact</NavLink>
                    <NavLink className={(data) => data.isActive ? 'NavLink-Active': 'NavLink'} to="/Extra">Extra</NavLink>
                </div>
            </div>
        </React.Fragment>
    );
};

export default Header;