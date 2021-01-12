import React from 'react'
import '../styles.css'
import todo from '../images/todovainilla.png';
import sw from '../images/swapp.png';
import pig from '../images/pig.png';
 

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
            <p className="work-description">Web app made with HTML5, CSS3 and JavaScript</p>
            </a>
            <a className="img" href="https://longaniza.github.io/swpage/">
            <img className="dentro" src={sw} alt="1-work"></img>
            <h4 className="resume-title">Star Wars Mini App</h4>
            <p className="work-description">Web app made with React, Bootstrap, and SWAPI:The Star Wars API. Requests resolved with fetch API at render time. </p>
            </a> 
            <a className="img" href="https://longaniza.github.io/PigIvanov/">
            <img className="dentro" src={pig} alt="1-work"></img>
            <h4 className="resume-title">Pig Game</h4>
            <p className="work-description">Pig game </p>
            </a>            
            </div>
            
            </div>
          
        </div>
    )
}
