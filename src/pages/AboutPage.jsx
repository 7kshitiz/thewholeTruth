import React from "react";
import styles from "./styles/AboutPage.module.css";
import before from '../assets/img/before.jpeg';
import after from '../assets/img/after.jpg';
const AboutPage = () => {
    return (
        <div className={styles.container}>
            <section className={styles.section}>
                <h1>Why We Exist</h1>
                <div className={styles.videoSection}>
                    <iframe
                        width="560"
                        height="315"
                        src="https://www.youtube.com/embed/cT-rTkvhLNo"
                        frameborder="0"
                        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                        allowfullscreen>
                    </iframe>
                </div>
                <p>
                    Ever wondered why most brands hide their ingredient list, in microscopic font, at the back?
                </p>
                <p>
                    As an obese kid trying to eat healthy, I used to ask these questions every day. I never got an answer, so I did my own research.
                </p>
                <p><strong>Brands hide what goes into their food, because they have something to hide.</strong></p>
                <p>
                    They’d rather have you drool over fake pictures of molten chocolate than discover your food contains artificial sugars and preservatives.
                </p>
                <p>
                    In the name of ‘healthy,’ we’re being sold lies. So I, and a few like-minded (and betrayed) folks, started <strong>The Whole Truth</strong>.
                </p>
                <p>
                    Our purpose is simple: we make food so clean, we can declare every single ingredient up front.
                </p>
                <p className={styles.signature}>
                    <em>Shashank</em><br />
                    Founder. CEO. Obese kid. Fit adult. Hell bent on setting packaged food right.
                </p>
            </section>

            <section className={styles.section}>
                <h2>Who is this guy?</h2>
                <div className={styles.imgWrapper}>
                    <img src={before} alt="Before" />
                    <img src={after} alt="After" />
                </div>
                <p>
                    Kshitiz started his fitness journey at over 50kgs, 2 months ago. He taught himself fitness, gain 5kg weight, become fitness influencer, and helped many people.
                </p>
                <p>
                    After years of research and self-experimentation, he believes there’s one universal food truth: <strong><em>good food is made of good ingredients</em></strong>.
                </p>
                <p>
                    You can access all his learnings at <a href="https://fitshit.in" target="_blank" rel="noreferrer">FITSHIT.in</a>, his free fitness blog.
                </p>
                <p className={styles.disclaimer}>
                    <em>Disclaimer – views on the blog are personal. So is the crusade.</em><br />
                    PS: It is very strange to write about yourself in third person.
                </p>
            </section>
        </div>
    );
};

export default AboutPage;
