import React from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import ProjectsListItem from './ProjectsListItem';

export const Projects = ({ projects }) => (
  <div>
    {projects.map(project => (
      <ProjectsListItem key={project.title} project={project} />
    ))}
  </div>
);

Projects.defaultProps = {
  projects: []
};

Projects.propTypes = {
  projects: PropTypes.arrayOf(PropTypes.oneOfType([
    PropTypes.string,
    PropTypes.object
  ]))
};

const mapStateToProps = state => ({
  projects: state.data.projects.projects
});

export default connect(mapStateToProps)(Projects);
