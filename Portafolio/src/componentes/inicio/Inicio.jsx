import './inicio.css';
import Subtitulo from '../reusable/Subtitulo';

export default function Inicio() {
  return (
    <div className='d-flex flex-column justify-content-center contenedor'>
        <p className='subtitulo'>Hola, mi nombre es</p>
        <p className='titulo'>Sara Sierra</p>
        <Subtitulo>Full stack developer</Subtitulo>
    </div>
  )
}
