import React from 'react'
import propTypes from 'prop-types';
import { Link } from 'react-router-dom';

const Navbar = ({icon,title})=>{

        return (
            <nav className="light-blue lighten-1" role="navigation">
                <div className="nav-wrapper container">
                    <Link id="logo-container" to="/" className="brand-logo">{title}</Link>
                    <ul className="right hide-on-med-and-down">
                        <li><Link to="/">Home</Link></li>
                        <li><Link to="/about">About</Link></li>
                        <li><a href="#">sass</a></li>
                    </ul>

                    <ul id="nav-mobile" className="sidenav">
                       <li><Link to="/">Home</Link></li>
                        <li><Link to="/about">About</Link></li>
                    </ul>
                    <a href="#" data-target="nav-mobile" className="sidenav-trigger">
                        <i className="material-icons">menu</i>
                    </a>
                </div>
            </nav>
        )
    };

     Navbar.defaultProps = {
        title:'Github Finder',
        icon:'fab fa-github'
    };

    Navbar.propTypes = {
        title:propTypes.string.isRequired,
        icon:propTypes.string.isRequired
    }



export default Navbar
