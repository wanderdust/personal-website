import React from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import ExperienceListItem from './ExperienceListItem';

export const Experience = ({ jobs, studies }) => (
  <div>
    <h3>Education</h3>
    <div>
      {studies.map(element => (
        <ExperienceListItem key={element.title} element={element} />
      ))}
    </div>

    <h3>Work Experience</h3>
    <div>
      {jobs.map(element => (
        <ExperienceListItem key={element.title} element={element} />
      ))}
    </div>
  </div>
);

Experience.defaultProps = {
  jobs: [],
  studies: []
};

Experience.propTypes = {
  jobs: PropTypes.arrayOf(PropTypes.oneOfType([
    PropTypes.string,
    PropTypes.object
  ])),
  studies: PropTypes.arrayOf(PropTypes.oneOfType([
    PropTypes.string,
    PropTypes.object
  ]))
};

const mapStateToProps = state => ({
  experiences: state.data.experience,
  studies: state.data.experience.studies.list,
  jobs: state.data.experience.jobs.list
});

export default connect(mapStateToProps)(Experience);
