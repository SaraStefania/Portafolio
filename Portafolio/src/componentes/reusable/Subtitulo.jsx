import PropTypes from 'prop-types';
import './reusable.css';


export default function Subtitulo({children, fontSize}) {
  return (
    <div className='subtitulo-container'>
        <div className='linea'></div>
        <p className='sub' style={{ fontSize }}>{children}</p>
    </div>
  )
}

Subtitulo.propTypes = {
    children: PropTypes.string.isRequired,
    fontSize: PropTypes.string
  };