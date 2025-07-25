import React, { useState, useEffect } from 'react';
import { NavLink, Link, useNavigate } from 'react-router-dom';
import logo from '../assets/img/logo-top.svg';
import styles from './styles/Navbar.module.css';
const mobileLogo = "https://dms.mydukaan.io/original/webp/media/3718ce80-bedf-4d5e-b98a-8252d4959dbb.png";

const products = [
    { name: 'Plant Protein Powder', img: "https://dukaan.b-cdn.net/200x200/webp/media/a6f45481-67ae-4597-a0c0-dd8a21d4d4bf.png" },
    { name: '24g Protein Powder', img: 'https://dukaan.b-cdn.net/200x200/webp/media/a5472788-c95d-4335-af1a-f107afade5c8.jpg' },
    { name: '15g Protein Powder', img: 'https://dukaan.b-cdn.net/200x200/webp/media/594eb1ab-6f17-4623-8173-57aa09603b31.png' },
    { name: '20g Protein Bars', img: 'https://dukaan.b-cdn.net/200x200/webp/media/ed1b7585-b76f-45cc-a3c3-3a2e4a6d5028.png' },
    { name: 'Protein Bars', img: 'https://dukaan.b-cdn.net/200x200/webp/media/fc25f071-eeb5-4f5f-a26a-b2a5b7fe149f.png' },
    { name: 'Badaaam Chocolate', img: 'https://dukaan.b-cdn.net/200x200/webp/media/648fa944-85f4-4dd6-8bb0-2d9f25e9f7ae.png' },
    { name: 'Dark Chocolate', img: 'https://dukaan.b-cdn.net/200x200/webp/media/5ba1bfde-bc43-4081-b3bc-3a485659caa5.png' },
    { name: 'Nut Spreads', img: 'https://dukaan.b-cdn.net/200x200/webp/media/7fd8451d-1b57-4bf3-a94c-3ce7d780782b.png' },
    { name: 'Muesli', img: 'https://dukaan.b-cdn.net/200x200/webp/media/7fd8451d-1b57-4bf3-a94c-3ce7d780782b.png' },
    { name: 'Mini Protein Bars', img: 'https://dukaan.b-cdn.net/200x200/webp/media/6223f835-fe8b-4774-8ab1-a419fc036d7c.png' },
    { name: 'Energy Bars', img: 'https://dukaan.b-cdn.net/200x200/webp/media/0e5834cd-f84b-4424-b1da-c125d13a04f1.png' },
];

export default function Navbar() {
    const [showDropdown, setShowDropdown] = useState(false);
    const [isMobile, setIsMobile] = useState(window.innerWidth <= 768);
    const navigate = useNavigate();
    useEffect(() => {
        const handleResize = () => {
            setIsMobile(window.innerWidth <= 768);
        };

        window.addEventListener("resize", handleResize);
        return () => window.removeEventListener("resize", handleResize);
    }, []);

    return (
        <div
            className={styles.navbar}
            onMouseLeave={() => setShowDropdown(false)}
        >
            {/* center logo */}
            <div className={styles.logo}>
                <Link to="/">
                    <img src={isMobile ? mobileLogo : logo} alt="logo" />
                </Link>
            </div>

            {!isMobile && (
                <div className={styles.navCenter}>
                    {/* Shop link */}
                    <div
                        className={styles.menuItem}
                        onMouseEnter={() => setShowDropdown(true)}
                    >
                        <Link to="/categories" className={styles.menuLink}>
                            <span>Shop</span>
                            <i className="ri-arrow-down-s-fill"></i>
                        </Link>

                        {/* Dropdown */}
                        {showDropdown && (
                            <div
                                className={styles.dropdown}
                                onMouseEnter={() => setShowDropdown(true)}
                                onMouseLeave={() => setShowDropdown(false)}
                            >
                                <div className={styles.dropdownGrid}>
                                    {products.map((product) => (
                                        <Link
                                            to={`/categories/${product.name.replace(/\s+/g, '-').toLowerCase()}`}
                                            key={product.name}
                                            className={styles.dropdownItem}
                                        >
                                            <span>{product.name}</span>
                                            <img src={product.img} alt={product.name} />
                                        </Link>
                                    ))}
                                </div>
                            </div>
                        )}
                    </div>

                    {/* Other links */}
                    <Link to="/byob" className={styles.menuLink}>B.Y.O.B.</Link>
                    <Link to="/new-launches" className={styles.menuLink}>New Launches</Link>
                    <Link to="/reviews" className={styles.menuLink}>Reviews</Link>
                    <Link to="/about" className={styles.menuLink}>Our Story</Link>
                </div>
            )}

            <div className={styles.icons}>
                {isMobile && (
                    <button aria-label="Menu">
                        <i className="ri-menu-line"></i>
                    </button>
                )}  
                <button onClick={()=> navigate("/login")} aria-label="Account">
                    <i className="ri-account-circle-line"></i>
                </button>
            </div>
        </div>
    );
}
