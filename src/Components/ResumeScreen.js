import React from 'react';
import '../styles.css'

export const ResumeScreen = () => {
    return (
        <div className="principal">
            <div className="post-bar"></div>
            <div className="header">
                <img className="resume-image" src= "./ivanov.jpg" alt="profile"></img>
                <h1>I'm Jose Ivanov Ramirez Tirado</h1>
                <h5>Web Developer</h5>
                <div className="icons">
                    <a href="https://www.linkedin.com/in/jose-ivanov-ramirez-tirado-b3200a178/"><img className="icon" src="/linkedin.png" alt="linkedin-icon"></img></a>
                    <a href="https://github.com/Longaniza"><img className="icon" src="/github.png" alt="github-icon"></img></a>
                </div>
                
                <a href="./ivanov_cv.pdf" id="cv-button" className="btn btn-danger boton" download="ivanov_cv">Download CV</a>
            </div>
            <div className="personal-information">
            <div className="about-info">
            <h3 className="resume-title">About</h3>
            <p>
            I'm Jose Ivanov Ramirez Tirado.I was born at Tijuana, México. I'm a 22 years old Web Developer graduated in 2020 at CETYS Universidad with a Computer Science degree. I just like to consume and make technology. 
            </p>

            </div>
            <div className="about-info">
            <h3 className="resume-title">Basic Information</h3>
                <div id="basic-info">
                <p className="row1-col1 resume-subtitle">Date of birth:</p>
                <p className="row1-col2">1 May,1998</p>
                <p className="row2-col1 resume-subtitle">Place of birth:</p>
                <p className="row2-col2">Tijuana, Mexico</p>
                <p className="row3-col1 resume-subtitle">Language:</p>
                <p className="row3-col2">Spanish,English</p>
                <p className="row4-col1 resume-subtitle">Gender:</p>
                <p className="row4-col2">Male</p>
                </div>
            </div>
            </div>
            <div className="skills">
                <div className="about-info">
                    <h3 className="resume-title">Skills and Tools</h3>
                    <ul className="skill-list resume-subtitle" >
                        <li>HTML</li>
                        <li>CSS</li>
                        <li>JavaScript</li>
                        <li>React</li>
                        <li>Node</li>
                        <li>MongoDB</li>
                        <li>SQL</li>
                        <li>Control Version with Git</li>
                        <li>Scrum</li>
                    </ul>
                </div>
                <img src="/mern.jpg" className="row1-col2 skills-image" alt="skills"></img>
            </div>

            <div className="education">
                <h1 className="resume-title">Education</h1>
                <div className="education-container">
                <div className="cetys">
                <img src="/cetys.jpeg" className="educ-img" alt="1-education"></img>
                </div>
                <div className="education-container-text">
                <h3 className="education-container-text-content resume-subtitle">CETYS Universidad</h3>
                <p className="education-container-text-content resume-title">Ing. en Ciencias Computacionales, 2016-2020 </p>
                </div>
                </div>
            </div>
        </div>
    )
}
