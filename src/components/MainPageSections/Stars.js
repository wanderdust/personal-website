import React from 'react';
import PropTypes from 'prop-types';
import uuid from 'uuid';

export const Stars = ({ level }) => {

  return (
    <span>
      {level.map(star => (
        <span key={uuid()} role="img" aria-label="something">⭐</span>
      ))}
    </span>
  );
};

Stars.defaultProps = {
  level: []
};

Stars.propTypes = {
  level: PropTypes.arrayOf(PropTypes.string.isRequired)
};

export default Stars;