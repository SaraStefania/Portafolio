import './inicio.css';
import Subtitulo from '../reusable/Subtitulo';
import Link from '../reusable/Link';



export default function Inicio() {


  return (
    <div id='inicio' className='d-flex flex-column justify-content-center contenedor'>
      <div className='container'>
        <p className='subtitulo'>Hola, mi nombre es</p>
        <p className='titulo'>Sara Sierra</p>
        <Subtitulo id='componenteSubtitulo'>Full stack developer</Subtitulo>
        <Link marginLeft='3vh' marginTop='5vh' href='/assets/CV Sara Sierra.pdf' download>Descargar CV</Link>

      </div>
    </div>
  )
}

