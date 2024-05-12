import React, { useState, useEffect } from 'react';
import httpClient from '../../utils/httpClient';
import styles from './ProfilePage.module.css';
import Footer from '../../components/footer/Footer';

const ProfilePage = () => {
    const [user, setUser] = useState({
        username: '',
        email: '',
        role: '',
        password: '', // Added to store password input
        oldPassword: '', // For change password
        newPassword: '', // For change password
        confirmNewPassword: '', // For change password
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
            const response = await httpClient.get('/users/me', { headers: { 'Cache-Control': 'no-cache' } });
            setUser(response.data);
            console.log(response.data);
        } catch (error) {
            console.error('Failed to fetch user data:', error);
        }
    };

    const handleUpdateUser = async () => {
        try {
            const updateResponse = await httpClient.put(`/users/${user.id}/update-me`, {
                username: user.username,
                email: user.email,
                role: user.role,
            });
            console.log('Update Response:', updateResponse);
            if (updateResponse.status === 200) {
                alert('User updated successfully!');
                fetchUserData(); // Re-fetch user data
            }
        } catch (error) {
            console.error('Failed to update user: ', error);
            alert('Failed to Update User');
        }
    };

    const handleDeleteUser = async () => {
        try {
            await httpClient.delete(`/users/${user.id}`);
            alert('User deleted successfully!');
        } catch (error) {
            console.error('Failed to delete user:', error);
            alert('Failed to delete user!');
        }
    };

    const handlePasswordChange = async () => {
        if (user.newPassword !== user.confirmNewPassword) {
            alert('New passwords do not match!');
            return;
        }
        try {
            await httpClient.post(`/users/${user.id}/change-password`, {
                oldPassword: user.oldPassword,
                newPassword: user.newPassword,
            });
            alert('Password changed successfully!');
        } catch (error) {
            console.error('Password change failed:', error);
            alert('Password change failed!');
        }
    };

    const handleChange = (e) => {
        setUser({
            ...user,
            [e.target.name]: e.target.value,
        });
    };

    const handleValidatePassword = async () => {
        try {
            await httpClient.post(`/users/${user.id}/validate-password`, {
                password: user.password,
            });
            alert('Password is correct!');
        } catch (error) {
            console.error('Password is incorrect:', error);
            alert('Password is incorrect!');
        }
    };

    return (
        <>
            <div className={styles.container}>
                <h1 className={styles.h1}>Profile Info</h1>
                <form className={styles.profile_form}>
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
                                value={user.password}
                                onChange={handleChange}
                            />

                            <button type="button" className={styles.validate_button} onClick={handleValidatePassword}>
                                Validate Password
                            </button>
                        </div>
                    </div>

                    <div className={styles.buttons}>
                        <button type="button" onClick={handleUpdateUser} className={styles.update_button}>
                            Update Profile
                        </button>

                        <button type="button" onClick={handleDeleteUser} className={styles.delete_button}>
                            Delete User
                        </button>
                    </div>
                    <div className={styles.dropdown}>
                        <button type="button" onClick={toggleDropdown} className={styles.dropdown_button}>
                            {isOpen ? '▼' : '►'} Change Password
                        </button>

                        {isOpen && (
                            <div className={styles.dropdownContent}>
                                <input type="password" placeholder="Old Password" className={styles.input} />
                                <input type="password" placeholder="New Password" className={styles.input} />
                                <input type="password" placeholder="Confirm New Password" className={styles.input} />
                                <button type="button" onClick={handlePasswordChange} className={styles.button}>
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
