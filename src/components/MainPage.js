import React from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import Section from './Section';
import Profile from './MainPageSections/Profile';
import Experience from './MainPageSections/Experience';
import Abilities from './MainPageSections/Abilities';
import Projects from './MainPageSections/Projects';

export const MainPage = ({
  profile, experience, abilities, projects
}) => (
  <div className="content-wrapper">
    <div id="profile" className="section section--light-grey">
      <Section
        sectionTitle={profile.title}
        sectionSubTitle={profile.profession}
        component={Profile}
      />
    </div>

    <div id="experience" className="section section--basic">
      <Section
        sectionTitle={experience.title}
        sectionSubTitle={experience.subtitle}
        component={Experience}
      />
    </div>

    <div id="abilities" className="section section--light-grey">
      <Section
        sectionTitle={abilities.title}
        sectionSubTitle={abilities.subtitle}
        component={Abilities}
      />
    </div>

    <div id="projects" className="section section--basic">
      <Section
        sectionTitle={projects.title}
        sectionSubTitle={projects.subtitle}
        component={Projects}
      />
    </div>
  </div>
);

MainPage.propTypes = {
  profile: PropTypes.object.isRequired,
  experience: PropTypes.object.isRequired,
  abilities: PropTypes.object.isRequired,
  projects: PropTypes.object.isRequired
};

const mapStateToProps = state => ({
  profile: state.data.profile,
  experience: state.data.experience,
  abilities: state.data.abilities,
  projects: state.data.projects
});

export default connect(mapStateToProps)(MainPage);
