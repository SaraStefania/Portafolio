
import Header from './componentes/header/Header'
import Inicio from './componentes/inicio/Inicio'
import SobreMi from './componentes/about/SobreMi';
import Proyectos from './componentes/proyectos/proyectos';
import Experiencia from './componentes/experiencia/Experiencia';


function App() {


  return (
    <div className='app'>
    <Header/>
    <Inicio id='inicio'/>
    <SobreMi id='about'/>
    <Proyectos id='proyectos'/>
    <Experiencia id='experiencia'/>

      
    </div>
  )
}

export default App
