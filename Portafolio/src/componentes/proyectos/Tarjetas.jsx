import PropTypes from 'prop-types';
import Card from 'react-bootstrap/Card';



export default function Tarjetas({src, titulo, href1, href2 }) {
  return (

    <Card className='card' >
      <Card.Img className='imagen' variant="top" src={src} />
      <Card.Body className='body'>
        <Card.Title  className='tituloCard text-center '>{titulo}</Card.Title>
        <div className='d-flex justify-content-center align-items-center'>
        <a className='linkCard' href={href1}>Respositorio</a>
        <a className='linkCard' href={href2}>Página web</a>
        </div>
   
      </Card.Body>
    </Card>
       

  )
}
Tarjetas.propTypes = {
    src: PropTypes.string.isRequired,
    href1: PropTypes.string.isRequired,
    href2: PropTypes.string.isRequired,
    titulo: PropTypes.string.isRequired
  };