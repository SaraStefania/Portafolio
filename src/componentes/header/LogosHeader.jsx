import PropTypes from 'prop-types';

export default function LogosHeader({src, href}) {
  return (
    <div>
        <a href={href}>
            <img className='logos-header' src={src}></img>
        </a>
    </div>
  )
}
LogosHeader.propTypes = {
    src: PropTypes.string.isRequired,
    href: PropTypes.string.isRequired,
  };
