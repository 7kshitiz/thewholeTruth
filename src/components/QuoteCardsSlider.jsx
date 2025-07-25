import React from 'react';
import styles from './styles/QuoteCardsSlider.module.css';
import QuoteCard from './QuoteCard';

const images = [
    "https://dms.mydukaan.io/original/webp/media/deeb4d68-9706-41b1-b07b-9c70fa1d39c3.png",
    "https://dms.mydukaan.io/original/webp/media/1f62812b-56b7-479e-bcc9-78b9f406e7f6.png",
    "https://dms.mydukaan.io/original/webp/media/72a6cedc-0703-459c-a2eb-11a908460fc5.png",
    "https://dms.mydukaan.io/original/webp/media/550a86cd-e66b-4866-ae5c-de725090f3d5.png",
    "https://dms.mydukaan.io/original/webp/media/932a0876-003b-4c89-b126-6cdd26481078.png",
    "https://dms.mydukaan.io/original/webp/media/065552cd-7ee8-44a1-a7af-c4b9ca637cde.png",
    "https://dms.mydukaan.io/original/webp/media/76f2c223-7cda-4b93-96cd-3d91e72de55c.png",
    "https://dms.mydukaan.io/original/webp/media/9e96c75a-b54f-432d-b825-1ef7d8084d95.png"
];

const QuoteCardsSlider = () => {
    return (
        <div className={styles.slider}>
            {images.map((image) => (
                <QuoteCard
                    img={image}
                />
            ))}
        </div>
    );
};

export default QuoteCardsSlider;
