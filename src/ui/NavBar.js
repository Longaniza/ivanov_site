import React from 'react'
import { Link, NavLink } from 'react-router-dom'

export const NavBar = () => {
    return (
        <>
        <nav class="navbar navbar-expand-lg navbar-light bg-primary">
            <Link 
                className="navbar-brand"
                to="/"
            >
                <img src="/mexicano.png" width="30" height="30" className="d-inline-block align-top" alt="" loading="lazy"></img>
            </Link>
            <div class="navbar-collapse">
                <div class="navbar-nav">
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
