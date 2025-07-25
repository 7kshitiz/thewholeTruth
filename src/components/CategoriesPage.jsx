import React from "react";
import styles from "./styles/CategoriesPage.module.css";
import CategorySection from "./CategorySection";
import categories from "./data/categories";

const CategoriesPage = () => {
    return (
        <div className={styles.page}>
            <h1>Shop by Categories</h1>
            {categories.map(cat => (
                <CategorySection
                    key={cat.name}
                    name={cat.name}
                    color={cat.color}
                    products={cat.products}
                />
            ))}
        </div>
    );
};

export default CategoriesPage;
