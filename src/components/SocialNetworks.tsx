import { FaLinkedinIn, FaGithub, FaInstagram } from 'react-icons/fa';
import '../App.css'



const socialNetworks = [
    { name: "linkedin", icon: <FaLinkedinIn />, URL: "https://www.linkedin.com/in/sabrina-ferreira-6b8272148/" },
    { name: "github", icon: <FaGithub />, URL: "https://github.com/SabrinaDev0621" },
    { name: "instagram", icon: <FaInstagram />, URL: "https://www.instagram.com/sah_ferreira6/" }
  ];
const SocialNetworks = () => {
    return (
        <section id='social-networks'>
            {socialNetworks.map((network) => (
                <a href={network.URL}
                    className='social-btn'
                    id={network.name}
                    key={network.name}
                    target="_blank"
                    rel="noopener noreferrer"
                >
                    {network.icon}
                </a>
            ))}
        </section>
    )
}

export default SocialNetworks;