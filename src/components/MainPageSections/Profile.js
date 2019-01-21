import React from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';

export const Profile = ({ profile }) => (
  <div>
    <p>{profile.aboutMe}</p>
    <img src={profile.image} alt="profile" />
    <div>
      <p>{profile.name}</p>
      <p>{profile.location}</p>
      <p>{profile.age}</p>
    </div>
  </div>
);

Profile.propTypes = {
  profile: PropTypes.object.isRequired
};

const mapStateToProps = state => ({
  profile: state.data.profile
});

export default connect(mapStateToProps)(Profile);
