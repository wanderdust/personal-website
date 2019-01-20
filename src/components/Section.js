import React from 'react';
import propTypes from 'prop-types';

export const Section = ({ sectionTitle, sectionSubTitle, component: Component }) => (
  <div>
    <h1 className="section__title">{sectionTitle}</h1>
    <p className="section__subtitle">
      {sectionSubTitle}
    </p>
    <div className="section__content">
      <Component />
    </div>
  </div>
);

Section.propTypes = {
  sectionTitle: propTypes.string.isRequired,
  sectionSubTitle: propTypes.string.isRequired,
  component: propTypes.func.isRequired
};

export default Section;
