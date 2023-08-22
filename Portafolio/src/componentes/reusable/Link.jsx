import PropTypes from 'prop-types';
import './reusable.css';

export default function Link({href, children}) {
  return (
    <div className='link-container'>
        <a className='link' href={href}>{children}</a>
    </div>
  )
}

Link.propTypes = {
    children: PropTypes.string.isRequired,
    href: PropTypes.string.isRequired
  };
