import React, { useState, useEffect } from 'react';
import httpClient from '../../utils/httpClient'; 
import styles from './ProfilePage.module.css';

const ProfilePage = () => {
  const [user, setUser] = useState({
    username: '',
    email: '',
    role: ''
  });

  useEffect(() => {
    fetchUserData();
  }, []);

  const fetchUserData = async () => {
    try {
      const response = await httpClient.get('users/me');
      setUser(response.data); 
    } catch (error) {
      console.error('Failed to fetch user data:', error);
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await httpClient.put('users/{id}/update-me', {
        username: user.username,
        email: user.email,
        role: user.role,
      });
      alert('Profile updated successfully!');
    } catch (error) {
      console.error('Profile update failed:', error);
      alert('Profile update failed!');
    }
  };

  const handleChange = (e) => {
    setUser({
      ...user,
      [e.target.name]: e.target.value
    });
  };

  return (
    <>
      <div className={styles.container}>
      <h2 className={styles.h2}>Profile Info</h2>
      <div className={styles.photo}> <img src="background.jpg" alt="" /> </div>
      <form onSubmit={handleSubmit} className={styles.profile_form}>
        <div className={styles.profile}>
          <label className={styles.label}>Username :    </label>
          <input className={styles.input}
            type="text"
            name="username"
            value={user.username}
            onChange={handleChange}
          />
        </div>
        <div className={styles.profile}>
          <label className={styles.label}>Email :    </label>
          <input className={styles.input}
            type="email"
            name="email"
            value={user.email}
            onChange={handleChange}
          />
        </div>
        <div className={styles.profile}>
          <label className={styles.label}>Role :    </label>
          <input className={styles.input}
            type="text"
            name="role"
            value={user.role}
            onChange={handleChange}
          />
        </div>
        <button type="submit"  className={styles.Edit_button}>Update Profile</button>
        <button type="submit"  className={styles.Edit_button}>Delete Profile</button>

      </form>
    </div>
    </>
  );
};

export default ProfilePage;
