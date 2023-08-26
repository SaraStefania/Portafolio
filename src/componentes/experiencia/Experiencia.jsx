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
        <Logos src='public/assets/javascript.png'>Javascript</Logos>
        <Logos src='public/assets/react.png'>React</Logos>
        <Logos src='public/assets/node.png'>Node.js</Logos>
        <Logos src='public/assets/java.png'>Java</Logos>
        <Logos src='public/assets/sql.png'>SQL</Logos>
        <Logos src='public/assets/css.png'>CSS</Logos>
        <Logos src='public/assets/html.png'>HTML</Logos>
        <Logos src='public/assets/bootstrap.png'>Bootstrap</Logos>
        <Logos src='public/assets/github.png'>Github</Logos>
        <Logos src='public/assets/firebase.png'>Firebase</Logos>
        <Logos src='public/assets/figma.png'>Figma</Logos>
    </div>
    </div>
  )
}
