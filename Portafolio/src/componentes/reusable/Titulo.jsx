import PropTypes from 'prop-types';

export default function Titulo({children}) {
  return (
    <div className='titulo-container'>
        <p className='titu'>{children}</p>
    </div>
  )
}

Titulo.propTypes = {
    children: PropTypes.string.isRequired,
};
