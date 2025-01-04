import '../App.css'
import {DiHtml5, DiCss3, DiReact, DiJavascript} from 'react-icons/di'
import { SiTypescript } from "react-icons/si";

const technologies =  [
    {id: "html", name: "HTML5", icon: <DiHtml5 /> },
    {id: "css", name: "CSS3", icon: <DiCss3 /> },
    {id: "js", name: "JavaScript", icon: <DiJavascript /> },
    {id: "react", name: "React", icon: <DiReact /> },
    {id: "typescript", name: "TypeScript", icon: <SiTypescript /> },
]

const TechnologiesContainer = () =>{
    return(
       <section className='technologies-container'>
        <h2>Technologies</h2>
        <div className='technologies-grid'>
            {technologies.map((tech) => (
                <div className='technology-card' id={tech.id} key={tech.id}>
                    {tech.icon} 
                    <div className='technology-info'>
                        <h3>{tech.name}</h3>
                        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit.</p>
                    </div>  
                </div>
            ))}
        </div>
       </section>
    )
}

export default TechnologiesContainer;