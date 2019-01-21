import React from 'react';
import PropTypes from 'prop-types';

export const ProjectListItem = ({ project }) => (
  <div>
    <h4>{project.title}</h4>
  </div>
);

ProjectListItem.propTypes = {
  project: PropTypes.object.isRequired
};

export default ProjectListItem;
