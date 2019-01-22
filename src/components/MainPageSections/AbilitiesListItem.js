import React from 'react';
import PropTypes from 'prop-types';
import Star from './Stars';

export const AbilitiesListItem = ({ ability }) => (
  <div className="ability-item">
    <p className="ability-item__title">{ability.skill}</p>
    <Star level={ability.level} />
  </div>
);

AbilitiesListItem.propTypes = {
  ability: PropTypes.object.isRequired
};

export default AbilitiesListItem;
