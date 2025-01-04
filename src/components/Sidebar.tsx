
import Avatar from '../img/mzVAuITx_400x400.jpg'
import InformationContainer from './InformationContainer';
import SocialNetworks from './SocialNetworks';

const Sidebar = () =>{
    return (
        <aside id="sidebar">
           <img src={Avatar} alt="Sabrina Ferreira" />
            <p className="title">Densenvolvedora Front-End</p>
            <SocialNetworks />
            <InformationContainer />
            <a href="" className="btn">Download currículo</a> 
        </aside>
    )
}

export default Sidebar;