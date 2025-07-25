import React from 'react'
import styles from './styles/CardBanner.module.css'
import { Link } from 'react-router-dom'
const CardBanner = () => {
 
    return (
    <Link to={"/newLaunch"} >
            <div  className={styles.cardBanner}>
                <div className={styles.mainImg}>
                    <div className={styles.newLaunch}>
                        <img src="https://dms.mydukaan.io/original/webp/media/267a08f4-a39a-403c-a25a-70951c7f227f.png" alt="newLaunchsticker" />
                    </div>
                    <img src="https://dukaan.b-cdn.net/1440x1440/webp/media/2a343180-9d2b-410b-a9ac-bd3d62cb25c1.jpg" alt="newLaunchbanner" />
                </div>
            </div>
    </Link>
  )
}

export default CardBanner