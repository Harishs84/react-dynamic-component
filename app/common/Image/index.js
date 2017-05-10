
import React, { Component, PropTypes } from 'react';
import classnames from 'classnames';

const Image = (props) =>  { // eslint-disable-line
  const { src, className, alt } = props;
  
  return (    
      <img {...this.props} src={src} className={classnames("img", className)} alt={alt} />
  );
}

Image.defaultProps = {
  className: '',
  src: 'data:image/gif;base64,R0lGODlhAQABAIAAAAAAAP///yH5BAEAAAAALAAAAAABAAEAAAIBRAA7',
};

Image.propTypes = {
  src: PropTypes.oneOfType([PropTypes.string, PropTypes.object]).isRequired,
  className: PropTypes.string,
  alt: PropTypes.string.isRequired,
};

export default Image;
