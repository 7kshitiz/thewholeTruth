import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import styles from "./styles/LoginPage.module.css";

const LoginPage = () => {
    const [phone, setPhone] = useState("");
    const navigate = useNavigate();

    const handleSubmit = (e) => {
        e.preventDefault();
        if (phone.length >= 10) {
            navigate("/verify-otp");
        } else {
            alert("Please enter a valid phone number.");
        }
    };

    return (
        <div className={styles.loginContainer}>
            <div className={styles.loginBox}>
                <h2 className={styles.heading}>Sign in</h2>
                <form onSubmit={handleSubmit}>
                    <div className={styles.inputGroup}>
                        <span className={styles.countryCode}>+91</span>
                        <input
                            type="tel"
                            className={styles.input}
                            placeholder="Enter your phone number"
                            value={phone}
                            onChange={(e) => setPhone(e.target.value)}
                        />
                    </div>
                    <p className={styles.terms}>
                        By continuing, you agree to our company’s{" "}
                        <a href="/terms" className={styles.termsLink}>Terms and Conditions</a> and{" "}
                        <a href="/privacy" className={styles.termsLink}>Privacy Policy</a>.
                    </p>
                    <button type="submit" className={styles.button}>Send OTP</button>
                </form>
            </div>
        </div>
    );
};

export default LoginPage;
