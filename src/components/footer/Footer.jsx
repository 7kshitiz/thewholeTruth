import React from 'react';
import styles from './Footer.module.css';

const Footer = () => {
    return (
        <footer className={styles.footer}>
            <div className={styles.topBanner}>
                <span>15% off over ₹5000. Use code <strong>CLEANLABEL</strong></span>
            </div>

            <div className={styles.container}>
                <div className={styles.logoSection}>
                    <img src="https://thewholetruthfoods.com/static/images/thankyou-learn.gif" alt="TBT Logo" className={styles.logo} />
                    <p>One, BS free, in-depth article about food & fitness. Delivered every Saturday. Free (for now).</p>
                    <div className={styles.newsletter}>
                        <input type="email" placeholder="your-email@mail.com" />
                        <button>Count Me In</button>
                    </div>
                </div>

                <div className={styles.linksSection}>
                    <div>
                        <h4>Shop</h4>
                        <ul>
                            <li>24g Protein Powder</li>
                            <li>15g Protein Powder</li>
                            <li>Energy Bars</li>
                            <li>Protein Bars</li>
                            <li>Mini Protein Bars</li>
                            <li>Muesli</li>
                            <li>Nut Butters</li>
                            <li>Dark Chocolate</li>
                            <li>Corporate Gifting</li>
                        </ul>
                    </div>
                    <div>
                        <h4>Help & About</h4>
                        <ul>
                            <li>Contact Us</li>
                            <li>Terms of Service</li>
                            <li>My Account</li>
                            <li>Our Policies</li>
                            <li>Refer & Earn</li>
                            <li>Why We Exist</li>
                            <li>Careers</li>
                            <li>Protein Test Reports</li>
                            <li>International Orders</li>
                        </ul>
                    </div>
                </div>
            </div>

            <div className={styles.bottom}>
                <div className={styles.socials}>
                    <p>Follow us</p>
                    <div>
                        <i className="fab fa-facebook-f"></i>
                        <i className="fab fa-instagram"></i>
                        <i className="fab fa-twitter"></i>
                        <i className="fab fa-youtube"></i>
                    </div>
                </div>
                <p>© 2025, Fitshit Health Solutions. All rights reserved.</p>
            </div>
        </footer>
    );
};

export default Footer;
