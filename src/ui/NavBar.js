import React from 'react'
import { Link, NavLink } from 'react-router-dom'
import '../styles.css'
import mexicano from '../images/mexicano.png'


export const NavBar = () => {
    return (
        <>
        <nav className="navbar navbar-expand-lg navbar-dark bg-danger  barra">
            <Link 
                className="navbar-brand"
                to={process.env.PUBLIC_URL + '/'}
            >
                <img src={mexicano} width="30" height="30" className="d-inline-block align-top" alt="" loading="lazy"></img>
            </Link>
            <div className="navbar-collapse">
                <div className="navbar-nav">
                    <NavLink
                        activeClassName="active"
                        className="nav-item nav-link"
                        exact
                        to={process.env.PUBLIC_URL + '/'}
                    >
                    Resume
                    </NavLink>
                    <NavLink
                        activeClassName="active"
                        className="nav-item nav-link"
                        exact
                        to={process.env.PUBLIC_URL + "/projects"}
                    >
                    Work
                    </NavLink>
                </div>
            </div>
        </nav>  
        </>
    )
}
