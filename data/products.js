const products = [
    {
        "id": 1,
        "title": "Apel Merah",
        "price": 65000,
        "size": "1kg",
        "category": "Buah",
        "image": "/Foto Project/Buah/Apel-removebg-preview.png",
    },
    {
        "id": 2,
        "title": "Buah Naga Daging Merah",
        "price": 40000,
        "size": "1kg",
        "category": "Buah",
        "image": "/Foto Project/Buah/BuahNaga_Merah_-removebg-preview.png",
    },
    {
        "id": 3,
        "title": "Buah Naga Daging Putih",
        "price": 75000,
        "size": "1kg",
        "category": "Buah",
        "image": "/Foto Project/Buah/BuahNaga_Putij_-removebg-preview.png",
    },
    {
        "id": 4,
        "title": "Premium Peach",
        "price": 750000,
        "size": "1kg",
        "category": "Buah",
        "image": "/Foto Project/Buah/Peach-removebg-preview.png",
    },
    {
        "id": 5,
        "title": "Pisang",
        "price": 25000,
        "size": "1 sisir",
        "category": "Buah",
        "image": "/Foto Project/Buah/Pisang-removebg-preview.png",
    },
    {
        "id": 6,
        "title": "Semangka Premium",
        "price": 60000,
        "size": "4.8kg",
        "category": "Buah",
        "image": "/Foto Project/Buah/Semangka-removebg-preview.png",
    },
    {
        "id": 7,
        "title": "Daging Kambing Muda",
        "price": 250000,
        "size": "1kg",
        "category": "Daging",
        "image": "/Foto Project/Daging/daging_kambing-removebg-preview.png",
    },
    {
        "id": 8,
        "title": "Daging Sapi Premium",
        "price": 200000,
        "size": "1kg",
        "category": "Daging",
        "image": "/Foto Project/Daging/Daging_Sapi-removebg-preview.png",
    },
    {
        "id": 9,
        "title": "Pork Belly ",
        "price": 150000,
        "size": "1kg",
        "category": "Daging",
        "image": "/Foto Project/Daging/PorkBelly-removebg-preview.png",
    },
    {
        "id": 10,
        "title": "Raw Chicken",
        "price": 45000,
        "size": "1kg",
        "category": "Daging",
        "image": "//Foto Project/Daging/raw_chicken-removebg-preview.png",
    },
    {
        "id": 11,
        "title": "Spam Kaleng (Non-Halal)",
        "price": 110000,
        "size": "340 gr",
        "category": "Daging",
        "image": "/Foto Project/Daging/spam-removebg-preview.png",
    },
    {
        "id": 12,
        "title": "Ayam Kalkun",
        "price": 900000,
        "size": "5 kg",
        "category": "Daging",
        "image": "/Foto Project/Daging/Turkey_Kalkun_-removebg-preview.png",
    },
    {
        "id": 13,
        "title": "Kerang Jumbo",
        "price": 70000,
        "size": "1kg",
        "category": "Seafood",
        "image": "/Foto Project/Ikan&Seafood/Clam-removebg-preview.png",
    },
    {
        "id": 14,
        "title": "Alaskan King Crab",
        "price": 8100000,
        "size": "10 kg",
        "category": "Seafood",
        "image": "/Foto Project/Ikan&Seafood/King_Crab-removebg-preview.png",
    },
    {
        "id": 15,
        "title": "Lobster Laut",
        "price": 300000,
        "size": "500 gr",
        "category": "Seafood",
        "image": "/Foto Project/Ikan&Seafood/Lobster-removebg-preview.png",
    },
    {
        "id": 16,
        "title": "Nila",
        "price": 50000,
        "size": "1kg",
        "category": "Seafood",
        "image": "/Foto Project/Ikan&Seafood/Nila-removebg-preview.png",
    },
    {
        "id": 17,
        "title": "Cumi-Cumi",
        "price": 150000,
        "size": "1kg",
        "category": "Seafood",
        "image": "/Foto Project/Ikan&Seafood/squid-removebg-preview.png",
    },
    {
        "id": 18,
        "title": "Norwegian Wild Salmon",
        "price": 250000,
        "size": "500 gr",
        "category": "Seafood",
        "image": "/Foto Project/Ikan&Seafood/Wild_Salmon-removebg-preview.png",
    },
    {
        "id": 19,
        "title": "Asparagus",
        "price": 40000,
        "size": "500 gr",
        "category": "Sayur",
        "image": "/Foto Project/Sayur/Asparagus-removebg-preview.png",
    },
    {
        "id": 20,
        "title": "Bayam",
        "price": 10000,
        "size": "200 gr",
        "category": "Sayur",
        "image": "/Foto Project/Sayur/Bayam-removebg-preview.png",
    },
    {
        "id": 21,
        "title": "Kangkung ",
        "price": 25000,
        "size": "1kg",
        "category": "Sayur",
        "image": "/Foto Project/Sayur/Kangkung-removebg-preview.png",
    },
    {
        "id": 22,
        "title": "Pak Choi",
        "price": 20000,
        "size": "1kg",
        "category": "Sayur",
        "image": "/Foto Project/Sayur/Pak_Choi-removebg-preview.png",
    },
    {
        "id": 23,
        "title": "Japanese Wasabi Grade A Super",
        "price": 1900000,
        "size": "1 pcs",
        "category": "Sayur",
        "image": "/Foto Project/Sayur/Wasabi-removebg-preview.png",
    },
    {
        "id": 24,
        "title": "Wortel",
        "price": 20000,
        "size": "1 kg",
        "category": "Sayur",
        "image": "/Foto Project/Sayur/Wortel-removebg-preview.png",
    },
    {
        "id": 25,
        "title": "Almond Milk",
        "price": 190000,
        "size": "1 Karton",
        "category": "Susu",
        "image": "/Foto Project/Susu/almond_milk-removebg-preview.png",
    },
    {
        "id": 26,
        "title": "GreenFields FreshMilk",
        "price": 30000,
        "size": "1L",
        "category": "Susu",
        "image": "/Foto Project/Susu/greenfields_fresh_milk-removebg-preview.png",
    },
    {
        "id": 27,
        "title": "GreenFields",
        "price": 28000,
        "size": "1L",
        "category": "Susu",
        "image": "/Foto Project/Susu/Greenfields-removebg-preview.png",
    },
    {
        "id": 28,
        "title": "Nestle FreshMilk",
        "price": 30000,
        "size": "1L",
        "category": "Susu",
        "image": "/Foto Project/Susu/Nestle_Fresh_Milk-removebg-preview.png",
    },
    {
        "id": 29,
        "title": "Silk SoyMilk",
        "price": 225000,
        "size": "1L",
        "category": "Susu",
        "image": "/Foto Project/Susu/Silk_SoyMilk-removebg-preview.png",
    },
    {
        "id": 30,
        "title": "Ultra Milk Fullcream",
        "price": 30000,
        "size": "1L",
        "category": "Susu",
        "image": "/Foto Project/Susu/ultramilk_full_cream-removebg-preview.png",
    }

]

export default products
