import React from 'react';
import PropTypes from 'prop-types';

export const ExperienceListItem = ({ element }) => (
  <div className="experience">
    <div className="experience__heading flex-col">
      <h4>{element.location}</h4>
      <p>{`${element.duration.from} - ${element.duration.to}`}</p>
    </div>

    <div className="show-for-desktop experience__description flex-col flex-col--flat">
      <h4>{element.title}</h4>
      <p>{element.description}</p>
    </div>
  </div>
);

ExperienceListItem.propTypes = {
  element: PropTypes.object.isRequired
};


export default ExperienceListItem;
