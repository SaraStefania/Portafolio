import PropTypes from 'prop-types';
import './reusable.css';

export default function Link({href, children}) {
  return (
    <a href={href}>{children}</a>
  )
}

Link.propTypes = {
    children: PropTypes.string.isRequired,
    href: PropTypes.string.isRequired
  };
