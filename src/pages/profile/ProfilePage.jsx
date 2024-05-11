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

      const userData = [
        { label: 'Option 1', value: 'Old password' },
        { label: 'Option 2', value: 'New password' },
        { label: 'Option 3', value: 'Confirm new password' },
        { input: 'option 4', value:'change'}
      ];
    

    // const validatePassword = async () => {
    //   try {
    //     const response = await httpClient.post('users/{id}/validate-password', {
    //       password: user.password
    //     });

    //     if (response.data.success) {
    //       alert('Password is valid!');
    //     } else {
    //       alert('Password is invalid!');
    //     }
    //   } catch (error) {
    //     console.error('Password validation failed:', error);
    //     alert('Password validation failed!');
    //   }
    // };

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
            [e.target.name]: e.target.value,
        });
    };

    return (
        <>
            <div className={styles.container}>
                <h2 className={styles.h2}>Profile Info</h2>
                <form onSubmit={handleSubmit} className={styles.profile_form}>
                    <div className={styles.profile}>
                        <label className={styles.label}>Username : </label>
                        <input
                            className={styles.input1}
                            type="text"
                            name="username"
                            value={user.username}
                            onChange={handleChange}
                        />
                    </div>
                    <div className={styles.profile}>
                        <label className={styles.label}>Email : </label>
                        <input
                            className={styles.input2}
                            type="email"
                            name="email"
                            value={user.email}
                            onChange={handleChange}
                        />
                    </div>
                    <div className={styles.profile}>
                        <label className={styles.label}>Role : </label>
                        <input
                            className={styles.input3}
                            type="text"
                            name="role"
                            value={user.role}
                            onChange={handleChange}
                        />

                    <div className={styles.profile}>
                        <label className={styles.label}>Password : </label>
                        <input
                            className={styles.input4}
                            type="text"
                            name="password"
                            value={user.Password}
                            placeholder="Enter Password"
                            onChange={handleChange}
                        />
                            <button type="submit" className={styles.Password_button}>
                                Validate Password
                            </button>
                        </div>
                    </div>

                    <div className={styles.Buttons_container}>
                      <div className={styles.B_container}>
                    <button type="submit" className={styles.Edit_button}>
                        Update Profile
                    </button>
                    <button type="submit" className={styles.delete_button}>
                        Delete User
                    </button>

                     </div>

            <div className={styles.dropdown_container}>
      <button onClick={toggleDropdown} className={styles.dropdown_button}> Change Password </button>
      {isOpen && (
        <div className={styles.dropdown_content}>
          <input type="text" placeholder="Old Password" className={styles.textbox} />
          <input type="text" placeholder="New Password" className={styles.textbox} />
          <input type="text" placeholder="Confirm New Password" className={styles.textbox} />
          <button className={styles.drop_button}>Confirm Change</button>
        </div>
      )}
    </div>
                    </div>
                   
                </form>
            </div>
        </>
    );
};

export default ProfilePage;
