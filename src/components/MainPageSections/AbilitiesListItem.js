import React from 'react';
import PropTypes from 'prop-types';


export const AbilitiesListItem = ({ ability }) => (
  <div>
    <h4>{ability.skill}</h4>
    <p>{ability.level}</p>
  </div>
);

AbilitiesListItem.propTypes = {
  ability: PropTypes.object.isRequired
};

export default AbilitiesListItem;
