import PropTypes from 'prop-types';

export default function LogosFooter({src, href}) {
  return (
    <div>
        <a href={href}><img className='logos-footer' src={src}></img></a>
    </div>
  )
}

LogosFooter.propTypes = {
    src: PropTypes.string.isRequired,
    href: PropTypes.string.isRequired,
  };