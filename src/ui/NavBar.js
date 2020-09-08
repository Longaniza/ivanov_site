import React from 'react'
import { Link, NavLink } from 'react-router-dom'

export const NavBar = () => {
    return (
        <>
        <nav class="navbar navbar-expand-lg navbar-light bg-light">
            <Link 
                className="navbar-brand"
                to="/"
            >
            Home
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
