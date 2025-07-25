import React from "react";
import styles from "./styles/Authenticity.module.css";
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/navigation';
import { Navigation } from 'swiper/modules';

const proofItems = [
    {
        video: "https://whatmore-brand-thumbnail-video-assets.b-cdn.net/thewholetruthstaging_STRSJFOP1GI/tn_a0f73749-8ef5-407e-b42e-2d5c92050c9e.mp4",
        caption: "dates as both the binder as well as the sweetener."
    },
    {
        video: "https://whatmore-brand-thumbnail-video-assets.b-cdn.net/thewholetruthstaging_STRSJFOP1GI/tn_a3f8dcef-04f0-401d-9c12-50f12c701859.mp4",
        caption: "has problems."
    },
    {
        video: "https://whatmore-brand-thumbnail-video-assets.b-cdn.net/thewholetruthstaging_STRSJFOP1GI/tn_ccf4d148-02d6-4aab-aaab-d418c94073cc.mp4",
        caption: ""
    },
    {
        video: "https://whatmore-brand-thumbnail-video-assets.b-cdn.net/thewholetruthstaging_STRSJFOP1GI/tn_c8a81c31-f584-4c54-9ed9-a18f81a02e1a.mp4",
        caption: "Fad hai!"
    }
];

const RealFoodProofSection = () => {
    return (
        <section className={styles.section}>
            <div className={styles.textContent}>
                <h2>
                    Real food is <span className={styles.highlight}>flawed.</span>
                </h2>
                <p>
                    Our food doesn’t always look perfect.{" "}
                    <em>(But it tastes great!)</em>
                    <br />
                    Proof that we didn’t tamper with nature.
                </p>
            </div>

            <div className={styles.proofItems}>
                <Swiper
                    modules={[Navigation]}
                    navigation
                    spaceBetween={13}
                    slidesPerView={3} // default for large screens
                    breakpoints={{
                        1024: {
                            slidesPerView: 3,
                            spaceBetween: 13,
                        },
                        768: {
                            slidesPerView: 2,
                            spaceBetween: 10,
                        },
                        0: { // for mobile screens <768px
                            slidesPerView: 1,
                            spaceBetween: 8,
                        },
                    }}
                    className="custom-swiper"
                >
                    {proofItems.map((product) => (
                        <SwiperSlide key={product.title}>
                            <video
                                src={product.video}
                                controls={false}
                                autoPlay
                                muted
                                loop
                                playsInline
                                className={styles.video}
                            />
                        </SwiperSlide>
                    ))}
                </Swiper>
            </div>
        </section>
    );
};

export default RealFoodProofSection;
