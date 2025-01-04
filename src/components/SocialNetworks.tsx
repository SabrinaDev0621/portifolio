import { FaLinkedinIn, FaGithub, FaInstagram } from 'react-icons/fa';
import '../App.css'



const socialNetworks = [
    {name: "linkedin", icon: <FaLinkedinIn />},
    {name: "github", icon: <FaGithub />},
    {name: "instagram", icon: <FaInstagram />},

]
const SocialNetworks = () =>{
    return(
        <section id='social-networks'>
            {socialNetworks.map((netwotk) => (
                <a href='#' className='social-btn' id={netwotk.name} key={netwotk.name}>
                    {netwotk.icon}
                </a>
            ))}
        </section>
    )
}

export default SocialNetworks;