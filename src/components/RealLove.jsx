import React from 'react'
import styles from "./styles/RealLove.module.css"
import QuoteCardsSlider from './QuoteCardsSlider'
const RealLove = () => {
  return (
    <div className={styles.main}>
         <div className={styles.upper}>
              <div className={styles.textBlock}>
                  <h1>Real People
                    Real Love
                  </h1>
                  <p>
                      We’re blessed! Because we have you 
                  </p>
              </div>
         </div>
          <div className={styles.lower}>
              <QuoteCardsSlider/>
          </div>
    </div>
  )
}

export default RealLove