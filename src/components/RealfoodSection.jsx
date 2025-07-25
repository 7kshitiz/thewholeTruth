import React from "react";
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/navigation';
import { Navigation } from 'swiper/modules';
import styles from "./styles/Realfoodsection.module.css";
import Card from "./Card";
import p1 from '../assets/img/p4.png';
import p2 from '../assets/img/p2.webp';
import p3 from '../assets/img/p3.webp';

const products = [
    {
        image: p1,
        title: "Plant Protein",
        subtitle: "Cleanest, yummiest. Ever.",
        bgColor: "#6b8e23",
        to: "/categories/plant-protein"
    },
    {
        image: p2,
        title: "Protein Powder",
        subtitle: "All the protein you need",
        bgColor: "#6a5acd",
        to: "/categories/protein-powder"
    },
    {
        image: p3,
        title: "Protein Bars",
        subtitle: "Cleanest snack. Ever.",
        bgColor: "#8b0000",
        to: "/categories/protein-bars"
    },
    {
        image: p1,
        title: "Plant Protein",
        subtitle: "Cleanest, yummiest. Ever.",
        bgColor: "#6b8e23",
        to: "/categories/plant-protein"
    },
    {
        image: p2,
        title: "Protein Powder",
        subtitle: "All the protein you need",
        bgColor: "#6a5acd",
        to: "/categories/protein-powder"
    },
    {
        image: p3,
        title: "Protein Bars",
        subtitle: "Cleanest snack. Ever.",
        bgColor: "#8b0000",
        to: "/categories/protein-bars"
    }
];

const RealFoodSection = () => {

   
    return (
        <section className={styles.section}>
            <div className={styles.left}>
                <h2>
                    We make <br /> <span>real food.</span>
                </h2>
                <p>
                    Food so clean, <u>we declare</u> each and every <u>ingredient</u>,{" "}
                    <u>proudly</u>, upfront.
                </p>
            </div>

            <div className={styles.right}>
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
                    {products.map((product) => (
                        <SwiperSlide key={product.title}>
                            <Card
                                key={product.title}
                                image={product.image}
                                name={product.title}
                                subtitle={product.subtitle}
                                bg={product.bgColor}

                            />
                        </SwiperSlide>
                    ))}
                </Swiper>

            </div>
        </section>
    );
};

export default RealFoodSection;