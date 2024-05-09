import react from 'react';
import styles from './Footer.module.css';
import { FaFacebookF } from 'react-icons/fa';
import { IoLogoGithub } from 'react-icons/io';
import { FaLinkedinIn } from 'react-icons/fa';

const Footer = () => {
    return (
        <div className={styles.footer}>
            <div className={styles.footerPadding}>
                <div className={styles.container}>
                    <div className={styles.Div}>
                        <h3>Open Every Day:</h3>
                        <p>Monday-Friday: 6am - 5pm </p>
                        <p>Weekends: 7am - 4pm</p>
                    </div>

                    <div className={styles.Div}>
                        <h3>Visit Us:</h3>
                        <p>1234 Divi St. #1000</p>
                        <p>San Francisco, CA 39513</p>
                    </div>

                    <div className={styles.Div}>
                        <h3>Follow Us For More:</h3>
                        <container className={styles.icons}>
                            <a href="/fb">
                                <FaFacebookF />
                            </a>
                            <a href="/github">
                                <IoLogoGithub />
                            </a>
                            <a href="/linkedin">
                                <FaLinkedinIn />
                            </a>
                        </container>
                    </div>

                    <div className={styles.Div}>
                        <button className={styles.button}>Shop Online</button>
                    </div>
                </div>
            </div>
            <footer className={styles.mainfooter}>© Bakery System 2024</footer>
        </div>
    );
};

export default Footer;
