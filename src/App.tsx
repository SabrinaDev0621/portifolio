
import './App.css'
import AboutContainer from './components/AboutContainer'
import InformationContainer from './components/InformationContainer'
import MainContent from './components/MainContent'
import ProjectsContainer from './components/ProjectsContainer'
import Sidebar from './components/Sidebar'
import SocialNetworks from './components/SocialNetworks'
import TechnologiesContainer from './components/TechnologiesContainer'

const App = () => {

  return (
    
      <div id='portifolio'>
        <h1>Sabrina Ferreira</h1>
        <Sidebar />
        <MainContent />
        <AboutContainer />
        <InformationContainer />
        <ProjectsContainer />
        <SocialNetworks />
        <TechnologiesContainer />
      </div>
    
  )
}

export default App
