
import Avatar from '../img/mzVAuITx_400x400.jpg'
import InformationContainer from './InformationContainer';
import SocialNetworks from './SocialNetworks';
import curriculoPDF from '../assets/Currículo_Sabrina.pdf' 
const Sidebar = () =>{
    return (
        <aside id="sidebar">
           <img src={Avatar} alt="Sabrina Ferreira" />
            <p className="title">Densenvolvedora Front-End</p>
            <SocialNetworks />
            <InformationContainer />
            <a href={curriculoPDF} download="Currículo_Sabrina.pdf" className="btn">Download currículo</a> 
        </aside>
    )
}

export default Sidebar;