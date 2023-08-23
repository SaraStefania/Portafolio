import Subtitulo from '../reusable/Subtitulo'
import Titulo from '../reusable/Titulo'
import Logos from './Logos'
import './experiencia.css'

export default function Experiencia() {
  return (
    <div className='container-experiencia'>
    <Subtitulo>Mis habilidades</Subtitulo>
    <Titulo>Habilidades</Titulo>
    <div className='d-flex flex-wrap '>
        <Logos src='src/assets/javascript.png'>Javascript</Logos>
        <Logos src='src/assets/react.png'>React</Logos>
        <Logos src='src/assets/node.png'>Node.js</Logos>
        <Logos src='src/assets/java.png'>Java</Logos>
        <Logos src='src/assets/sql.png'>SQL</Logos>
        <Logos src='src/assets/css.png'>CSS</Logos>
        <Logos src='src/assets/html.png'>HTML</Logos>
        <Logos src='src/assets/bootstrap.png'>Bootstrap</Logos>
        <Logos src='src/assets/github.png'>Github</Logos>
        <Logos src='src/assets/firebase.png'>Firebase</Logos>
        <Logos src='src/assets/figma.png'>Figma</Logos>
    </div>
    </div>
  )
}
