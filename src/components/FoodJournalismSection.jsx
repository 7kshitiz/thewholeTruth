import React from "react";
import styles from "./styles/FoodJournalismSection.module.css";
import Card1 from "./Card1";
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/navigation';
import { Navigation } from 'swiper/modules';
import barry from '../assets/img/barry.jpeg'
const products = [
    {
        image: "https://dms.mydukaan.io/original/webp/media/6ff8db34-209b-4616-8521-4b1bbb15bfe2.png",
        title: "Truth To Be Told",
        subtitle: "India's top health newsletter. Read by 50,000+.",
        bgColor: "#ffffffff",
        to: "/categories/plant-protein"
    },
    {
        image: "https://dms.mydukaan.io/original/webp/media/3ba7171e-36bc-4045-947b-b23be16f1ad5.png",
        title: "The Whole Truth Academy",
        subtitle: "The food & nutrition course we should've been taught in school.",
        bgColor: "#ffffffff",
        to: "/categories/protein-powder"
    },
    {
        image: "https://dms.mydukaan.io/original/webp/media/f5825848-c85e-4bcb-a6a3-7e2b3f751a9d.png",
        title: "ChemX",
        subtitle: "Found an ingredient you can't pronounce? Allow us to help.",
        bgColor: "#ffffffff",
        to: "/categories/protein-bars"
    },

];

const FoodJournalismSection = () => {
    return (
        <section className={styles.section}>
            <div className={styles.upper}>
                <div className={styles.left}>
                    <h2 className={styles.heading}>
                        We’re also fixing <span>food journalism.</span>
                    </h2>
                    <p className={styles.description}>
                        We can’t fix food without fixing food journalism. Because what you read and
                        believe is what you eat and repeat. We’re on it.
                    </p>
                </div>
                <div className={styles.right}>
                        <img src={barry} alt="barry" />
                </div>

            </div>
            <div className={styles.journal_card_wrapper}>
                <Swiper
                    modules={[Navigation]}
                    navigation
                    spaceBetween={1}
                    slidesPerView={1} // default for large screens
                    breakpoints={{
                        1024: {
                            slidesPerView: 3,
                            spaceBetween: 1,
                        },
                        768: {
                            slidesPerView: 2,
                            spaceBetween: 1,
                        },
                        0: { // for mobile screens <768px
                            slidesPerView: 1,
                            spaceBetween: 1,
                        },
                    }}
                    className="custom-swiper"
                >
                    {products.map((product) => (
                        <SwiperSlide key={product.title}>
                            <Card1
                                key={product.title}
                                image={product.image}
                                name={product.title}
                                subtitle={product.subtitle}
                                bg={product.bgColor}
                                link={product.to}
                            />
                        </SwiperSlide>
                    ))}
                </Swiper>
            </div>
        </section>
    );
};

export default FoodJournalismSection;
