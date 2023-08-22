import { Route, Routes } from 'react-router-dom';
import Header from './componentes/header/Header'
import Inicio from './componentes/inicio/Inicio'

function App() {


  return (
    <>
    <Header/>
    <Routes>
      <Route path="/" element={<Inicio/>}/>
    </Routes>

      
    </>
  )
}

export default App
