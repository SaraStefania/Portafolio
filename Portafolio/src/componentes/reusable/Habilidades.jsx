import PropTypes from 'prop-types';
import './reusable.css';
export default function Habilidades({children}) {
  return (
    <div>
        <p className='habilidades'>{children}</p>
    </div>
  )
}
Habilidades.propTypes = {
    children: PropTypes.string.isRequired,
  };

