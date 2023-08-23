import './inicio.css';
import Subtitulo from '../reusable/Subtitulo';
import Link from '../reusable/Link';

export default function Inicio() {
  return (
    <div className='d-flex flex-column justify-content-center contenedor'>
      <div className='container'>
        <p className='subtitulo'>Hola, mi nombre es</p>
        <p className='titulo'>Sara Sierra</p>
        <Subtitulo fontSize='40px'>Full stack developer</Subtitulo>
        <div className='d-flex flex-wrap'>
          <Link marginTop='5vh' href='/about'>Sobre mi</Link>
          <Link marginLeft='3vh' marginTop='5vh' href='src/assets/CV Sara Sierra.pdf' download>Descargar CV</Link>
        </div>
      </div>
    </div>
  )
}
