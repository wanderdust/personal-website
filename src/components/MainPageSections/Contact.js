import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';

export const Contact = ({ email }) => (
  <div className="contact__content">
    <h3>{email}</h3>
  </div>
);

Contact.propTypes = {
  email: PropTypes.string.isRequired
};

const mapStateToProps = state => ({
  email: state.data.profile.email
});

export default connect(mapStateToProps)(Contact);
