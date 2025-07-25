const categories = [
    {
        name: "Whey Protein Powders",
        color: "#8b2e43",
        products: [
            {
                id: 1,
                name: "Unflavoured 30 g Pure Whey Protein Isolate - Pack of 1 KG",
                slug: "unflavoured-isolate-whey-protein",
                sku: "38730407",
                category: "whey-protein",
                price: 4888,
                weight: "1kg",
                image: "https://dukaan.b-cdn.net/700x700/webp/media/94000ea2-c7fd-4b4d-8cad-926c22d6642f.jpg",
                shortDescription: "30g protein per scoop - pure whey isolate.",
                stockStatus: "in-stock",
            },
            {
                id: 2,
                name: "Unflavoured Raw Whey Protein Concentrate 26 g - Pack of 1 KG",
                slug: "unflavoured-whey-protein",
                sku: "12340001",
                category: "whey-protein",
                price: 2899,
                weight: "1kg",
                image: "https://dukaan.b-cdn.net/700x700/webp/media/cef73fd3-dbe9-4a87-a804-73af1ea85700.jpg",
                shortDescription: "Rich chocolate flavor with 28g protein.",
                stockStatus: "in-stock",
            },
            {
                id: 3,
                name: "Light Cocoa 24 g Protein Powder - Pack of 1 KG",
                slug: "light-cocoa-whey-protein",
                sku: "12340002",
                category: "whey-protein",
                price: 3854,
                weight: "1kg",
                image: "https://dukaan.b-cdn.net/700x700/webp/media/2a4b4253-7861-492b-b828-c87241df2d05.jpg",
                shortDescription: "For coffee lovers, with 27g protein.",
                stockStatus: "in-stock",
            },
            {
                id: 4,
                name: "Cold Coffee 24 g Protein Powder - Pack of 1 KG",
                slug: "cold-coffee-whey-protein",
                sku: "12340003",
                category: "whey-protein",
                price: 3854,
                weight: "1kg",
                image: "https://dukaan.b-cdn.net/700x700/webp/media/c1834079-a92a-4921-9b61-f423f09d69fc.jpg",
                shortDescription: "Mango flavored protein delight.",
                stockStatus: "out-of-stock",
            },
            {
                id: 5,
                name: "Mango Milkshake 24 g Protein Powder - Pack of 1 KG",
                slug: "mango-whey-protein",
                sku: "12340004",
                category: "whey-protein",
                price: 4777,
                weight: "1kg",
                image: "https://dukaan.b-cdn.net/700x700/webp/media/7c3ebf07-f5a2-47ec-b52b-75a0b55c2c99.jpg",
                shortDescription: "Creamy PB flavor, 29g protein.",
                stockStatus: "in-stock",
            },
            {
                id: 6,
                name: "Pista Badaam 24 g Protein Powder - Pack of 1 KG",
                slug: "pista-badam-whey-protein",
                sku: "12340005",
                category: "whey-protein",
                price: 4110,
                weight: "1kg",
                image: "https://dukaan.b-cdn.net/700x700/webp/media/7bad8e83-2275-4255-8ca2-fe8a542e3a4f.jpg",
                shortDescription: "Tasty strawberry, 27g protein.",
                stockStatus: "in-stock",
            }
        ]
    },

    {
        name: "Plant Protein Powders",
        color: "#4b8e23",
        products: [
            {
                id: 7,
                name: "Pista Badaam 24g Plant Protein - Pack of 1 KG",
                slug: "pista-badam-protein",
                sku: "12341001",
                category: "plant-protein",
                price: 3299,
                weight: "1kg",
                image: "https://dukaan.b-cdn.net/700x700/webp/media/8c203b36-c8c0-4445-b32b-c8b06ff8c7e0.jpg",
                shortDescription: "Plant protein with vanilla essence.",
                stockStatus: "in-stock"
            },
            {
                id: 8,
                name: "Double Cocoa 25g Plant Protein - Pack of 1 KG",
                slug: "double-cocoa-protein",
                sku: "12341002",
                category: "plant-protein",
                price: 2999,
                weight: "1kg",
                image: "https://dukaan.b-cdn.net/700x700/webp/media/96ef3b60-4cfb-46ca-bfd1-a0555a8895f9.jpg",
                shortDescription: "Delicious chocolate plant protein.",
                stockStatus: "in-stock"
            },
            {
                id: 9,
                name: "Apple Beetroot Carrot 21g Plant Protein - Pack of 1 KG",
                slug: "apple-beetroot-protein",
                sku: "12341003",
                category: "plant-protein",
                price: 400,
                weight: "1kg",
                image: "https://dukaan.b-cdn.net/700x700/webp/media/3b4381ed-85aa-49bc-8488-1eafbbff3d72.jpg",
                shortDescription: "Fruity mix for protein lovers.",
                stockStatus: "in-stock"
            }
        ]
    },

    {
        name: "Protein Bars",
        color: "#a52a2a",
        products: [
            {
                id: 10,
                name: "Peanut Millet Cocoa - Pack of 8 Millet Bars",
                slug: "millet-bar",
                sku: "12342001",
                category: "bars",
                price: 999,
                weight: "8 Bar",
                image: "https://dukaan.b-cdn.net/700x700/webp/media/c0e410db-1f6a-42fe-b6b5-973cadcf039f.png",
                shortDescription: "Dense protein fudge in chocolate.",
                stockStatus: "in-stock"
            },
            {
                id: 11,
                name: "Lemon Cranberry Protein Bars - Box of 8",
                slug: "lemon-bar",
                sku: "12342002",
                category: "bars",
                price: 1000,
                weight: "8 Bar",
                image: "https://dukaan.b-cdn.net/700x700/webp/media/b05adebc-5cbe-4323-aa6e-8520e1e486b2.png",
                shortDescription: "Berry flavor and protein punch.",
                stockStatus: "in-stock"
            },
            {
                id: 12,
                name: "Cranberry Protein Bars - Box of 8",
                slug: "cranberry-bar",
                sku: "12342003",
                category: "bars",
                price: 800,
                weight: "8 Bar",
                image: "https://dukaan.b-cdn.net/700x700/webp/media/be548daa-0411-4df9-a32c-0ca5d099b97a.png",
                shortDescription: "Crunchy peanuts & protein power.",
                stockStatus: "in-stock"
            },
            {
                id: 13,
                name: "Orange Cocoa Protein Bars - Box of 8",
                slug: "orange-bar",
                sku: "12342004",
                category: "bars",
                price: 800,
                weight: "8 Bar",
                image: "https://dukaan.b-cdn.net/700x700/webp/media/4fbe7e29-bc26-455d-93f1-79fbb53b75ab.png",
                shortDescription: "Cool mint chocolate flavor.",
                stockStatus: "in-stock"
            },
            {
                id: 14,
                name: "Coffee Cocoa Protein Bars - Box of 8",
                slug: "coffee-bar",
                sku: "12342005",
                category: "bars",
                price: 800,
                weight: "8 Bar",
                image: "https://dukaan.b-cdn.net/700x700/webp/media/fcca15be-423d-405c-9b1c-2ea86d67d8bd.png",
                shortDescription: "Tastes like hazelnut brownie.",
                stockStatus: "out-of-stock"
            },
            {
                id: 15,
                name: "Peanut Butter Protein Bars - Box of 8",
                slug: "peanut-bar",
                sku: "12342006",
                category: "bars",
                price: 800,
                weight: "8 Bar",
                image: "https://dukaan.b-cdn.net/700x700/webp/media/10c5cde6-eaec-4a8f-8223-f63170407ba1.png",
                shortDescription: "Coffee kick in a protein bar.",
                stockStatus: "in-stock"
            }
        ]
    }
];

export default categories;
