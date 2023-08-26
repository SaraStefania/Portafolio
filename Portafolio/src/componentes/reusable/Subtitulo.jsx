import PropTypes from 'prop-types';
import './reusable.css';


export default function Subtitulo({children, id}) {
  return (
    <div className='subtitulo-container'>
        <div className='linea'></div>
        <p className='sub' id={id} >{children}</p>
    </div>
  )
}

Subtitulo.propTypes = {
    children: PropTypes.string.isRequired,
    id: PropTypes.string,
  };
