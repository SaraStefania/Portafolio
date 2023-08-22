import PropTypes from 'prop-types';
import './reusable.css';


export default function Subtitulo({children}) {
  return (
    <div className='subtitulo-container'>
        <div className='linea'></div>
        <p className='sub'>{children}</p>
    </div>
  )
}

Subtitulo.propTypes = {
    children: PropTypes.string.isRequired,
  };
