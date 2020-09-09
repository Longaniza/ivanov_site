import React from 'react';
import '../styles.css'

export const ResumeScreen = () => {
    return (
        <div className="principal">
            <div className="post-bar"></div>
            <div className="header">
                <img className="resume-image" src= "/ivanov.jpg"></img>
                <h1>I'm Jose Ivanov Ramirez Tirado</h1>
                <h5>Front End Developer</h5>
                <div className="icons">
                    <a href="https://www.linkedin.com/in/jose-ivanov-ramirez-tirado-b3200a178/"><img className="icon" src="/linkedin.png"></img></a>
                    <a href="https://github.com/Longaniza"><img className="icon" src="/github.png"></img></a>
                </div>
                <a id="cv-button" className="btn btn-danger boton">Download CV</a>
            </div>
            <div className="personal-information">
            <div className="about-info">
            <h3>About</h3>
            <p>
                "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum"
            </p>

            </div>
            <div className="about-info">
            <h3>Basic Information</h3>
                <div id="basic-info">
                <p className="row1-col1">Date of birth:</p>
                <p className="row1-col2">1 May,1998</p>
                <p className="row2-col1">Place of birth:</p>
                <p className="row2-col2">Tijuana, Mexico</p>
                <p className="row3-col1">Language</p>
                <p className="row3-col2">Spanish,English</p>
                <p className="row4-col1">Gender</p>
                <p className="row4-col2">Male</p>
                </div>
            </div>
            </div>
        </div>
    )
}
