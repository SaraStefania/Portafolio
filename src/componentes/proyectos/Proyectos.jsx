import Subtitulo from '../reusable/Subtitulo';
import Titulo from '../reusable/Titulo';
import Tarjetas from './Tarjetas';
import { useEffect } from 'react';
import './proyectos.css'

export default function Proyectos() {
  useEffect(() => {
    document.getElementById('proyectos').scrollIntoView({ behavior: 'smooth' });
  }, []);
  
  return (
    <div id='proyectos' className='container-proyectos'>
        <Subtitulo>Mis proyectos</Subtitulo>
        <Titulo>Proyectos</Titulo>
        <div className='d-flex flex-wrap proyectos'>
          <Tarjetas href2='https://portafolio-theta-gilt.vercel.app/' href1='https://github.com/SaraStefania' titulo='Portafolio' src='/assets/portafolio.png'></Tarjetas>
          <Tarjetas href2='https://dev-003-burger-queen-api-client-one.vercel.app/' href1='https://github.com/SaraStefania/DEV003-burger-queen-api-client' titulo='Burguer queen' src='/assets/burguerImagen.png'></Tarjetas>
          <Tarjetas href2='www.npmjs.com/package/md-links-minder' href1='https://github.com/SaraStefania/DEV003-md-links' titulo='Md Links' src='/assets/mdLinks.png'></Tarjetas>
          <Tarjetas href2='https://sarastefania.github.io/DEV003-data-lovers/src/index.html' href1='https://github.com/SaraStefania/DEV003-data-lovers' titulo='Data Lovers' src='/assets/datalovers.png'></Tarjetas>
          <Tarjetas href2='SaraStefania.github.io/DEV003-card-validation/src/index.html' href1='https://github.com/SaraStefania/DEV003-card-validation' titulo='Card Validation' src='/assets/cardValidation.png'></Tarjetas>
        </div>
    </div>
  )
}
