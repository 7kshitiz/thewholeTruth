import React from 'react'
import styles from './styles/PromoBar.module.css';
const PromoBar = () => {
  return (
    <div className={styles.main}>
          <div className={styles.text}>15% off over ₹5000 USE Code MOLBHAV</div>
          <div className={styles.text}>Orders dispatch between 24-48 hours</div>
          <div className={styles.text}>⚡Same-Day Delivery: Bangalore, Delhi, Mumbai</div>
    </div>
  )
}

export default PromoBar