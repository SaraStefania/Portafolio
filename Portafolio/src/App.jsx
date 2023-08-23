import { Route, Routes } from 'react-router-dom';
import Header from './componentes/header/Header'
import Inicio from './componentes/inicio/Inicio'
import SobreMi from './componentes/about/SobreMi';

function App() {


  return (
    <>
    <Header/>
    <Routes>
      <Route path="/" element={<Inicio/>}/>
      <Route path="/about" element={<SobreMi/>}/>
    </Routes>

      
    </>
  )
}

export default App
