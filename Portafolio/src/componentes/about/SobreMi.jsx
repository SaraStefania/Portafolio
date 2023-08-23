import Subtitulo from '../reusable/Subtitulo';
import Titulo from '../reusable/Titulo';
import Link from '../reusable/Link';
import Habilidades from '../reusable/habilidades';
import { useEffect } from 'react';
import './about.css'


export default function SobreMi() {
  useEffect(() => {
    document.getElementById('about').scrollIntoView({ behavior: 'smooth' });
  }, []);
  
  return (
    <>

      <div id='about' className='d-flex justify-content-center align-items-center container-about'>
          <img className='foto' src="src/assets/foto.jpeg" ></img>
          <div className='container-sobreMi'>
              <Subtitulo>Sobre mi</Subtitulo>
              <Titulo>Quien soy</Titulo>
              <p className='aboutMe'>Siempre he tenido un gran interés por resolver problemas y enfrentarme a nuevos 
                  retos. El haber crecido en la era digital, sembró en mí la curiosidad de saber 
                  cómo el mundo de la tecnología influye en las aplicaciones con las que interactuamos 
                  a diario. Esto me llevó a descubrir mi creatividad y capacidad para resolver problemas. 
                  Hoy, con la ayuda de la programación, soy capaz de expandir soluciones que agreguen valor a la sociedad.
              </p>
              <Link href='src/assets/CV Sara Sierra.pdf' download>Descargar CV</Link>
          </div>
      </div>
     
    <div className='container-about'>
      <Titulo>Habilidades</Titulo>
        <div className='d-flex flex-wrap container-habilidades'>
          <Habilidades>React</Habilidades>
          <Habilidades>Javascript</Habilidades>
          <Habilidades>NodeJS</Habilidades>
          <Habilidades>Java</Habilidades>
          <Habilidades>SQL</Habilidades>
          <Habilidades>CSS</Habilidades>
          <Habilidades>HTML</Habilidades>
          <Habilidades>Github</Habilidades>
          <Habilidades>Git</Habilidades>
          <Habilidades>Firebase</Habilidades>
        </div>
    </div>
  </>

  )
}
