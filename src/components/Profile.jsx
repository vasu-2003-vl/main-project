import React, { useState, useEffect } from "react";
import "./Profile.css";

const Profile = ({ profileData, onSaveProfile, goBack }) => {
  const [localProfile, setLocalProfile] = useState(profileData);
  const [isEditing, setIsEditing] = useState(true);

  useEffect(() => {
    setLocalProfile(profileData);
  }, [profileData]);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setLocalProfile((prev) => ({ ...prev, [name]: value }));
  };

  const handlePhotoChange = (e) => {
    const file = e.target.files[0];
    if (file) {
      const reader = new FileReader();
      reader.onloadend = () => {
        setLocalProfile((prev) => ({ ...prev, photo: reader.result }));
      };
      reader.readAsDataURL(file);
    }
  };

  const handleSave = () => {
    onSaveProfile(localProfile);
    setIsEditing(false);
  };

  const handleEdit = () => {
    setIsEditing(true);
  };

  return (
    <div className="profile-page">
      <button className="profile-back-btn" onClick={goBack}>
        ← Back
      </button>

      <div className="profile-content">
        <div className="profile-box">
          <h2>Profile</h2>

          <img
            src={localProfile.photo || "https://via.placeholder.com/150?text=Avatar"}
            alt="Avatar"
          />
          {isEditing && (
            <input type="file" accept="image/*" onChange={handlePhotoChange} />
          )}

          <input
            type="text"
            name="firstName"
            value={localProfile.firstName}
            onChange={handleChange}
            placeholder="First Name"
            disabled={!isEditing}
          />
          <input
            type="text"
            name="lastName"
            value={localProfile.lastName}
            onChange={handleChange}
            placeholder="Last Name"
            disabled={!isEditing}
          />
          <input
            type="text"
            name="phone"
            value={localProfile.phone}
            onChange={handleChange}
            placeholder="Phone"
            disabled={!isEditing}
          />
          <input
            type="email"
            name="email"
            value={localProfile.email}
            onChange={handleChange}
            placeholder="Email"
            disabled={!isEditing}
          />
          <select
            name="gender"
            value={localProfile.gender}
            onChange={handleChange}
            disabled={!isEditing}
          >
            <option value="">Select Gender</option>
            <option value="Male">Male</option>
            <option value="Female">Female</option>
            <option value="Other">Other</option>
          </select>
          <textarea
            name="about"
            value={localProfile.about}
            onChange={handleChange}
            placeholder="About Yourself"
            disabled={!isEditing}
          />

          {isEditing ? (
            <button className="save-btn" onClick={handleSave}>
              Save
            </button>
          ) : (
            <button className="edit-btn" onClick={handleEdit}>
              Edit
            </button>
          )}
        </div>
      </div>
    </div>
  );
};

export default Profile;
