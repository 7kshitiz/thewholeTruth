import React from 'react';
import styles from './styles/QuoteCard.module.css';

const QuoteCard = ({  img }) => {
    return (
        <div className={styles.card}>
            <img src={img} alt="user_ratings" />
        </div>
    );
};

export default QuoteCard;
