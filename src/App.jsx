import Header from './componentes/header/Header';
import Inicio from './componentes/inicio/Inicio';
import SobreMi from './componentes/about/SobreMi';
import Experiencia from './componentes/experiencia/Experiencia';
import Proyectos from './componentes/proyectos/Proyectos';
import Footer from './componentes/footer/Footer';


function App() {


  return (
    <div className='app'>
    <Header/>
    <Inicio id='inicio'/>
    <SobreMi id='about'/>
    <Experiencia id='experiencia'/>
    <Proyectos id='proyectos'/>
    <Footer/>

      
    </div>
  )
}

export default App
