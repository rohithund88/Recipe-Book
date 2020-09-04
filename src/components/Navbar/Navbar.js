import React from 'react';

import logo from '../../images/logo.svg';
import '../../App.css';
import { NavLink } from 'react-router-dom';


const navbar =() => {
    return (
        
        <nav className ="navbar fixed-top border-bottom navbar-expand-sm py-1 navbar-light bg-light ">
        <div className="container">
        <NavLink className="navbar-brand" to="/">
            <img src={logo} width="100" height="50" className="d-inline-block align-top" alt="" loading="lazy"/>
                
        </NavLink>
            <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
            <span className="navbar-toggler-icon"></span>
            </button>
                <div className="collapse navbar-collapse" id="navbarNav">
                    <ul className="navbar-nav ml-auto">
                        <li className="nav-item ">
                            <NavLink  exact activeClassName="menu_active" className="nav-link "  to="/">Home </NavLink>
                        </li>
                        <li className="nav-item">
                            <NavLink  activeClassName="menu_active" className="nav-link"  to={"/search"}>Search Recipe</NavLink>
                        </li>
                        <li className="nav-item">
                            <NavLink  activeClassName="menu_active" className="nav-link"   to="/about">AboutUs</NavLink>
                        </li>
                        
                    </ul>
                </div>
        </div>
      </nav>
     
     
    
    );
 
}

export default navbar;