import React from 'react';
import styles from './styles/TopBar.module.css';
const TopBar = () => {
    return (
        <div className={styles.container}>
            <div className={styles.left}>
                <div className={styles.text}>
                    <i className="ri-shopping-bag-3-line"></i>
                    Shop
                </div>
            </div>
           
            <div className={styles.right}>
                <div className={styles.text}>
                    <i className="ri-book-open-line"></i>
                    Learn
                </div>
            </div>
        </div>
    )
}

export default TopBar;