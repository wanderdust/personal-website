import React from 'react';
import PropTypes from 'prop-types';

export const ExperienceListItem = ({ element }) => (
  <div>
    <div>
      <h4>{element.location}</h4>
      <p>{`${element.duration.from} - ${element.duration.to}`}</p>
    </div>

    <div>
      <h4>{element.title}</h4>
      <p>{element.description}</p>
    </div>
  </div>
);

ExperienceListItem.propTypes = {
  element: PropTypes.object.isRequired
};


export default ExperienceListItem;
