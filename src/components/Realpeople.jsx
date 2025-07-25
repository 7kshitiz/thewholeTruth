import React from 'react';
import styles from './styles/Realpeople.module.css';
import secretIng from '../assets/img/secretIng.jpeg';
const Realpeople = () => {
    return (
        <div className={styles.main}>
            <div className={styles.upper}>
                <div className={styles.left}>
                    <div className={styles.text}>
                        <h1>Real food made by real people.</h1>
                        <p>
                            Be it ingredients, process or the people who make it - we literally have #nothingtohide.
                        </p>
                        <h4>PS - Our Barkhana is an
                            ISO certified facility :)</h4>
                    </div>
                </div>
                <div className={styles.right}>
                    <img src="https://dms.mydukaan.io/original/webp/media/c8e766ab-532b-4504-b2a7-b81e0d803ae8.png" alt="foomaking" />
                </div>
            </div>
            <div className={styles.lower}>
                <img src={secretIng} alt="secretIngridients" />
            </div>
        </div>
    )
}

export default Realpeople