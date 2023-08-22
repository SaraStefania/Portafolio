import './inicio.css';
import Subtitulo from '../reusable/Subtitulo';
import Link from '../reusable/Link';

export default function Inicio() {
  return (
    <div className='d-flex flex-column justify-content-center contenedor'>
      <div className='container'>
        <p className='subtitulo'>Hola, mi nombre es</p>
        <p className='titulo'>Sara Sierra</p>
        <Subtitulo>Full stack developer</Subtitulo>
        <Link>Sobre mi</Link>
      </div>
    </div>
  )
}
