import Subtitulo from '../reusable/Subtitulo'
import Titulo from '../reusable/Titulo'
import Logos from './Logos'
import { useEffect } from 'react';
import './experiencia.css'

export default function Experiencia() {
  useEffect(() => {
    document.getElementById('experiencia').scrollIntoView({ behavior: 'smooth' });
  }, []);
  return (
    <div id='experiencia' className='container-experiencia'>
    <Subtitulo>Mis habilidades</Subtitulo>
    <Titulo>Habilidades</Titulo>
    <div className='d-flex flex-wrap '>
        <Logos src='/assets/javascript.png'>Javascript</Logos>
        <Logos src='/assets/react.png'>React</Logos>
        <Logos src='/assets/node.png'>Node.js</Logos>
        <Logos src='/assets/java.png'>Java</Logos>
        <Logos src='/assets/sql.png'>SQL</Logos>
        <Logos src='/assets/css.png'>CSS</Logos>
        <Logos src='/assets/html.png'>HTML</Logos>
        <Logos src='/assets/bootstrap.png'>Bootstrap</Logos>
        <Logos src='/assets/github.png'>Github</Logos>
        <Logos src='/assets/firebase.png'>Firebase</Logos>
        <Logos src='/assets/figma.png'>Figma</Logos>
    </div>
    </div>
  )
}
