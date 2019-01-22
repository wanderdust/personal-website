import React from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';

export const Profile = ({ profile }) => (
  <div className="profile">
    <div className="profile__about flex-col">
      <h3>About me</h3>
      <p>{profile.aboutMe}</p>
    </div>
    <div className="profile__photo flex-col">
      <img src={profile.myPhoto} alt="profile" />
    </div>
    <div className="profile__details flex-col">
      <h3>Details</h3>
      <p>
        <span className="profile__details__header">Name:</span>
        {` ${profile.name}`}
      </p>
      <p>
        <span className="profile__details__header">Location:</span>
        {` ${profile.location}`}
      </p>
      <p>
        <span className="profile__details__header">Age:</span>
        {` ${profile.age}`}
      </p>
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
