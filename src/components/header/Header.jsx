import React from 'react'
import Navbar from '../Navbar'
import TopBar from '../TopBar'
import PromoBar from '../PromoBar'
import styles from './Header.module.css';
const Header = () => {
  return (
    <div className={styles.header}>
      <TopBar />
      <Navbar />
      <PromoBar />
    </div>
  )
}

export default Header