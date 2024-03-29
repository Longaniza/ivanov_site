import React from 'react';
import '../styles.css'
import profile from '../images/ivanov.jpg';
import linkedin from '../images/linkedin.png';
import github from '../images/github.png';
import mern from '../images/mern.jpg';
import cetys from '../images/cetys.jpeg';
import ivanovpdf from '../images/ivanov_cv.pdf'

export const ResumeScreen = () => {
    console.log(process.env.PUBLIC_URL);
    return (
        <div className="principal">
            <div className="post-bar"></div>
            <div className="header">
                <img className="resume-image" src={profile} alt="profile"></img>
                <h1>I'm Jose Ivanov Ramirez Tirado</h1>
                <h5>Web Developer</h5>
                <div className="icons">
                    <a href="https://www.linkedin.com/in/jose-ivanov-ramirez-tirado-b3200a178/"><img className="icon" src={linkedin} alt="linkedin-icon"></img></a>
                    <a href="https://github.com/Longaniza"><img className="icon" src={github} alt="github-icon"></img></a>
                </div>
                
                <a href={ivanovpdf} id="cv-button" className="btn btn-danger boton" download="ivanov_cv">Download CV</a>
            </div>
            <div className="personal-information">
            <div className="about-info">
            <h3 className="resume-title">About</h3>
            <p>
            I'm Jose Ivanov Ramirez Tirado. I was born in Tijuana, México. I'm a 23 years old Web Developer graduated in 2020 with a Computer Science degree. One of my biggest hobbies right now is programming; I just like to consume and make technology. 
            </p>

            </div>
            <div className="about-info">
            <h3 className="resume-title">Basic Information</h3>
                <div id="basic-info">
                <p className="row1-col1 resume-subtitle">Date of birth:</p>
                <p className="row1-col2">May 1st,1998</p>
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
                        <li>Redux</li>
                        <li>Node</li>
                        <li>MongoDB</li>
                        <li>SQL with MySQL</li>
                        <li>Control Version with Git and Github</li>
                        <li>Scrum</li>
                    </ul>
                </div>
                <img src={mern} className="row1-col2 skills-image" alt="skills"></img>
            </div>

            <div className="education">
                <h1 className="resume-title">Education</h1>
                <div className="education-container">
                <div className="cetys">
                <img src={cetys} className="educ-img" alt="1-education"></img>
                </div>
                <div className="education-container-text">
                <h3 className="education-container-text-content resume-subtitle">CETYS Universidad</h3>
                <p className="education-container-text-content resume-title">Computer Science Degree, 2016-2020 </p>
                </div>
                </div>
            </div>
        </div>
    )
}
