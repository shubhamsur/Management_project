import React from 'react';
import './profile.css'; // Optional: for styling

function Profile() {
  // Sample user data (replace with real data from props, state, or API)
  const user = {
    name: 'John Doe',
    username: '@johndoe',
    email: 'john.doe@example.com',
    bio: 'Full-stack developer | React enthusiast | Coffee lover ☕',
    location: 'San Francisco, CA',
    website: 'https://johndoe.dev',
    joinDate: 'January 2023',
    avatar: 'https://via.placeholder.com/150', // Replace with actual image
    following: 245,
    followers: 1800,
  };

  return (
    <div className="profile-container">
      <div className="profile-header">
        <img
          src={user.avatar}
          alt={`${user.name}'s avatar`}
          className="profile-avatar"
        />
        <div className="profile-info">
          <h1 className="profile-name">{user.name}</h1>
          <p className="profile-username">{user.username}</p>
          <p className="profile-bio">{user.bio}</p>

          <div className="profile-details">
            {user.location && (
              <span className="detail-item">
                <i className="icon-location"></i> {user.location}
              </span>
            )}
            {user.website && (
              <span className="detail-item">
                <i className="icon-link"></i>{' '}
                <a href={user.website} target="_blank" rel="noopener noreferrer">
                  {user.website.replace(/^https?:\/\//, '')}
                </a>
              </span>
            )}
            <span className="detail-item">
              <i className="icon-calendar"></i> Joined {user.joinDate}
            </span>
          </div>

          <div className="profile-stats">
            <div className="stat">
              <strong>{user.following}</strong> Following
            </div>
            <div className="stat">
              <strong>{user.followers}</strong> Followers
            </div>
          </div>
        </div>
      </div>

      <div className="profile-actions">
        <button className="btn-edit">Edit Profile</button>
        <button className="btn-message">Message</button>
      </div>
    </div>
  );
}

export default Profile;