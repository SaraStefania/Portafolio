
import Header from './componentes/header/Header'
import Inicio from './componentes/inicio/Inicio'
import SobreMi from './componentes/about/SobreMi';
import Proyectos from './componentes/proyectos/proyectos';
import Experiencia from './componentes/experiencia/Experiencia';
import Footer from './componentes/footer/footer';


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
