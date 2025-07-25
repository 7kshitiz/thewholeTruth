
import styles from "./styles/ProductCard.module.css";
import { Link } from "react-router-dom";

const ProductCard = ({ name, image, price, slug }) => {

    return (
        <Link to={`/product/${slug}`} className={styles.card}>
            <div className={styles.card}>
                <img src={image} alt={name} />
                <h3>{name}</h3>
                <p>₹{price}</p>

                <button className={styles.addBtn} >
                    Add to Cart
                </button>
            </div>
        </Link>

    );
};

export default ProductCard;
