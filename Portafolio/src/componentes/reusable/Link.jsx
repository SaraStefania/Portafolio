import PropTypes from 'prop-types';
import './reusable.css';

export default function Link({href, children, marginTop, download, marginLeft}) {
  return (
    <div className='link-container'>
        <a className='link' style={{marginTop, marginLeft}} href={href} download={download}>{children}</a>
    </div>
  )
}

Link.propTypes = {
    children: PropTypes.string.isRequired,
    href: PropTypes.string.isRequired,
    marginTop: PropTypes.string,
    marginLeft: PropTypes.string,
    download: PropTypes.bool
  };
