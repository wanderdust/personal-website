import React from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import ExperienceListItem from './ExperienceListItem';

export const Experience = ({ jobs, studies, volunteering }) => {
  const listItems = iterable => iterable.map(element => (
    <ExperienceListItem key={element.title} element={element} />
  ));

  return (
    <div>
      <div className="sub-section">
        <h3 className="sub-section__title">Education</h3>
        <div>
          {listItems(studies)}
        </div>
      </div>

      <hr className="separator" />

      <div className="sub-section">
        <h3 className="sub-section__title">Work Experience</h3>
        <div>
          {listItems(jobs)}
        </div>
      </div>

      <hr className="separator" />

      <div className="sub-section">
        <h3 className="sub-section__title">Volunteering</h3>
        <div>
          {listItems(volunteering)}
        </div>
      </div>
    </div>
  );
};

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
  jobs: state.data.experience.jobs.list,
  volunteering: state.data.experience.volunteering.list
});

export default connect(mapStateToProps)(Experience);
