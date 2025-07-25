import React, { useState, useEffect } from "react";
import RealfoodSection from "../components/RealfoodSection";
import { motion } from "framer-motion";
import styles from "./styles/Home.module.css";
import p1 from '../assets/img/p1.png';
import p2 from '../assets/img/p2.webp';
import p3 from '../assets/img/p3.webp';
import p4 from '../assets/img/p4.png';
import p5 from '../assets/img/p5.png';
import p6 from '../assets/img/p6.png';
import p7 from '../assets/img/p7.png';
import RealFoodProofSection from "../components/AuthenticitySection";
import FoodJournalismSection from "../components/FoodJournalismSection";
import CardBanner from "../components/CardBanner";
import Realpeople from "../components/Realpeople";
import RealLove from "../components/RealLove";

/* import img from '' */
const headline = `We're re-building the world's trust in food.`;
const subheadline = `We’re India’s first 100% clean-label food brand.`;
const images = [
  p1,p2,p3,p4,p5,p6,p7
];

export const Home = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  // Change image every second
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % images.length);
    }, 2000);

    return () => clearInterval(interval);
  }, []);

  const headlineWords = headline.split(" ");

  return (
   <div className={styles.main}>
   <div className={styles.hero}>
      <div className={styles.textContainer}>
        <motion.h1 className={styles.heading}>
          {headlineWords.map((word, index) => (
            <motion.span
              key={index}
              className={styles.word}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.3 }}
            >
              {word}&nbsp;
            </motion.span>
          ))}
        </motion.h1>

        <motion.p
          className={styles.subheading}
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: headlineWords.length * 0.3 }}
        >
          {subheadline}
        </motion.p>

        <motion.button
          className={styles.button}
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: headlineWords.length * 0.3 + 0.3 }}
        >
          Short story looong of why we exist →
        </motion.button>
      </div>

      <div className={styles.imageContainer}>
        <motion.img
          key={currentIndex}
          src={images[currentIndex]}
          alt="Product"
          className={styles.productImage}
          initial={{ y: 0, opacity: 1 }}
          animate={{
            y: [0, -20, 0],
          }}
          transition={{
            duration: 2,
            repeat: Infinity,
            repeatType: "loop",
            ease: "easeInOut"
          }}
        />
      </div>
    </div>
    <RealfoodSection/>
    <RealFoodProofSection/>
    <FoodJournalismSection/>
    <CardBanner/>
    <Realpeople/>
    <RealLove/>
    </div>
  );
};
