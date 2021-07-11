import React from 'react'
import '../styles.css'
import todo from '../images/todovainilla.png';
import sw from '../images/swapp.png';
import pig from '../images/pig.png';
import zoo from '../images/zoo.png';
import memo from '../images/memo.png';
 

export const ProjectsScreen= () => {
    console.log(process.env.PUBLIC_URL);
    return (
        <div >
            
            <div className="education">
            <h3 className="resume-title">Projects</h3>
            <div className="projects-container">
            <a className="img" href="https://longaniza.github.io/ProyectoFinalJSBeduFinal/">
            <img className="dentro" src={todo} alt="1-work"></img>
            <h4 className="resume-title">Todo App</h4>
            <p className="work-description">Web app made with HTML5, CSS3 and JavaScript. To do's saved using localStorage.</p>
            </a>
            <a className="img" href="https://longaniza.github.io/PigIvanov/">
            <img className="dentro" src={pig} alt="1-work"></img>
            <h4 className="resume-title">Pig Game</h4>
            <p className="work-description">Based in mini project made in The Complete JavaScript Course 2021: From Zero to Expertig Game. Different JS logic, same styles.</p>
            </a> 
            <a className="img" href="https://longaniza.github.io/swpage/">
            <img className="dentro" src={sw} alt="1-work"></img>
            <h4 className="resume-title">Star Wars Mini App</h4>
            <p className="work-description">Web app made with React, Bootstrap, and SWAPI:The Star Wars API. Requests resolved with fetch API at render time. </p>
            </a>
            <a className="img" href="https://github.com/Longaniza/ProyectoFinalBackendBedu">
            <img className="dentro" src={zoo} alt="1-work"></img>
            <h4 className="resume-title">Zoo API</h4>
            <p className="work-description">Zoo API made with NodeJS and MySQL.</p>
            </a>  
            <a className="img" href="https://still-cove-58043.herokuapp.com/memo">
            <img className="dentro" src={memo} alt="1-work"></img>
            <h4 className="resume-title">Online Memory Game</h4>
            <p className="work-description">Web app made with React, NodeJS and MySQL. It has different difficulties and highscores.</p>
            </a>        
            </div>
            
            </div>
          
        </div>
    )
}
