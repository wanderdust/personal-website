import React from 'react';
import PropTypes from 'prop-types';
import uuid from 'uuid';

export const ProjectListItem = ({ project }) => (
  <div className="project">
    <figure className="figure">
      <a className="project__link" href={project.url} target="_blank">_</a>
      <img src={project.img} alt={project.title} />
      <figcaption className="figcaption">
        <h3 className="figcaption__title">{project.title}</h3>
        <p className="figcaption__description">{project.description}</p>
        <p className="figcaption__tags">
          <img src="/images/icon-label.svg" alt="tags" />
          {project.tags.map(tag => <span key={uuid()}>{tag}</span>)}
        </p>
      </figcaption>
    </figure>
  </div>
);

ProjectListItem.propTypes = {
  project: PropTypes.object.isRequired
};

export default ProjectListItem;
