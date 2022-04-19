import './App.scss'
import Particles from 'react-tsparticles';
import ParticlesConfig from './particlesconfig';
import Menu from './Components/Menu';
import Skills from './Components/Skills';
import Introduction from './Components/Introduction';
import Contact from './Components/Contact';


function App() {
  const particlesInit = (main) => {
    console.log(main);
    // you can initialize the tsParticles instance (main) here, adding custom shapes or presets
  };
  const particlesLoaded = (container) => {
    console.log(container);
  };

  return (
    <>
    <Menu></Menu>
    <div>
      <Particles 
        id="tsparticles"
        init={particlesInit}
        loaded={particlesLoaded}
        options={ParticlesConfig}
      /> 
    </div>
    <div className="content">
        <Introduction></Introduction>
        <Skills></Skills> 
    </div> 
    
    </>
  );
}


export default App
