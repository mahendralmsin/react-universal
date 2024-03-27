import PropTypes from 'prop-types';
import React from 'react';

/**
 * Name:Image
 * Desc: Render image
 * @param {string} src
 * @param {string} name
 * @param {string} className
 * @param {string} alt
 */
const Image = ({ src, name, className = '', alt, ...rest }) => {
  return (

    <img
      src={src}
      name={name}
      className={className}
      alt={alt || name}
      {...rest}
    />

  );
};

Image.propTypes = {
  src: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  className: PropTypes.string,
  alt: PropTypes.string,
};

export default Image;
