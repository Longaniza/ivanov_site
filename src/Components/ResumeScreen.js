import React from 'react';
import '../styles.css'

export const ResumeScreen = () => {
    return (
        <div>
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
        </div>
    )
}
