import React from "react";
import { Link } from "react-router-dom";
import styles from "./styles/Card1.module.css";

const Card = ({ name, subtitle, image, bg, link }) => {
    return (
        <Link to={link} className={styles.card}>
            <div className={styles.cardImage}>
                <img src={image} alt={name} />
            </div>
            <div className={styles.cardFooter} style={{ backgroundColor: bg }}>
                <div className={styles.text}>
                    <h3>{name}</h3>
                    <p>{subtitle}</p>
                </div>
                <i class="ri-arrow-right-circle-line"></i>
            </div>
        </Link>
    );
};

export default Card;
