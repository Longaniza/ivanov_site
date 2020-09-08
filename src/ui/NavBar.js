import React from 'react'
import { Link, NavLink } from 'react-router-dom'
import '../styles.css'


export const NavBar = () => {
    return (
        <>
        <nav className="navbar navbar-expand-lg navbar-dark bg-danger barra">
            <Link 
                className="navbar-brand"
                to="/"
            >
                <img src="/mexicano.png" width="30" height="30" className="d-inline-block align-top" alt="" loading="lazy"></img>
            </Link>
            <div className="navbar-collapse">
                <div className="navbar-nav">
                    <NavLink
                        activeClassName="active"
                        className="nav-item nav-link"
                        exact
                        to="/"
                    >
                    Resume
                    </NavLink>
                    <NavLink
                        activeClassName="active"
                        className="nav-item nav-link"
                        exact
                        to="/about"
                    >
                    About me
                    </NavLink>
                    <NavLink
                        activeClassName="active"
                        className="nav-item nav-link"
                        exact
                        to="/contact"
                    >
                    Contact me
                    </NavLink>
                </div>
            </div>
        </nav>  
        </>
    )
}
