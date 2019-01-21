import React from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import AbilitiesListItem from './AbilitiesListItem';

export const Abilities = ({ abilities }) => (
  <div>
    {abilities.map(ability => (
      <AbilitiesListItem key={ability.skill} ability={ability} />
    ))}
  </div>
);

Abilities.defaultProps = {
  abilities: []
};

Abilities.propTypes = {
  abilities: PropTypes.arrayOf(PropTypes.oneOfType([
    PropTypes.string,
    PropTypes.object
  ]))
};

const mapStateToProps = state => ({
  abilities: state.data.abilities.skills
});

export default connect(mapStateToProps)(Abilities);
