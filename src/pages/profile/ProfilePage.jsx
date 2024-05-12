import React, { useState, useEffect } from 'react';
import httpClient from '../../utils/httpClient';
import styles from './ProfilePage.module.css';

const ProfilePage = () => {
    const [user, setUser] = useState({
        username: '',
        email: '',
        role: '',
    });
    const [isOpen, setIsOpen] = useState(false);

    const toggleDropdown = () => {
        setIsOpen(!isOpen);
    };

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
        // try {
        //     const response = await httpClient.put('users/{id}/update-me', {
        //         username: user.username,
        //         email: user.email,
        //         role: user.role,
        //     });
        //     alert('Profile updated successfully!');
        // } catch (error) {
        //     console.error('Profile update failed:', error);
        //     alert('Profile update failed!');
        // }
    };

    const handleChange = (e) => {
        setUser({
            ...user,
            [e.target.name]: e.target.value,
        });
    };

    return (
        <>
            <div className={styles.container}>
                <h1 className={styles.h1}>Profile Info</h1>
                <form onSubmit={handleSubmit} className={styles.profile_form}>
                    <div className={styles.profile}>
                        <label className={styles.label}>Username:</label>
                        <input
                            className={styles.input}
                            type="text"
                            name="username"
                            value={user.username}
                            onChange={handleChange}
                        />
                    </div>
                    <div className={styles.profile}>
                        <label className={styles.label}>Email:</label>
                        <input
                            className={styles.input}
                            type="email"
                            name="email"
                            value={user.email}
                            onChange={handleChange}
                        />
                    </div>
                    <div className={styles.profile}>
                        <label className={styles.label}>Role:</label>
                        <input
                            className={styles.input}
                            type="text"
                            name="role"
                            value={user.role}
                            onChange={handleChange}
                        />
                    </div>

                    <div className={styles.profile}>
                        <label className={styles.label}>Password:</label>
                        <div className={styles.inputButtonGroup}>
                            <input
                                className={styles.input}
                                type="password"
                                name="password"
                                placeholder="Enter Password"
                                onChange={handleChange}
                            />
                            <button type="button" className={styles.validate_button}>
                                Validate Password
                            </button>
                        </div>
                    </div>

                    <div className={styles.buttons}>
                        <button type="submit" className={styles.update_button}>
                            Update Profile
                        </button>
                        <button type="button" className={styles.delete_button}>
                            Delete User
                        </button>
                    </div>
                    <div className={styles.dropdown}>
                        <button onClick={toggleDropdown} className={styles.dropdown_button}>
                            {isOpen ? '▼' : '►'} Change Password
                        </button>
                        {isOpen && (
                            <div className={styles.dropdownContent}>
                                <input type="password" placeholder="Old Password" className={styles.input} />
                                <input type="password" placeholder="New Password" className={styles.input} />
                                <input type="password" placeholder="Confirm New Password" className={styles.input} />
                                <button type="button" className={styles.button}>
                                    Confirm Change
                                </button>
                            </div>
                        )}
                    </div>
                </form>
            </div>
        </>
    );
};

export default ProfilePage;
