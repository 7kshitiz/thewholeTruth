import React from "react";
import { useParams } from "react-router-dom";
import allProducts from "../components/data/allProducts"; // your flat data
import styles from "./styles/ProductPage.module.css"; // CSS module

const ProductPage = () => {
    const { slug } = useParams();
    const product = allProducts.find((p) => p.slug === slug);

    if (!product) return <h2>Product not found</h2>;

    return (
        <div className={styles.container}>
            <div className={styles.left}>
                <img
                    src={product.image}
                    alt={product.name}
                    className={styles.image}
                />
            </div>

            <div className={styles.right}>
                <h1 className={styles.name}>{product.name}</h1>
                <p className={styles.sku}>SKU: {product.sku}</p>
                <p className={styles.weight}>{product.weight}</p>
                <p className={styles.price}>₹{product.price}</p>
                <p className={styles.description}>{product.shortDescription}</p>
                <p className={styles.stock}>
                    {product.stockStatus === "in-stock" ? "✅ In Stock" : "❌ Out of Stock"}
                </p>
                <button className={styles.button}>Add to Cart</button>
            </div>
        </div>
    );
};

export default ProductPage;
