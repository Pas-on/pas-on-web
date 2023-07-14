const products = [
    {
        id: 1,
        title: "Apel Merah",
        price: 65000,
        size: "1kg",
        category: "Buah",
        image: "/Foto Project/Buah/Apel-removebg-preview.png",
        description:
            "Apel Merah kami adalah pilihan sempurna untuk pencinta buah segar dan lezat. Buah-buah ini dipetik dengan teliti saat mencapai kematangan sempurna, memberikan cita rasa manis dan asam yang seimbang. Apel Merah kami kaya akan serat dan antioksidan, menjadikannya pilihan yang sehat untuk camilan atau bahan dalam berbagai hidangan.",
    },
    {
        id: 2,
        title: "Buah Naga Daging Merah",
        price: 40000,
        size: "1kg",
        category: "Buah",
        image: "/Foto Project/Buah/BuahNaga_Merah_-removebg-preview.png",
        description:
            "Buah Naga Daging Merah kami adalah buah eksotis yang menakjubkan dengan warna merah cerah dan rasa manis yang lezat. Dagingnya yang lembut dan berair memiliki tekstur yang renyah, memberikan pengalaman unik dalam setiap gigitan. Buah Naga Daging Merah kami juga kaya akan nutrisi, seperti serat dan vitamin C, yang baik untuk kesehatan Anda.",
    },
    {
        id: 3,
        title: "Buah Naga Daging Putih",
        price: 75000,
        size: "1kg",
        category: "Buah",
        image: "/Foto Project/Buah/BuahNaga_Putij_-removebg-preview.png",
        description:
            "Buah Naga Daging Putih kami memiliki daging yang putih dan lembut, dengan rasa yang manis dan segar. Buah ini kaya akan serat dan nutrisi penting lainnya seperti vitamin C dan magnesium. Dengan teksturnya yang renyah dan cita rasa yang unik, Buah Naga Daging Putih adalah pilihan yang segar dan sehat untuk dinikmati langsung atau digunakan dalam berbagai hidangan.",
    },
    {
        id: 4,
        title: "Premium Peach",
        price: 750000,
        size: "1kg",
        category: "Buah",
        image: "/Foto Project/Buah/Peach-removebg-preview.png",
        description:
            "Premium Peach kami adalah buah persik berkualitas tinggi dengan rasa manis yang lezat dan tekstur yang lembut. Dipetik saat matang sempurna, buah-buah ini memberikan aroma yang menakjubkan dan kenikmatan melekat dalam setiap gigitan. Premium Peach kaya akan vitamin C, serat, dan antioksidan, menjadikannya pilihan buah yang menyegarkan dan sehat.",
    },
    {
        id: 5,
        title: "Pisang",
        price: 25000,
        size: "1 sisir",
        category: "Buah",
        image: "/Foto Project/Buah/Pisang-removebg-preview.png",
        description:
            "Pisang kami adalah buah yang lezat dan bergizi, dengan rasa manis yang khas dan tekstur lembut. Dipenuhi dengan vitamin, mineral, dan serat, pisang merupakan camilan yang sempurna untuk memberikan energi dan kepuasan sepanjang hari. Pisang dapat dinikmati langsung, ditambahkan dalam smoothie, atau digunakan dalam berbagai resep kue dan makanan penutup.",
    },
    {
        id: 6,
        title: "Semangka Premium",
        price: 60000,
        size: "4.8kg",
        category: "Buah",
        image: "/Foto Project/Buah/Semangka-removebg-preview.png",
        description:
            "Semangka Premium kami adalah buah semangka segar dan manis dengan daging yang renyah dan berair. Dipetik saat matang sempurna, setiap gigitan akan memanjakan lidah Anda dengan kesegaran alami. Semangka Premium mengandung banyak air dan nutrisi penting seperti vitamin A dan C, menjadikannya pilihan yang ideal untuk menyejukkan diri pada hari-hari panas atau sebagai hidangan penutup yang menyegarkan.",
    },
    {
        id: 7,
        title: "Daging Kambing Muda",
        price: 250000,
        size: "1kg",
        category: "Daging",
        image: "/Foto Project/Daging/daging_kambing-removebg-preview.png",
        description:
            "Daging Kambing Muda kami adalah pilihan yang sempurna untuk pencinta daging yang lezat dan bergizi. Dipilih dengan cermat, daging kambing muda kami memiliki tekstur yang lembut dan rasa yang khas. Kambing muda adalah sumber protein yang baik dan mengandung nutrisi penting seperti zat besi dan vitamin B12. Dengan kualitas premium dan kelezatan yang tak tertandingi, daging kambing muda akan memenuhi harapan Anda dalam hidangan apapun.",
    },
    {
        id: 8,
        title: "Daging Sapi Premium",
        price: 200000,
        size: "1kg",
        category: "Daging",
        image: "/Foto Project/Daging/Daging_Sapi-removebg-preview.png",
        description:
            "Daging Sapi Premium kami adalah pilihan utama bagi pencinta daging sapi yang berkualitas tinggi. Dipilih dari sapi berkualitas terbaik, daging sapi kami memiliki marbling yang kaya, kelezatan yang luar biasa, dan tekstur yang lembut. Daging sapi premium kami merupakan sumber protein yang baik, kaya akan zat besi dan vitamin B kompleks. Nikmati cita rasa yang otentik dan kenikmatan yang tak terlupakan dalam setiap hidangan dengan Daging Sapi Premium kami.",
    },
    {
        id: 9,
        title: "Australian Wagyu",
        price: 450000,
        size: "1kg",
        category: "Daging",
        image: "/Foto Project/Daging/australian-wagyu.png",
        description:
            "Daging Australian Wagyu kami memiliki marbling yang kaya, dengan lemak yang terdistribusi secara merata di dalam serat daging. Marbling ini memberikan tekstur yang lembut dan succulent, serta meningkatkan cita rasa yang khas dan lezat",
    },
    {
        id: 10,
        title: "Raw Chicken",
        price: 45000,
        size: "1kg",
        category: "Daging",
        image: "//Foto Project/Daging/raw_chicken-removebg-preview.png",
        description:
            "Raw Chicken kami adalah pilihan yang tepat untuk Anda yang mencari daging ayam segar dan berkualitas. Dipotong dengan hati-hati dari ayam segar, daging ayam kami memiliki tekstur yang lembut dan rasanya yang lezat. Cocok untuk berbagai hidangan, daging ayam mentah kami memberikan fleksibilitas dalam memasak sesuai dengan selera dan kebutuhan Anda.",
    },
    {
        id: 11,
        title: "fillet dada ayam",
        price: 110000,
        size: "340 gr",
        category: "Daging",
        image: "/Foto Project/Daging/fillet-dada-ayam-removebg-preview.png",
        description:
            "Fillet dada ayam adalah pilihan tepat bagi kamu yang ingin menikmati hidangan ayam yang sehat dan lezat. Potongan daging ayam yang diambil dari bagian dada ini sudah dihapuskan tulangnya, sehingga kamu tidak perlu repot lagi untuk memisahkan tulang dari daging saat mengolahnya. Dengan ketebalan yang lebih tipis dibandingkan dengan bagian dada ayam yang tidak difillet, fillet dada ayam dapat diolah menjadi berbagai macam hidangan yang lezat, seperti ayam goreng renyah, ayam panggang dengan aroma rempah yang khas, atau masakan yang lebih rumit seperti chicken cordon bleu atau chicken piccata.",
    },
    {
        id: 12,
        title: "Ayam Kalkun",
        price: 900000,
        size: "5 kg",
        category: "Daging",
        image: "/Foto Project/Daging/Turkey_Kalkun_-removebg-preview.png",
        description:
            "Ayam Kalkun kami adalah pilihan yang sempurna untuk acara khusus atau hidangan liburan. Daging ayam kalkun kami segar dan berkualitas tinggi, dengan kelezatan yang luar biasa dan tekstur yang lembut. Dipotong dalam ukuran yang sesuai, ayam kalkun kami siap untuk dipanggang, diasap, atau dimasak sesuai dengan keinginan Anda. Nikmati hidangan istimewa dengan Ayam Kalkun kami yang berkualitas.",
    },
    {
        id: 13,
        title: "Kerang Jumbo",
        price: 70000,
        size: "1kg",
        category: "Seafood",
        image: "/Foto Project/Ikan&Seafood/Clam-removebg-preview.png",
        description:
            "Kerang Jumbo kami adalah pilihan sempurna bagi pecinta seafood yang menginginkan hidangan lezat dan bergizi. Kerang-kerang ini memiliki ukuran yang besar dan daging yang kenyal. Dengan rasa yang lezat dan tekstur yang renyah, Kerang Jumbo dapat digunakan dalam berbagai hidangan seperti sup, pasta, atau dimakan langsung dengan saus favorit Anda.",
    },
    {
        id: 14,
        title: "Alaskan King Crab",
        price: 8100000,
        size: "10 kg",
        category: "Seafood",
        image: "/Foto Project/Ikan&Seafood/King_Crab-removebg-preview.png",
        description:
            "Alaskan King Crab kami adalah rajanya seafood yang menyajikan kenikmatan tiada tara. Dikenal dengan dagingnya yang lezat, manis, dan beraroma, kepiting raja ini menawarkan pengalaman mewah bagi pecinta seafood. Dengan ukuran besar dan cangkang yang keras, Alaskan King Crab dapat diolah menjadi hidangan panggang, tumis, atau dimakan langsung dengan saus mentega.",
    },
    {
        id: 15,
        title: "Lobster Laut",
        price: 300000,
        size: "500 gr",
        category: "Seafood",
        image: "/Foto Project/Ikan&Seafood/Lobster-removebg-preview.png",
        description:
            "Nikmati keistimewaan Lobster Laut kami, produk unggulan dengan daging lembut dan cita rasa yang kaya. Terpilih dari perairan yang penuh dengan kehidupan laut, lobster ini menawarkan kenikmatan yang tak terlupakan. Rasakan kelezatan mewahnya dalam hidangan utama atau hidangkan sebagai hidangan istimewa, lobster laut kami menghadirkan pengalaman kuliner yang luar biasa dengan kualitas terbaik yang memuaskan selera.",
    },
    {
        id: 16,
        title: "Nila",
        price: 50000,
        size: "1kg",
        category: "Seafood",
        image: "/Foto Project/Ikan&Seafood/Nila-removebg-preview.png",
        description:
            "Nikmati kelezatan segar Ikan Nila kami, dengan daging yang lembut dan cita rasa yang lezat. Dipanen dengan teliti dari sumber yang terpercaya, ikan nila kami menyajikan pengalaman kuliner yang memuaskan. Cocok untuk berbagai metode memasak, ikan nila ini menghadirkan kegembiraan rasa yang memanjakan lidah Anda.",
    },
    {
        id: 17,
        title: "Cumi-Cumi",
        price: 150000,
        size: "1kg",
        category: "Seafood",
        image: "/Foto Project/Ikan&Seafood/squid-removebg-preview.png",
        description:
            "Rasakan kelezatan dan tekstur kenyal dari Cumi segar kami, si produk andalan dengan cita rasa yang luar biasa. Dipilih dengan hati-hati langsung dari laut, cumi ini menawarkan pengalaman kuliner yang tak terlupakan. Siapkan dalam berbagai hidangan seperti tumisan, gorengan, atau olahan kreatif lainnya, cumi kami memberikan kepuasan bagi pencinta makanan laut yang sejati.",
    },
    {
        id: 18,
        title: "Norwegian Wild Salmon",
        price: 250000,
        size: "500 gr",
        category: "Seafood",
        image: "/Foto Project/Ikan&Seafood/Wild_Salmon-removebg-preview.png",
        description:
            "Nikmati keindahan salmon liar kami, produk unggulan dengan daging merah yang lembut dan rasa yang khas. Ditangkap secara alami dari perairan liar yang subur, salmon ini menghadirkan kenikmatan alami yang tak tergantikan. Cocok untuk berbagai hidangan, dari panggang hingga sushi, salmon liar kami memenuhi selera para pecinta makanan laut dengan kualitas premium yang menakjubkan.",
    },
    {
        id: 19,
        title: "Asparagus",
        price: 40000,
        size: "500 gr",
        category: "Sayur",
        image: "/Foto Project/Sayur/Asparagus-removebg-preview.png",
        description:
            "Nikmati keunggulan asparagus kami, produk segar dengan batang yang renyah dan cita rasa yang lezat. Dipetik dari kebun yang terawat dengan baik, asparagus ini memberikan kenikmatan alami yang tak terlupakan. Cocok untuk diolah dalam berbagai hidangan, asparagus kami merupakan pilihan sempurna untuk menambahkan rasa dan nutrisi pada masakan Anda.",
    },
    {
        id: 20,
        title: "Bayam",
        price: 10000,
        size: "200 gr",
        category: "Sayur",
        image: "/Foto Project/Sayur/Bayam-removebg-preview.png",
        description:
            "Nikmati manfaat dan kelezatan bayam kami, produk segar dengan daun yang hijau segar dan kandungan gizi yang tinggi. Dipetik dengan hati-hati dari kebun organik kami, bayam ini memberikan nutrisi yang optimal dan rasa yang lezat. Cocok untuk dijadikan bagian dari salad, sup, atau sajian sayuran lainnya, bayam kami merupakan pilihan ideal bagi Anda yang mengutamakan makanan sehat dan lezat.",
    },
    {
        id: 21,
        title: "Kangkung ",
        price: 25000,
        size: "1kg",
        category: "Sayur",
        image: "/Foto Project/Sayur/Kangkung-removebg-preview.png",
        description:
            "Nikmati segarnya kangkung kami, produk unggulan dengan daun hijau lezat dan tekstur yang renyah. Dipetik dengan cermat dari kebun yang terjaga kualitasnya, kangkung ini memberikan cita rasa yang khas dan kandungan nutrisi yang tinggi. Cocok untuk digunakan dalam tumisan, sup, atau sebagai pelengkap hidangan lainnya, kangkung kami memberikan kesegaran alami dan kelezatan yang tiada duanya.",
    },
    {
        id: 22,
        title: "Pak Choi",
        price: 20000,
        size: "1kg",
        category: "Sayur",
        image: "/Foto Project/Sayur/Pak_Choi-removebg-preview.png",
        description:
            "Nikmati keistimewaan pak choi kami, produk segar dengan daun hijau dan batang putih yang renyah. Dipanen dengan teliti dari kebun yang berkualitas, pak choi ini menghadirkan rasa yang segar dan tekstur yang menggoda. Cocok untuk dimasak dalam hidangan tumis, sup, atau salad, pak choi kami memberikan sentuhan khas Asia pada masakan Anda dengan kesegaran yang tak terlupakan.",
    },
    {
        id: 23,
        title: "Japanese Wasabi Grade A Super",
        price: 1900000,
        size: "1 pcs",
        category: "Sayur",
        image: "/Foto Project/Sayur/Wasabi-removebg-preview.png",
        description:
            "Rasakan kepedasan dan aroma khas Wasabi kami, produk autentik dengan cita rasa yang intens. Diproduksi dengan hati-hati dari akar Wasabi yang segar, produk ini menghadirkan pengalaman yang menggugah selera. Cocok untuk menambahkan rasa pada hidangan Jepang, sushi, atau makanan lainnya, Wasabi kami memberikan keunikan yang tak tergantikan dalam setiap gigitan.",
    },
    {
        id: 24,
        title: "Wortel",
        price: 20000,
        size: "1 kg",
        category: "Sayur",
        image: "/Foto Project/Sayur/Wortel-removebg-preview.png",
        description:
            "Nikmati kesegaran dan manfaat kesehatan dari wortel kami, produk segar dengan warna oranye cerah yang menggoda. Dipetik dari kebun dengan perhatian khusus, wortel ini memberikan rasa manis alami dan tekstur yang renyah. Cocok sebagai camilan sehat atau bahan utama dalam berbagai hidangan, wortel kami memberikan nutrisi yang tinggi dan kesegaran yang tak tertandingi dalam setiap gigitan.",
    },
    {
        id: 25,
        title: "Almond Milk",
        price: 190000,
        size: "1 Karton",
        category: "Susu",
        image: "/Foto Project/Susu/almond_milk-removebg-preview.png",
        description:
            "Nikmati kemurnian dan kenikmatan susu almond kami, produk yang lezat dengan rasa lembut dan kaya nutrisi. Dibuat dengan biji almond berkualitas tinggi, susu almond kami merupakan alternatif sempurna bagi mereka yang mencari opsi non-dairy yang rendah lemak dan kaya akan vitamin serta mineral. Menyegarkan saat diminum begitu saja atau digunakan dalam berbagai resep, susu almond kami memberikan pilihan yang menyenangkan dan sehat untuk dinikmati setiap hari.",
    },
    {
        id: 26,
        title: "GreenFields FreshMilk",
        price: 30000,
        size: "1L",
        category: "Susu",
        image: "/Foto Project/Susu/greenfields_fresh_milk-removebg-preview.png",
        description:
            "Nikmati kelezatan dan kesegaran susu Greenfields Freshmilk kami, produk berkualitas dengan rasa krim yang lezat dan kandungan gizi yang tinggi. Diproses dengan teknologi modern dan dipastikan bebas dari bahan tambahan, susu ini merupakan pilihan sempurna bagi pecinta susu segar yang otentik. Cocok untuk diminum langsung atau digunakan dalam berbagai resep, susu Greenfields Freshmilk kami memberikan kenikmatan yang tak tertandingi dengan kualitas terbaik yang memenuhi kebutuhan Anda.",
    },
    {
        id: 27,
        title: "GreenFields",
        price: 28000,
        size: "1L",
        category: "Susu",
        image: "/Foto Project/Susu/Greenfields-removebg-preview.png",
        description:
            "Nikmati keunggulan dan kualitas tak tergoyahkan dari susu Greenfields kami, produk unggulan dengan rasa segar dan nutrisi yang melimpah. Diproduksi dengan standar yang ketat dan dihasilkan dari sapi-sapi yang terawat dengan baik, susu Greenfields memberikan cita rasa yang khas dan kelezatan yang memanjakan lidah Anda. Cocok untuk diminum langsung atau digunakan dalam berbagai hidangan, susu Greenfields merupakan pilihan terbaik bagi Anda yang menginginkan susu berkualitas tinggi dan sehat.",
    },
    {
        id: 28,
        title: "Nestle FreshMilk",
        price: 30000,
        size: "1L",
        category: "Susu",
        image: "/Foto Project/Susu/Nestle_Fresh_Milk-removebg-preview.png",
        description:
            "Nikmati kelembutan dan kelezatan susu Nestlé Fresh Milk kami, produk unggulan dengan rasa segar dan kualitas yang terjamin. Diproses dengan teknologi tinggi dan diambil dari sumber susu berkualitas tinggi, susu Nestlé Fresh Milk memberikan nutrisi penting dan rasa yang lezat. Cocok untuk diminum sendiri atau digunakan dalam resep-resep favorit Anda, susu Nestlé Fresh Milk merupakan pilihan terpercaya untuk memenuhi kebutuhan susu harian Anda dengan kualitas yang terjamin.",
    },
    {
        id: 29,
        title: "Silk SoyMilk",
        price: 225000,
        size: "1L",
        category: "Susu",
        image: "/Foto Project/Susu/Silk_SoyMilk-removebg-preview.png",
        description:
            "Nikmati manfaat dan kelezatan susu Silk Soy kami, produk yang lezat dengan rasa yang halus dan kaya nutrisi. Dibuat dengan biji kedelai berkualitas tinggi, susu Silk Soy kami adalah pilihan sempurna bagi mereka yang mencari alternatif susu nabati yang rendah laktosa dan bebas dari kolesterol. Cocok untuk diminum sendiri atau digunakan dalam resep, susu Silk Soy kami memberikan pilihan yang lezat dan bergizi untuk memenuhi kebutuhan Anda tanpa produk susu hewani.",
    },
    {
        id: 30,
        title: "Ultra Milk Fullcream",
        price: 30000,
        size: "1L",
        category: "Susu",
        image: "/Foto Project/Susu/ultramilk_full_cream-removebg-preview.png",
        description:
            "Nikmati kelezatan dan kebaikan susu Ultramilk Fullcream kami, produk berkualitas dengan rasa kaya dan tekstur yang lembut. Diproduksi dengan standar yang ketat, susu ini menghadirkan kesegaran susu segar yang autentik dan kandungan nutrisi yang melimpah. Cocok untuk diminum langsung atau digunakan dalam berbagai hidangan, susu Ultramilk Fullcream memberikan kepuasan dan manfaat gizi yang luar biasa untuk kebutuhan harian Anda.",
    },
]
export default products
