import PropTypes from 'prop-types';

export default function Logos({src, children}) {
  return (
    <div className='d-flex flex-column justify-content-center'>
    <img className='logos' src={src}></img>
    <p className='titulos-logos'>{children}</p>
    </div>
  )
}

Logos.propTypes = {
    children: PropTypes.string.isRequired,
    src: PropTypes.string.isRequired,
  };