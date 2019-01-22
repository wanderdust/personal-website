import React from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import uuid from 'uuid';
import AbilitiesListItem from './AbilitiesListItem';

export const Abilities = ({ skills, languages, tools }) => {
  // Renders the columns
  const renderCols = (cols, renderFn) => cols.map(
    col => (
      <div key={uuid()} className="flex-col abilities__col">
        {renderFn(col)}
      </div>
    )
  );
  // Renders the elements inside each column
  const listItems = iterable => iterable.map(ability => (
    <AbilitiesListItem key={uuid()} ability={ability} />
  ));

  return (
    <div className="abilities">

      <div className="sub-section">
        <h3 className="sub-section__title">Skills</h3>
        <div className="abilities__skills">
          {renderCols(skills, listItems)}
        </div>
      </div>

      <hr className="separator" />

      <div className="sub-section">
        <h3 className="sub-section__title">Languages</h3>
        <div className="abilities__skills">
          {renderCols(languages, listItems)}
        </div>
      </div>

      <hr className="separator" />

      <div className="sub-section">
        <h3 className="sub-section__title">Tools</h3>
        <div className="abilities__skills">
          {renderCols(tools, listItems)}
        </div>
      </div>
    </div>
  );
};

Abilities.defaultProps = {
  skills: [],
  languages: [],
  tools: []
};

Abilities.propTypes = {
  skills: PropTypes.arrayOf(PropTypes.array),
  languages: PropTypes.arrayOf(PropTypes.array),
  tools: PropTypes.arrayOf(PropTypes.array)
};

const mapStateToProps = (state) => {
  // Split the abilities into two arrays so we can
  // display it into two columns.
  const splitAbilites = (iterable) => {
    const splitIndex = Math.ceil(iterable.length / 2);
    const colOne = iterable.slice(0, splitIndex);
    const colTwo = iterable.slice(splitIndex);

    return [colOne, colTwo];
  };
  const skills = splitAbilites(state.data.abilities.skills);
  const languages = splitAbilites(state.data.abilities.languages);
  const tools = splitAbilites(state.data.abilities.tools);

  return {
    skills,
    languages,
    tools
  };
};

export default connect(mapStateToProps)(Abilities);
