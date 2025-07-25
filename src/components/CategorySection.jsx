import React from "react";
import styles from "./styles/CategorySection.module.css";
import ProductCard from "./ProductCard";

const CategorySection = ({ name, color, products }) => {
    return (
        <section className={styles.section} >
            <div className={styles.heading} style={{ backgroundColor: color }}>
                <h2>{name}</h2>
            </div>

            <div className={styles.grid}>
                {products.map(product => (
                    <ProductCard key={product.id} {...product} />
                ))}
            </div>
        </section>
    );
};

export default CategorySection;
