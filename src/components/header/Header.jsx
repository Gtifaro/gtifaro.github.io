import React from 'react';
import {
    NavLink
} from "react-router-dom";
import Logo from "../../utils/img/Logo.png"

const Header = () => {
    return (
        <React.Fragment>
            <div className='HeaderContainer'>
                <div className='LogoContainer'>
                    <NavLink title="Welcome" className='NavLink' to="/"><img className="logo" src={Logo}alt="Logo"/></NavLink>
                </div>
                <div className='OptionsContainer'>
                    <NavLink title="More about me" className={(data) => data.isActive ? 'NavLink-Active': 'NavLink'} to="/About">About</NavLink>
                    <NavLink title="Some of my skills" className={(data) => data.isActive ? 'NavLink-Active': 'NavLink'} to="/Skills">Skills</NavLink>
                    <NavLink title="Previus proyects" className={(data) => data.isActive ? 'NavLink-Active': 'NavLink'} to="/Work">Work</NavLink>
                    <NavLink title="Start a conversation" className={(data) => data.isActive ? 'NavLink-Active': 'NavLink'} to="/Contact">Contact</NavLink>
                    <NavLink title="My personal blog" className={(data) => data.isActive ? 'NavLink-Active': 'NavLink'} to="/Blog">Blog</NavLink>
                </div>
            </div>
        </React.Fragment>
    );
};

export default Header;