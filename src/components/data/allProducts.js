import categories from "./categories";

const allProducts = categories.flatMap(category =>
    category.products.map(product => ({
        ...product,
        categoryName: category.name,
        categoryColor: category.color
    }))
);

export default allProducts;