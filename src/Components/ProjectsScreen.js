import React from 'react'
import '../styles.css'
import todo from '../images/todovainilla.png';

export const ProjectsScreen= () => {
    console.log(process.env.PUBLIC_URL);
    return (
        <div >
            
            <div className="education">
            <h3 className="resume-title">Work</h3>
            <div className="projects-container">
            <a className="img" href="https://longaniza.github.io/todoAppVainilla/">
            <img className="dentro" src={todo} alt="1-work"></img>
            <h4 className="resume-title">Todo App</h4>
            <p className="work-description">Web app made it with only HTML5, CSS3 and JavaScript</p>
            </a>            
            </div>
            
            </div>
          
        </div>
    )
}
