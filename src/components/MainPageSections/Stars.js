import React from 'react';
import PropTypes from 'prop-types';
import uuid from 'uuid';

export const Stars = ({ level }) => {
  const ratingArray = () => {
    const starArray = [];
    const emtyStars = 5 - level;

    // Fill in the full stars first
    for (let i = 0; i < level; i += 1) {
      starArray.push('x');
    }
    // Fill in the empty stars now
    for (let i = 0; i < emtyStars; i += 1) {
      starArray.push(undefined);
    }

    return starArray;
  };

  return (
    <span>
      {ratingArray().map((star) => {
        const starSrc = star ? 'icon-star-filled.svg' : 'icon-star-empty.svg';
        return (<img key={uuid()} src={`images/${starSrc}`} alt="star" />);
      })}
    </span>
  );
};

Stars.propTypes = {
  level: PropTypes.number.isRequired
};

export default Stars;
