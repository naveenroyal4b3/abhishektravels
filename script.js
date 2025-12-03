// Destinations Data - South India
const destinations = [
    // Karnataka
    {
        name: "Bangalore",
        state: "karnataka",
        image: "https://images.pexels.com/photos/261102/pexels-photo-261102.jpeg?auto=compress&cs=tinysrgb&w=400&q=75",
        description: "The Silicon Valley of India, known for its gardens, parks, and vibrant tech culture.",
        features: ["Tech Hub", "Gardens", "Nightlife"]
    },
    {
        name: "Mysore",
        state: "karnataka",
        image: "https://images.pexels.com/photos/271743/pexels-photo-271743.jpeg?auto=compress&cs=tinysrgb&w=400&q=75",
        description: "Famous for the magnificent Mysore Palace and rich cultural heritage.",
        features: ["Palace", "Heritage", "Culture"]
    },
    {
        name: "Coorg",
        state: "karnataka",
        image: "https://images.pexels.com/photos/2581922/pexels-photo-2581922.jpeg?auto=compress&cs=tinysrgb&w=400&q=75",
        description: "Scotland of India, known for coffee plantations and misty hills.",
        features: ["Coffee", "Hills", "Nature"]
    },
    {
        name: "Hampi",
        state: "karnataka",
        image: "https://images.pexels.com/photos/1571460/pexels-photo-1571460.jpeg?auto=compress&cs=tinysrgb&w=400&q=75",
        description: "UNESCO World Heritage Site with ancient ruins and temples.",
        features: ["Heritage", "Ruins", "Temples"]
    },
    {
        name: "Gokarna",
        state: "karnataka",
        image: "https://images.pexels.com/photos/271624/pexels-photo-271624.jpeg?auto=compress&cs=tinysrgb&w=400&q=75",
        description: "Beach paradise with pristine shores and spiritual vibes.",
        features: ["Beaches", "Spiritual", "Relaxation"]
    },
    {
        name: "Chikmagalur",
        state: "karnataka",
        image: "https://images.pexels.com/photos/2581922/pexels-photo-2581922.jpeg?auto=compress&cs=tinysrgb&w=400&q=75",
        description: "Coffee land with scenic mountains and waterfalls.",
        features: ["Coffee", "Mountains", "Waterfalls"]
    },
    
    // Tamil Nadu
    {
        name: "Chennai",
        state: "tamil-nadu",
        image: "https://images.pexels.com/photos/271743/pexels-photo-271743.jpeg?auto=compress&cs=tinysrgb&w=400&q=75",
        description: "Cultural capital of Tamil Nadu with beautiful beaches and temples.",
        features: ["Beaches", "Temples", "Culture"]
    },
    {
        name: "Ooty",
        state: "tamil-nadu",
        image: "https://images.pexels.com/photos/2581922/pexels-photo-2581922.jpeg?auto=compress&cs=tinysrgb&w=400&q=75",
        description: "Queen of Hill Stations with tea gardens and cool climate.",
        features: ["Hill Station", "Tea Gardens", "Cool Climate"]
    },
    {
        name: "Kodaikanal",
        state: "tamil-nadu",
        image: "https://images.pexels.com/photos/2581922/pexels-photo-2581922.jpeg?auto=compress&cs=tinysrgb&w=400&q=75",
        description: "Princess of Hill Stations with beautiful lakes and forests.",
        features: ["Lake", "Forests", "Scenic"]
    },
    {
        name: "Madurai",
        state: "tamil-nadu",
        image: "https://images.pexels.com/photos/1571460/pexels-photo-1571460.jpeg?auto=compress&cs=tinysrgb&w=400&q=75",
        description: "Ancient city famous for Meenakshi Temple and rich history.",
        features: ["Temples", "History", "Architecture"]
    },
    {
        name: "Rameswaram",
        state: "tamil-nadu",
        image: "https://images.pexels.com/photos/271624/pexels-photo-271624.jpeg?auto=compress&cs=tinysrgb&w=400&q=75",
        description: "Sacred island town with beautiful beaches and temples.",
        features: ["Spiritual", "Beaches", "Pilgrimage"]
    },
    {
        name: "Kanyakumari",
        state: "tamil-nadu",
        image: "https://images.pexels.com/photos/271624/pexels-photo-271624.jpeg?auto=compress&cs=tinysrgb&w=400&q=75",
        description: "Southernmost tip of India with stunning sunrise and sunset views.",
        features: ["Sunrise", "Sunset", "Beaches"]
    },
    
    // Kerala
    {
        name: "Munnar",
        state: "kerala",
        image: "https://images.pexels.com/photos/2581922/pexels-photo-2581922.jpeg?auto=compress&cs=tinysrgb&w=400&q=75",
        description: "Tea country with rolling hills and misty valleys.",
        features: ["Tea Gardens", "Hills", "Nature"]
    },
    {
        name: "Alleppey",
        state: "kerala",
        image: "https://images.pexels.com/photos/271624/pexels-photo-271624.jpeg?auto=compress&cs=tinysrgb&w=400&q=75",
        description: "Venice of the East with beautiful backwaters and houseboats.",
        features: ["Backwaters", "Houseboats", "Canals"]
    },
    {
        name: "Kochi",
        state: "kerala",
        image: "https://images.pexels.com/photos/271743/pexels-photo-271743.jpeg?auto=compress&cs=tinysrgb&w=400&q=75",
        description: "Port city with colonial architecture and spice markets.",
        features: ["Port", "Colonial", "Spices"]
    },
    {
        name: "Wayanad",
        state: "kerala",
        image: "https://images.pexels.com/photos/2581922/pexels-photo-2581922.jpeg?auto=compress&cs=tinysrgb&w=400&q=75",
        description: "Green paradise with dense forests and wildlife.",
        features: ["Forests", "Wildlife", "Adventure"]
    },
    {
        name: "Thekkady",
        state: "kerala",
        image: "https://images.pexels.com/photos/2581922/pexels-photo-2581922.jpeg?auto=compress&cs=tinysrgb&w=400&q=75",
        description: "Wildlife sanctuary and spice plantations.",
        features: ["Wildlife", "Spices", "Nature"]
    },
    {
        name: "Kovalam",
        state: "kerala",
        image: "https://images.pexels.com/photos/271624/pexels-photo-271624.jpeg?auto=compress&cs=tinysrgb&w=400&q=75",
        description: "Famous beach destination with golden sands.",
        features: ["Beaches", "Resorts", "Relaxation"]
    },
    
    // Andhra Pradesh
    {
        name: "Visakhapatnam",
        state: "andhra-pradesh",
        image: "https://images.pexels.com/photos/271624/pexels-photo-271624.jpeg?auto=compress&cs=tinysrgb&w=400&q=75",
        description: "Jewel of the East Coast with beautiful beaches and hills.",
        features: ["Beaches", "Hills", "Port"]
    },
    {
        name: "Tirupati",
        state: "andhra-pradesh",
        image: "https://images.pexels.com/photos/1571460/pexels-photo-1571460.jpeg?auto=compress&cs=tinysrgb&w=400&q=75",
        description: "Famous pilgrimage destination with ancient temples.",
        features: ["Pilgrimage", "Temples", "Spiritual"]
    },
    {
        name: "Araku Valley",
        state: "andhra-pradesh",
        image: "https://images.pexels.com/photos/2581922/pexels-photo-2581922.jpeg?auto=compress&cs=tinysrgb&w=400&q=75",
        description: "Scenic hill station with coffee plantations and waterfalls.",
        features: ["Hill Station", "Coffee", "Waterfalls"]
    },
    {
        name: "Vijayawada",
        state: "andhra-pradesh",
        image: "https://images.pexels.com/photos/271743/pexels-photo-271743.jpeg?auto=compress&cs=tinysrgb&w=400&q=75",
        description: "Commercial hub on the banks of Krishna River.",
        features: ["River", "Temples", "Culture"]
    },
    
    // Telangana
    {
        name: "Hyderabad",
        state: "telangana",
        image: "https://images.pexels.com/photos/261102/pexels-photo-261102.jpeg?auto=compress&cs=tinysrgb&w=400&q=75",
        description: "City of Pearls with rich history and delicious biryani.",
        features: ["History", "Food", "Culture"]
    },
    {
        name: "Warangal",
        state: "telangana",
        image: "https://images.pexels.com/photos/1571460/pexels-photo-1571460.jpeg?auto=compress&cs=tinysrgb&w=400&q=75",
        description: "Ancient city with historic forts and temples.",
        features: ["Forts", "Temples", "History"]
    }
];

// Temples Data - South India Sacred Temples
// Temples Data - South India Sacred Temples
const temples = [
    {
        id: 1,
        name: "Tirumala Venkateswara Temple",
        location: "Tirumala, Andhra Pradesh",
        deity: "Lord Venkateswara (Balaji)",
        significance: "One of the richest and most visited temples in the world",
        image: "https://upload.wikimedia.org/wikipedia/commons/a/a3/Tirumala_Anand_nilayam09832.jpg",
        description: "The most sacred Vaishnavite temple dedicated to Lord Venkateswara. Millions of devotees visit annually seeking blessings and fulfillment of wishes.",
        features: ["Most Visited", "Rich Temple", "Darshan Available", "Prasadam", "Accommodation"],
        timings: "2:30 AM - 1:30 AM (Next Day)",
        special: "Free Darshan, Special Entry, VIP Darshan available",
        category: "vaishnavite",
        featured: true
    },
    {
        id: 2,
        name: "Padmavathi Temple",
        location: "Tiruchanur, Tirupati",
        deity: "Goddess Padmavathi",
        significance: "Consort of Lord Venkateswara",
        image: "https://upload.wikimedia.org/wikipedia/commons/2/23/Padmavathi_Ammavari_Temple.JPG",
        description: "Beautiful temple dedicated to Goddess Padmavathi, the divine consort of Lord Venkateswara. Located near Tirupati.",
        features: ["Goddess Temple", "Near Tirupati", "Prasadam", "Peaceful"],
        timings: "6:00 AM - 9:00 PM",
        special: "Visit after Tirumala Darshan",
        category: "vaishnavite",
        featured: false
    },
    {
        id: 3,
        name: "Meenakshi Amman Temple",
        location: "Madurai, Tamil Nadu",
        deity: "Goddess Meenakshi & Lord Sundareswarar",
        significance: "One of the most famous temples in Tamil Nadu",
        image: "https://upload.wikimedia.org/wikipedia/commons/e/ed/Corridor_of_Meenakshi_Amman_Temple.jpg",
        description: "Magnificent temple complex with stunning architecture. Dedicated to Goddess Meenakshi and Lord Shiva.",
        features: ["Architecture", "Historical", "Darshan", "Prasadam"],
        timings: "5:00 AM - 12:30 PM, 4:00 PM - 9:30 PM",
        special: "Thousand Pillar Hall, Golden Lotus Tank",
        category: "shaivite",
        featured: true
    },
    {
        id: 4,
        name: "Ramanathaswamy Temple",
        location: "Rameswaram, Tamil Nadu",
        deity: "Lord Ramanathaswamy (Shiva)",
        significance: "One of the 12 Jyotirlinga temples",
        image: "https://upload.wikimedia.org/wikipedia/commons/4/4a/Rameshawaram_temple_view_from_the_sea.jpg",
        description: "Sacred Jyotirlinga temple where Lord Rama worshipped Shiva. Important pilgrimage destination for Hindus.",
        features: ["Jyotirlinga", "Pilgrimage", "Sacred Tanks", "Darshan"],
        timings: "5:00 AM - 1:00 PM, 3:00 PM - 9:00 PM",
        special: "22 Sacred Wells (Theerthams) for ritual bath",
        category: "shaivite",
        featured: true
    },
    {
        id: 5,
        name: "Guruvayur Temple",
        location: "Guruvayur, Kerala",
        deity: "Lord Krishna (Guruvayurappan)",
        significance: "Famous Krishna temple in Kerala",
        image: "https://upload.wikimedia.org/wikipedia/commons/0/04/009392022_Guruvayur_temple%2C_Kerala_004.jpg",
        description: "One of the most important Krishna temples in South India. Known as 'Bhooloka Vaikunta' (Heaven on Earth).",
        features: ["Krishna Temple", "Kerala", "Darshan", "Prasadam"],
        timings: "3:00 AM - 9:30 PM",
        special: "Elephant sanctuary nearby",
        category: "vaishnavite",
        featured: false
    },
    {
        id: 6,
        name: "Sabarimala Temple",
        location: "Pathanamthitta, Kerala",
        deity: "Lord Ayyappa",
        significance: "Famous hill shrine temple",
        image: "https://upload.wikimedia.org/wikipedia/commons/2/2b/Sabarimala_temple_during_Periyar_butterfly_survey_at_Sabarimala%2C_2014_%2812%29.jpg",
        description: "Sacred hill temple dedicated to Lord Ayyappa. Requires 41 days of penance and pilgrimage during Mandala season.",
        features: ["Hill Temple", "Pilgrimage", "Forest Trek", "Darshan"],
        timings: "Seasonal (Nov - Jan)",
        special: "Mandala Makaravilakku Festival",
        category: "shaivite",
        featured: true
    },
    {
        id: 7,
        name: "Sri Kalahasti Temple",
        location: "Sri Kalahasti, Andhra Pradesh",
        deity: "Lord Kalahasteeswara (Shiva)",
        significance: "One of the Pancha Bhoota Stalam",
        image: "https://upload.wikimedia.org/wikipedia/commons/5/56/Srikalahasti_temple_and_Hill.jpg",
        description: "Ancient temple representing Vayu (Air) element. Located near Tirupati, perfect for combined pilgrimage.",
        features: ["Pancha Bhoota", "Near Tirupati", "Darshan", "Rahu-Ketu Puja"],
        timings: "6:00 AM - 9:00 PM",
        special: "Famous for Rahu-Ketu Dosha Nivarana",
        category: "shaivite",
        featured: false
    },
    {
        id: 8,
        name: "Kanipakam Temple",
        location: "Kanipakam, Andhra Pradesh",
        deity: "Lord Ganesha (Varasiddhi Vinayaka)",
        significance: "Famous Ganesha temple",
        image: "https://upload.wikimedia.org/wikipedia/commons/7/72/Galipgopuram_of_Kanipakam_temple_%28May_2019%29_10.jpg",
        description: "Sacred temple with self-manifested Ganesha idol. The temple tank water is believed to have healing properties.",
        features: ["Ganesha Temple", "Self-Manifested", "Sacred Tank", "Darshan"],
        timings: "4:00 AM - 9:00 PM",
        special: "Water from temple tank never dries",
        category: "ganesha",
        featured: false
    },
    {
        id: 9,
        name: "Golden Temple (Sripuram)",
        location: "Vellore, Tamil Nadu",
        deity: "Goddess Lakshmi",
        significance: "Golden temple with gold-plated structure",
        image: "https://upload.wikimedia.org/wikipedia/commons/6/69/Sripuram_Temple_Full_View.jpg",
        description: "Magnificent golden temple dedicated to Goddess Lakshmi. Entire structure is gold-plated, creating a stunning visual.",
        features: ["Golden Structure", "Lakshmi Temple", "Modern", "Darshan"],
        timings: "4:00 AM - 8:00 PM",
        special: "Entire temple covered in gold",
        category: "vaishnavite",
        featured: true
    },
    {
        id: 10,
        name: "Kanchipuram Temples",
        location: "Kanchipuram, Tamil Nadu",
        deity: "Multiple (Vishnu Kanchi & Shiva Kanchi)",
        significance: "City of Thousand Temples",
        image: "https://upload.wikimedia.org/wikipedia/commons/3/32/Kailasanathar_Temple._Kanchipuram%2C_TamilNadu.jpg",
        description: "Ancient temple city with numerous sacred temples including Ekambareswarar, Kamakshi Amman, Varadaraja Perumal temples.",
        features: ["Multiple Temples", "Historical", "Architecture", "Darshan"],
        timings: "Varies by temple",
        special: "Famous for silk sarees and temple architecture",
        category: "multiple",
        featured: false
    },
    {
        id: 11,
        name: "Mahabalipuram Temples",
        location: "Mahabalipuram, Tamil Nadu",
        deity: "Lord Shiva & Vishnu",
        significance: "UNESCO World Heritage Site",
        image: "https://upload.wikimedia.org/wikipedia/commons/8/83/Mahabalipuram-Shore_Temple-WUS01969.jpg",
        description: "Group of 7th-8th century monuments and temples. Famous for Shore Temple, Pancha Rathas, and rock-cut architecture.",
        features: ["UNESCO Site", "Rock Cut", "Historical", "Architecture"],
        timings: "6:00 AM - 6:00 PM",
        special: "Shore Temple by the sea",
        category: "historical",
        featured: false
    },
    {
        id: 12,
        name: "Chidambaram Nataraja Temple",
        location: "Chidambaram, Tamil Nadu",
        deity: "Lord Nataraja (Shiva as Cosmic Dancer)",
        significance: "One of the Pancha Sabhai Sthalams",
        image: "https://upload.wikimedia.org/wikipedia/commons/c/c3/Temple_Tank_in_Nataraja_Temple%2C_Chidambaram.jpg",
        description: "Famous temple where Shiva is worshipped as Nataraja, the cosmic dancer. Unique architecture with golden roof.",
        features: ["Nataraja", "Golden Roof", "Architecture", "Darshan"],
        timings: "6:00 AM - 12:00 PM, 4:30 PM - 9:00 PM",
        special: "Golden roof (Kanaka Sabha) and Akasa Lingam",
        category: "shaivite",
        featured: false
    }
];

// Rooms Data - Tirupati Accommodations (Real Available Options)
const rooms = [
    // TTD (Tirumala Tirupati Devasthanams) Accommodations
    {
        id: 1,
        name: "TTD Srinivasam Complex",
        type: "TTD Guest House",
        location: "Tirupati",
        image: "https://images.pexels.com/photos/271624/pexels-photo-271624.jpeg?auto=compress&cs=tinysrgb&w=400&q=75",
        price: 200,
        features: ["Non-AC Rooms", "Basic Amenities", "Near RTC Bus Stand", "TTD Official", "Prasadam Available"],
        description: "Official TTD accommodation complex located opposite RTC Bus Stand. Clean and affordable rooms perfect for pilgrims. Book through TTD website.",
        category: "dharmashala",
        official: true
    },
    {
        id: 2,
        name: "TTD Srinivasam Complex - AC Rooms",
        type: "TTD Guest House",
        location: "Tirupati",
        image: "https://images.pexels.com/photos/271743/pexels-photo-271743.jpeg?auto=compress&cs=tinysrgb&w=400&q=75",
        price: 400,
        features: ["AC Rooms", "Clean Facilities", "Near Bus Stand", "TTD Official", "24/7 Security"],
        description: "Air-conditioned rooms at TTD Srinivasam Complex. Official accommodation with modern amenities. Advance booking available.",
        category: "guesthouse",
        official: true
    },
    {
        id: 3,
        name: "TTD Srinivasam Complex - AC Deluxe",
        type: "TTD Guest House",
        location: "Tirupati",
        image: "https://images.pexels.com/photos/261102/pexels-photo-261102.jpeg?auto=compress&cs=tinysrgb&w=400&q=75",
        price: 600,
        features: ["AC Deluxe Rooms", "Spacious", "Modern Amenities", "TTD Official", "Temple Shuttle"],
        description: "Deluxe air-conditioned rooms at TTD Srinivasam Complex. Comfortable stay with all modern facilities for pilgrims.",
        category: "guesthouse",
        official: true
    },
    {
        id: 4,
        name: "TTD Madhavam Guest House",
        type: "TTD Guest House",
        location: "Tirupati",
        image: "https://images.pexels.com/photos/271743/pexels-photo-271743.jpeg?auto=compress&cs=tinysrgb&w=400&q=75",
        price: 800,
        features: ["AC Ordinary Suites", "Spacious Rooms", "Adjacent to Srinivasam", "TTD Official", "Restaurant"],
        description: "TTD Madhavam Guest House adjacent to Srinivasam Complex. AC suites with comfortable accommodation for families.",
        category: "guesthouse",
        official: true
    },
    {
        id: 5,
        name: "TTD Madhavam Guest House - Deluxe",
        type: "TTD Guest House",
        location: "Tirupati",
        image: "https://images.pexels.com/photos/261102/pexels-photo-261102.jpeg?auto=compress&cs=tinysrgb&w=400&q=75",
        price: 1000,
        features: ["AC Deluxe Suites", "Premium Rooms", "Modern Facilities", "TTD Official", "Temple Services"],
        description: "Deluxe AC suites at TTD Madhavam Guest House. Premium accommodation with excellent facilities for pilgrims.",
        category: "guesthouse",
        official: true
    },
    {
        id: 6,
        name: "TTD Vishnu Nivasam",
        type: "TTD Guest House",
        location: "Tirupati",
        image: "https://images.pexels.com/photos/271624/pexels-photo-271624.jpeg?auto=compress&cs=tinysrgb&w=400&q=75",
        price: 300,
        features: ["Non-AC Rooms", "Near Railway Station", "Basic Amenities", "TTD Official", "Easy Access"],
        description: "TTD Vishnu Nivasam located opposite Tirupati Railway Station. Convenient location for train travelers.",
        category: "dharmashala",
        official: true
    },
    {
        id: 7,
        name: "TTD Vishnu Nivasam - AC Rooms",
        type: "TTD Guest House",
        location: "Tirupati",
        image: "https://images.pexels.com/photos/271743/pexels-photo-271743.jpeg?auto=compress&cs=tinysrgb&w=400&q=75",
        price: 800,
        features: ["AC Rooms", "Near Railway Station", "Clean Rooms", "TTD Official", "Parking"],
        description: "Air-conditioned rooms at TTD Vishnu Nivasam. Perfect for pilgrims arriving by train with modern amenities.",
        category: "guesthouse",
        official: true
    },
    {
        id: 8,
        name: "TTD Vishnu Nivasam - AC Suites",
        type: "TTD Guest House",
        location: "Tirupati",
        image: "https://images.pexels.com/photos/261102/pexels-photo-261102.jpeg?auto=compress&cs=tinysrgb&w=400&q=75",
        price: 1300,
        features: ["AC Suites", "Spacious", "Premium Facilities", "TTD Official", "Near Station"],
        description: "Premium AC suites at TTD Vishnu Nivasam. Luxurious accommodation with excellent facilities near railway station.",
        category: "guesthouse",
        official: true
    },
    {
        id: 9,
        name: "Sri Venkateswara Dharmasala",
        type: "Dharmashala",
        location: "Tirupati",
        image: "https://images.pexels.com/photos/271624/pexels-photo-271624.jpeg?auto=compress&cs=tinysrgb&w=400&q=75",
        price: 50,
        features: ["Single Room", "Basic Facilities", "Very Affordable", "TTD Official", "Spiritual Atmosphere"],
        description: "Most affordable TTD accommodation. Single rooms at Sri Venkateswara Dharmasala opposite railway station. Perfect for budget pilgrims.",
        category: "dharmashala",
        official: true
    },
    {
        id: 10,
        name: "Sri Venkateswara Dharmasala - Double Room",
        type: "Dharmashala",
        location: "Tirupati",
        image: "https://images.pexels.com/photos/271624/pexels-photo-271624.jpeg?auto=compress&cs=tinysrgb&w=400&q=75",
        price: 100,
        features: ["Double Room", "Shared Facilities", "Budget Friendly", "TTD Official", "Clean Rooms"],
        description: "Double rooms at Sri Venkateswara Dharmasala. Very affordable accommodation for couples or friends traveling together.",
        category: "dharmashala",
        official: true
    },
    
    // Private Hotels
    {
        id: 11,
        name: "Luxury Hotel - Near Padmavathi Temple",
        type: "Hotel",
        location: "Tirupati",
        image: "https://images.pexels.com/photos/261102/pexels-photo-261102.jpeg?auto=compress&cs=tinysrgb&w=400&q=75",
        price: 4500,
        features: ["WiFi", "AC", "Breakfast", "Parking", "Temple Shuttle", "Restaurant", "Spa"],
        description: "5-star luxury hotel near Padmavathi Temple with modern amenities, perfect for pilgrims and tourists seeking comfort.",
        category: "hotel",
        official: false
    },
    {
        id: 12,
        name: "Deluxe Hotel - City Center",
        type: "Hotel",
        location: "Tirupati",
        image: "https://images.pexels.com/photos/271743/pexels-photo-271743.jpeg?auto=compress&cs=tinysrgb&w=400&q=75",
        price: 3000,
        features: ["WiFi", "AC", "Breakfast", "Restaurant", "24/7 Service", "Near ISKCON"],
        description: "Comfortable deluxe hotel in city center, walking distance to Padmavathi Temple and ISKCON Temple.",
        category: "hotel",
        official: false
    },
    {
        id: 13,
        name: "Budget Hotel - Near Railway Station",
        type: "Hotel",
        location: "Tirupati",
        image: "https://images.pexels.com/photos/271624/pexels-photo-271624.jpeg?auto=compress&cs=tinysrgb&w=400&q=75",
        price: 1500,
        features: ["WiFi", "AC", "Hot Water", "Parking", "24/7 Reception"],
        description: "Affordable budget hotel near railway station, ideal for budget-conscious pilgrims and tourists.",
        category: "hotel",
        official: false
    },
    
    // Homestays
    {
        id: 14,
        name: "Cozy Homestay - Family Friendly",
        type: "Homestay",
        location: "Tirupati",
        image: "https://images.pexels.com/photos/164595/pexels-photo-164595.jpeg?auto=compress&cs=tinysrgb&w=400&q=75",
        price: 2000,
        features: ["WiFi", "AC", "Home Cooked Meals", "Family Atmosphere", "Local Guide", "Vegetarian Food"],
        description: "Warm and welcoming homestay offering authentic local experience with home-cooked vegetarian meals. Perfect for families.",
        category: "homestay",
        official: false
    },
    {
        id: 15,
        name: "Premium Homestay - Near Temples",
        type: "Homestay",
        location: "Tirupati",
        image: "https://images.pexels.com/photos/261102/pexels-photo-261102.jpeg?auto=compress&cs=tinysrgb&w=400&q=75",
        price: 2800,
        features: ["WiFi", "AC", "Breakfast", "Dinner", "Temple Guidance", "Pickup Service", "Cultural Experience"],
        description: "Premium homestay with personalized service, temple visit assistance, and traditional South Indian hospitality.",
        category: "homestay",
        official: false
    },
    
    // Budget Lodges
    {
        id: 16,
        name: "Budget Lodge - Clean & Simple",
        type: "Lodge",
        location: "Tirupati",
        image: "https://images.pexels.com/photos/271624/pexels-photo-271624.jpeg?auto=compress&cs=tinysrgb&w=400&q=75",
        price: 1000,
        features: ["Clean Rooms", "Hot Water", "Fan", "24/7 Reception", "Near Temples", "Basic Amenities"],
        description: "Clean and simple budget lodge offering basic accommodation at very affordable rates for pilgrims.",
        category: "lodge",
        official: false
    },
    {
        id: 17,
        name: "AC Lodge - Value for Money",
        type: "Lodge",
        location: "Tirupati",
        image: "https://images.pexels.com/photos/271743/pexels-photo-271743.jpeg?auto=compress&cs=tinysrgb&w=400&q=75",
        price: 1800,
        features: ["AC", "WiFi", "Hot Water", "TV", "Parking", "24/7 Service"],
        description: "Air-conditioned lodge offering great value for money with all essential amenities.",
        category: "lodge",
        official: false
    }
];

// Tour Packages Data
const tourPackages = [
    {
        id: 1,
        code: "PKG0001",
        title: "Bangalore City Tour Package",
        duration: "8 Hours",
        route: "👉 Vidhana Soudha, Cubbon Park, Lalbagh Botanical Garden, ISKCON Temple 🔙 Return Drop at Bangalore",
        includes: ["Toll Charges", "Parking Fees", "Driver Bata"],
        price: 2500,
        image: "https://images.pexels.com/photos/261102/pexels-photo-261102.jpeg?auto=compress&cs=tinysrgb&w=400&q=75"
    },
    {
        id: 2,
        code: "PKG0002",
        title: "Mysore Palace & Coorg Package",
        duration: "1 Day",
        route: "👉 Mysore Palace, Chamundi Hills, Coorg Coffee Plantations 🔙 Return Drop at Bangalore",
        includes: ["Toll Charges", "Tax & Permit Fees", "Parking Fees", "Driver Bata"],
        price: 4500,
        image: "https://images.pexels.com/photos/271743/pexels-photo-271743.jpeg?auto=compress&cs=tinysrgb&w=400&q=75"
    },
    {
        id: 3,
        code: "PKG0003",
        title: "Hampi Heritage Tour Package",
        duration: "2 Days",
        route: "Day 1 👉 Virupaksha Temple, Hampi Bazaar, Vittala Temple (Night Halt) Day 2 👉 Lotus Palace, Elephant Stables, Royal Enclosure 🔙 Return Drop at Bangalore",
        includes: ["Toll Charges", "Tax & Permit Fees", "Parking Fees", "Driver Bata"],
        price: 8000,
        image: "https://images.pexels.com/photos/1571460/pexels-photo-1571460.jpeg?auto=compress&cs=tinysrgb&w=400&q=75"
    },
    {
        id: 4,
        code: "PKG0004",
        title: "Ooty & Coonoor Hill Station Package",
        duration: "1 Day",
        route: "👉 Ooty Lake, Botanical Gardens, Doddabetta Peak, Coonoor Tea Gardens 🔙 Return Drop at Coimbatore",
        includes: ["Toll Charges", "Tax & Permit Fees", "Parking Fees", "Driver Bata"],
        price: 4000,
        image: "https://images.pexels.com/photos/2581922/pexels-photo-2581922.jpeg?auto=compress&cs=tinysrgb&w=400&q=75"
    },
    {
        id: 5,
        code: "PKG0005",
        title: "Munnar Tea Gardens Package",
        duration: "1 Day",
        route: "👉 Tea Museum, Mattupetty Dam, Echo Point, Top Station 🔙 Return Drop at Kochi",
        includes: ["Toll Charges", "Tax & Permit Fees", "Parking Fees", "Driver Bata"],
        price: 3500,
        image: "https://images.pexels.com/photos/2581922/pexels-photo-2581922.jpeg?auto=compress&cs=tinysrgb&w=400&q=75"
    },
    {
        id: 6,
        code: "PKG0006",
        title: "Alleppey Backwaters Package",
        duration: "1 Day",
        route: "👉 Alleppey Backwaters, Houseboat Cruise, Marari Beach 🔙 Return Drop at Kochi",
        includes: ["Toll Charges", "Tax & Permit Fees", "Boat Charges", "Driver Bata"],
        price: 5000,
        image: "https://images.pexels.com/photos/271624/pexels-photo-271624.jpeg?auto=compress&cs=tinysrgb&w=400&q=75"
    },
    {
        id: 7,
        code: "PKG0007",
        title: "Chennai to Mahabalipuram Package",
        duration: "8 Hours",
        route: "👉 Mahabalipuram Temples, Shore Temple, Crocodile Bank, DakshinaChitra 🔙 Return Drop at Chennai",
        includes: ["Toll Charges", "Parking Fees", "Driver Bata"],
        price: 3000,
        image: "https://images.pexels.com/photos/271624/pexels-photo-271624.jpeg?auto=compress&cs=tinysrgb&w=400&q=75"
    },
    {
        id: 8,
        code: "PKG0008",
        title: "Hyderabad City Tour Package",
        duration: "1 Day",
        route: "👉 Charminar, Golconda Fort, Salar Jung Museum, Hussain Sagar Lake 🔙 Return Drop at Hyderabad",
        includes: ["Toll Charges", "Parking Fees", "Driver Bata"],
        price: 3500,
        image: "https://images.pexels.com/photos/261102/pexels-photo-261102.jpeg?auto=compress&cs=tinysrgb&w=400&q=75"
    }
];

// Vehicles Data
const vehicles = [
    {
        id: 1,
        name: "Etios / Swift Dzire",
        localPrice: 2000,
        outstationPrice: 15,
        fuelEfficiency: "10km per 1 liter diesel",
        capacity: 4,
        minKm: 300,
        image: "https://images.pexels.com/photos/116675/pexels-photo-116675.jpeg?auto=compress&cs=tinysrgb&w=400&q=75"
    },
    {
        id: 2,
        name: "Maruti Suzuki Ertiga",
        localPrice: 2500,
        outstationPrice: 19,
        fuelEfficiency: "10km per 1 liter diesel",
        capacity: 6,
        minKm: 300,
        image: "https://images.pexels.com/photos/116675/pexels-photo-116675.jpeg?auto=compress&cs=tinysrgb&w=400&q=75"
    },
    {
        id: 3,
        name: "Innova Crysta",
        localPrice: 3500,
        outstationPrice: 23,
        fuelEfficiency: "10km per 1 liter diesel",
        capacity: 7,
        minKm: 300,
        image: "https://images.pexels.com/photos/116675/pexels-photo-116675.jpeg?auto=compress&cs=tinysrgb&w=400&q=75"
    },
    {
        id: 4,
        name: "Fortuner",
        localPrice: 8500,
        outstationPrice: 45,
        fuelEfficiency: "8km per 1 liter diesel",
        capacity: 7,
        minKm: 300,
        image: "https://images.pexels.com/photos/116675/pexels-photo-116675.jpeg?auto=compress&cs=tinysrgb&w=400&q=75"
    },
    {
        id: 5,
        name: "Urbania",
        localPrice: 10000,
        outstationPrice: 50,
        fuelEfficiency: "5km per 1 liter diesel",
        capacity: 12,
        minKm: 350,
        image: "https://images.pexels.com/photos/116675/pexels-photo-116675.jpeg?auto=compress&cs=tinysrgb&w=400&q=75"
    },
    {
        id: 6,
        name: "Tempo 12 Seater",
        localPrice: 4500,
        outstationPrice: 26,
        fuelEfficiency: "8km per 1 liter diesel",
        capacity: 12,
        minKm: 350,
        image: "https://images.pexels.com/photos/116675/pexels-photo-116675.jpeg?auto=compress&cs=tinysrgb&w=400&q=75"
    },
    {
        id: 7,
        name: "Tempo 17 Seater",
        localPrice: 6000,
        outstationPrice: 35,
        fuelEfficiency: "6km per 1 liter diesel",
        capacity: 17,
        minKm: 350,
        image: "https://images.pexels.com/photos/116675/pexels-photo-116675.jpeg?auto=compress&cs=tinysrgb&w=400&q=75"
    },
    {
        id: 8,
        name: "Tempo 20 Seater",
        localPrice: 8000,
        outstationPrice: 45,
        fuelEfficiency: "5km per 1 liter diesel",
        capacity: 20,
        minKm: 350,
        image: "https://images.pexels.com/photos/116675/pexels-photo-116675.jpeg?auto=compress&cs=tinysrgb&w=400&q=75"
    },
    {
        id: 9,
        name: "27 Seater Mini Bus",
        localPrice: 10000,
        outstationPrice: 55,
        fuelEfficiency: "4km per 1 liter diesel",
        capacity: 27,
        minKm: 350,
        image: "https://images.pexels.com/photos/116675/pexels-photo-116675.jpeg?auto=compress&cs=tinysrgb&w=400&q=75"
    },
    {
        id: 10,
        name: "40 Seater AC Bus",
        localPrice: 15000,
        outstationPrice: 65,
        fuelEfficiency: "3km per 1 liter diesel",
        capacity: 40,
        minKm: 350,
        image: "https://images.pexels.com/photos/116675/pexels-photo-116675.jpeg?auto=compress&cs=tinysrgb&w=400&q=75"
    },
];

// Bikes and Scooters Data
const bikes = [
    {
        id: 1,
        name: "Motorcycle / Bike",
        type: "Bike",
        localPrice: 800,
        outstationPrice: 8,
        fuelEfficiency: "40-50km per 1 liter petrol",
        capacity: 2,
        minKm: 100,
        features: ["Helmet Provided", "Fuel Efficient", "Easy to Ride", "Insurance"],
        description: "Well-maintained motorcycle perfect for exploring Tirupati and nearby temples. Comfortable ride with excellent fuel efficiency.",
        image: "https://images.unsplash.com/photo-1558980664-769d59546b3d?w=400&q=75&h=600&fit=crop&auto=format"
    },
    {
        id: 2,
        name: "Scooter / Scooty",
        type: "Scooter",
        localPrice: 600,
        outstationPrice: 6,
        fuelEfficiency: "45-55km per 1 liter petrol",
        capacity: 2,
        minKm: 100,
        features: ["Helmet Provided", "Very Fuel Efficient", "Easy Handling", "Insurance", "Automatic"],
        description: "Easy-to-ride scooter ideal for city rides and temple visits. Perfect for beginners and those looking for convenience.",
        image: "https://images.unsplash.com/photo-1609630875171-b1321377ee65?w=400&q=75&h=600&fit=crop&auto=format"
    },
    {
        id: 3,
        name: "Premium Bike",
        type: "Premium Bike",
        localPrice: 1200,
        outstationPrice: 12,
        fuelEfficiency: "35-45km per 1 liter petrol",
        capacity: 2,
        minKm: 150,
        features: ["Helmet Provided", "Premium Model", "Powerful Engine", "Insurance", "Comfortable"],
        description: "Premium motorcycle with powerful engine and superior comfort. Perfect for longer trips and highway rides.",
        image: "https://images.unsplash.com/photo-1558980664-769d59546b3d?w=400&q=75&h=600&fit=crop&auto=format"
    },
    {
        id: 4,
        name: "Electric Scooter",
        type: "E-Scooter",
        localPrice: 700,
        outstationPrice: 7,
        fuelEfficiency: "Electric - No Fuel",
        capacity: 2,
        minKm: 80,
        features: ["Helmet Provided", "Eco-Friendly", "Silent Operation", "Low Maintenance", "Charging Included"],
        description: "Environment-friendly electric scooter perfect for eco-conscious travelers. Silent and smooth ride around Tirupati.",
        image: "https://images.unsplash.com/photo-1609630875171-b1321377ee65?w=400&q=75&h=600&fit=crop&auto=format"
    },
    {
        id: 5,
        name: "Sports Bike",
        type: "Sports Bike",
        localPrice: 1500,
        outstationPrice: 15,
        fuelEfficiency: "30-40km per 1 liter petrol",
        capacity: 2,
        minKm: 200,
        features: ["Helmet Provided", "High Performance", "Sporty Design", "Insurance", "Premium"],
        description: "High-performance sports bike for adventure enthusiasts. Powerful and stylish, perfect for thrill seekers.",
        image: "https://images.unsplash.com/photo-1558980664-769d59546b3d?w=400&q=75&h=600&fit=crop&auto=format"
    },
    {
        id: 6,
        name: "Standard Scooter",
        type: "Scooter",
        localPrice: 550,
        outstationPrice: 5,
        fuelEfficiency: "50-60km per 1 liter petrol",
        capacity: 2,
        minKm: 80,
        features: ["Helmet Provided", "Ultra Fuel Efficient", "Budget Friendly", "Insurance", "Reliable"],
        description: "Affordable and reliable standard scooter. Best value for money with excellent fuel economy.",
        image: "https://images.unsplash.com/photo-1609630875171-b1321377ee65?w=400&q=75&h=600&fit=crop&auto=format"
    }
];

// Testimonials Data
const testimonials = [
    {
        name: "Rajesh Kumar",
        date: "15 June 2024",
        rating: 5,
        review: "Great experience with Abhishek Travels. The driver was professional and the vehicle was clean and comfortable. Highly recommended!"
    },
    {
        name: "Priya Sharma",
        date: "13 June 2024",
        rating: 5,
        review: "Excellent service! The driver was extremely kind and friendly. We felt very safe throughout the journey. The car was clean and comfortable."
    },
    {
        name: "Mohammed Ali",
        date: "10 June 2024",
        rating: 5,
        review: "I had booked a cab for Bangalore to Mysore trip. Our driver was very nice and adjusted everything according to us. Wonderful journey!"
    },
    {
        name: "Anita Reddy",
        date: "8 June 2024",
        rating: 5,
        review: "Great experience with the cab service. The vehicle was clean and well-maintained. The driver was extremely polite and professional."
    },
    {
        name: "Suresh Patel",
        date: "7 June 2024",
        rating: 5,
        review: "Comfortable ride and good communication. The driver ensured we were comfortable and drove safely. Highly recommended!"
    },
    {
        name: "Lakshmi Nair",
        date: "6 June 2024",
        rating: 5,
        review: "Super service! Will comfortably ride in this taxi service again. Good communication and excellent driver."
    }
];

// DOM Elements
const navLinks = document.querySelectorAll('.nav-link');
const hamburger = document.querySelector('.hamburger');
const navMenu = document.querySelector('.nav-menu');
const destinationsGrid = document.getElementById('destinationsGrid');
const filterButtons = document.querySelectorAll('.filter-btn');
const roomsGrid = document.getElementById('roomsGrid');
const roomSearchForm = document.getElementById('roomSearchForm');
const roomDestination = document.getElementById('roomDestination');
const bookingModal = document.getElementById('bookingModal');
const closeModal = document.querySelector('.close-modal');
const bookingForm = document.getElementById('bookingForm');
const contactForm = document.getElementById('contactForm');
const accommodationFilters = document.querySelectorAll('.filter-btn-accommodation');

let selectedRoom = null;
let currentCategoryFilter = 'all';

// Navigation
function initNavigation() {
    // Smooth scrolling
    navLinks.forEach(link => {
        link.addEventListener('click', (e) => {
            e.preventDefault();
            const targetId = link.getAttribute('href');
            if (targetId.startsWith('#')) {
                const targetSection = document.querySelector(targetId);
                if (targetSection) {
                    targetSection.scrollIntoView({ behavior: 'smooth' });
                    navMenu.classList.remove('active');
                }
            }
        });
    });

    // Active link on scroll
    window.addEventListener('scroll', () => {
        const sections = document.querySelectorAll('section');
        const scrollPos = window.scrollY + 100;

        sections.forEach(section => {
            const top = section.offsetTop;
            const bottom = top + section.offsetHeight;
            const id = section.getAttribute('id');

            if (scrollPos >= top && scrollPos < bottom) {
                navLinks.forEach(link => {
                    link.classList.remove('active');
                    if (link.getAttribute('href') === `#${id}`) {
                        link.classList.add('active');
                    }
                });
            }
        });
    });

    // Mobile menu toggle
    hamburger.addEventListener('click', () => {
        navMenu.classList.toggle('active');
    });
}

// Display Temples
function displayTemples() {
    const templesGrid = document.getElementById('templesGrid');
    if (!templesGrid) return;
    
    // Sort temples - featured first
    const sortedTemples = [...temples].sort((a, b) => {
        if (a.featured && !b.featured) return -1;
        if (!a.featured && b.featured) return 1;
        return 0;
    });
    
    templesGrid.innerHTML = sortedTemples.map(temple => `
        <div class="temple-card ${temple.featured ? 'featured-temple' : ''}">
            ${temple.featured ? '<div class="featured-badge"><i class="fas fa-star"></i> Featured</div>' : ''}
            <img src="${temple.image || `https://picsum.photos/400/300?random=${temple.id + 100}`}" 
                 alt="${temple.name} - ${temple.location} - ${temple.deity}" 
                 class="temple-image" 
                 decoding="async"
                 onerror="this.onerror=null; this.src='https://via.placeholder.com/400x300/FF9933/FFFFFF?text=${encodeURIComponent(temple.name)}';">
            <div class="temple-content">
                <div class="temple-header">
                    <h3>${temple.name}</h3>
                    <p class="temple-location">
                        <i class="fas fa-map-marker-alt"></i>
                        ${temple.location}
                    </p>
                </div>
                <div class="temple-deity">
                    <strong><i class="fas fa-om"></i> Deity:</strong> ${temple.deity}
                </div>
                <p class="temple-description">${temple.description}</p>
                <div class="temple-significance">
                    <strong>Significance:</strong> ${temple.significance}
                </div>
                <div class="temple-timings">
                    <strong><i class="fas fa-clock"></i> Timings:</strong> ${temple.timings}
                </div>
                ${temple.special ? `<div class="temple-special">
                    <strong><i class="fas fa-star"></i> Special:</strong> ${temple.special}
                </div>` : ''}
                <div class="temple-features">
                    ${temple.features.map(feature => `
                        <span class="temple-feature">
                            <i class="fas fa-check-circle"></i>
                            ${feature}
                        </span>
                    `).join('')}
                </div>
                <div class="action-buttons">
                    <a href="tel:+919912325325" class="btn btn-primary"><i class="fas fa-phone"></i> Call Now</a>
                    <a href="https://wa.me/919912325325?text=Hi, I'm interested in visiting ${encodeURIComponent(temple.name)}" target="_blank" class="btn btn-secondary"><i class="fab fa-whatsapp"></i> WhatsApp</a>
                </div>
            </div>
        </div>
    `).join('');
}

// Display Destinations
function displayDestinations(state = 'all') {
    const filteredDestinations = state === 'all' 
        ? destinations 
        : destinations.filter(dest => dest.state === state);

    destinationsGrid.innerHTML = filteredDestinations.map(dest => `
        <div class="destination-card">
            <img src="${dest.image}" 
                 alt="${dest.name}, ${dest.state.replace('-', ' ')} - ${dest.description.substring(0, 60)}" 
                 class="destination-image"
                 decoding="async">
            <div class="destination-content">
                <span class="destination-state">${dest.state.replace('-', ' ').toUpperCase()}</span>
                <h3>${dest.name}</h3>
                <p>${dest.description}</p>
                <div class="destination-features">
                    ${dest.features.map(feature => `
                        <span class="feature-tag">
                            <i class="fas fa-check-circle"></i>
                            ${feature}
                        </span>
                    `).join('')}
                </div>
            </div>
        </div>
    `).join('');

    // Populate room destination dropdown
    const uniqueLocations = [...new Set(destinations.map(d => d.name))];
    roomDestination.innerHTML = '<option value="">Select Destination</option>' +
        uniqueLocations.map(loc => `<option value="${loc}">${loc}</option>`).join('');
}

// Filter Destinations
filterButtons.forEach(btn => {
    btn.addEventListener('click', () => {
        filterButtons.forEach(b => b.classList.remove('active'));
        btn.classList.add('active');
        const state = btn.getAttribute('data-state');
        displayDestinations(state);
    });
});

// Display Rooms
function displayRooms(filterLocation = '', filterCategory = 'all') {
    let filteredRooms = rooms;
    
    // Filter by location
    if (filterLocation) {
        filteredRooms = filteredRooms.filter(room => 
            room.location.toLowerCase() === filterLocation.toLowerCase()
        );
    }
    
    // Filter by category
    if (filterCategory !== 'all') {
        filteredRooms = filteredRooms.filter(room => 
            room.category === filterCategory
        );
    }

    if (filteredRooms.length === 0) {
        roomsGrid.innerHTML = '<p style="grid-column: 1/-1; text-align: center; padding: 2rem; font-size: 1.1rem;">No accommodations available for the selected filters. Please try different options.</p>';
        return;
    }

    roomsGrid.innerHTML = filteredRooms.map(room => `
        <div class="room-card">
            <div class="accommodation-type-badge ${room.official ? 'ttd-official' : ''}">${room.type}${room.official ? ' <i class="fas fa-check-circle"></i>' : ''}</div>
            ${room.official ? '<div class="ttd-badge">TTD Official</div>' : ''}
            <img src="${room.image}" 
                 alt="${room.name} - ${room.type} in ${room.location} - ₹${room.price}/night" 
                 class="room-image"
                 decoding="async"
                >
            <div class="room-content">
                <div class="room-header">
                    <div>
                        <h3 class="room-title">${room.name}</h3>
                        <p class="room-location">
                            <i class="fas fa-map-marker-alt"></i>
                            ${room.location}
                        </p>
                    </div>
                    <div class="room-price">
                        <div class="price-amount">₹${room.price}</div>
                        <div class="price-period">per night</div>
                    </div>
                </div>
                <p class="room-description">${room.description}</p>
                ${room.official ? '<p class="ttd-note"><strong>Note:</strong> TTD accommodations can be booked online at <a href="https://tirupatibalaji.ap.gov.in" target="_blank">tirupatibalaji.ap.gov.in</a> up to 60 days in advance. Valid ID required.</p>' : ''}
                <div class="room-features">
                    ${room.features.map(feature => `
                        <span class="room-feature">
                            <i class="fas fa-check"></i>
                            ${feature}
                        </span>
                    `).join('')}
                </div>
                <div class="action-buttons">
                    ${room.official ? 
                        `<a href="https://tirupatibalaji.ap.gov.in" target="_blank" class="btn btn-primary btn-block">Book via TTD</a>` :
                        `<a href="tel:+919912325325" class="btn btn-primary"><i class="fas fa-phone"></i> Call Now</a>
                        <a href="https://wa.me/919912325325?text=Hi, I'm interested in booking ${encodeURIComponent(room.name)}" target="_blank" class="btn btn-secondary"><i class="fab fa-whatsapp"></i> WhatsApp</a>`
                    }
                </div>
            </div>
        </div>
    `).join('');
}

// Accommodation Category Filters
accommodationFilters.forEach(btn => {
    btn.addEventListener('click', () => {
        accommodationFilters.forEach(b => b.classList.remove('active'));
        btn.classList.add('active');
        currentCategoryFilter = btn.getAttribute('data-category');
        const destination = roomDestination.value;
        displayRooms(destination, currentCategoryFilter);
    });
});

// Room Search
roomSearchForm.addEventListener('submit', (e) => {
    e.preventDefault();
    const destination = roomDestination.value;
    displayRooms(destination, currentCategoryFilter);
    
    // Scroll to rooms grid
    document.getElementById('rooms').scrollIntoView({ behavior: 'smooth' });
});

// Booking Modal (for rooms - keeping for backward compatibility)
function openBookingModal(roomId) {
    if (typeof roomId === 'number') {
        openBookingModal('room', roomId);
    }
}

// Generic booking modal opener (for sticky button)
function openGenericBookingModal() {
    const bookingModal = document.getElementById('bookingModal');
    if (bookingModal) {
        // Clear any previous service selection
        const serviceNameInput = document.getElementById('modalServiceName');
        if (serviceNameInput) {
            serviceNameInput.value = 'General Booking Inquiry';
        }
        bookingModal.style.display = 'block';
    }
}

closeModal.addEventListener('click', () => {
    bookingModal.style.display = 'none';
});

window.addEventListener('click', (e) => {
    if (e.target === bookingModal) {
        bookingModal.style.display = 'none';
    }
});

// Booking Form
bookingForm.addEventListener('submit', (e) => {
    e.preventDefault();
    trackConversion('submit', 'Form', 'Booking Form', 1);
    const name = document.getElementById('bookingName').value;
    const email = document.getElementById('bookingEmail').value;
    const phone = document.getElementById('bookingPhone').value;
    
    // Simulate booking
    alert(`Thank you ${name}! Your booking request for ${selectedRoom.name} has been received. We will contact you at ${email} or ${phone} shortly.`);
    
    bookingModal.style.display = 'none';
    bookingForm.reset();
});

// Update price when dates change
document.getElementById('modalCheckIn')?.addEventListener('change', updatePrice);
document.getElementById('modalCheckOut')?.addEventListener('change', updatePrice);

function updatePrice() {
    if (!selectedRoom) return;
    const checkIn = new Date(document.getElementById('modalCheckIn').value);
    const checkOut = new Date(document.getElementById('modalCheckOut').value);
    
    if (checkIn && checkOut && checkOut > checkIn) {
        const nights = Math.ceil((checkOut - checkIn) / (1000 * 60 * 60 * 24));
        const totalPrice = selectedRoom.price * nights;
        document.getElementById('modalPrice').value = `₹${totalPrice} (${nights} night${nights > 1 ? 's' : ''})`;
    }
}

// Contact Form
contactForm.addEventListener('submit', (e) => {
    e.preventDefault();
    trackConversion('submit', 'Form', 'Contact Form', 1);
    alert('Thank you for your message! We will get back to you soon.');
    contactForm.reset();
});

// Newsletter Form
document.querySelector('.newsletter-form')?.addEventListener('submit', (e) => {
    e.preventDefault();
    alert('Thank you for subscribing to our newsletter!');
    e.target.querySelector('input').value = '';
});

// Display Tour Packages
function displayPackages() {
    const packagesGrid = document.getElementById('packagesGrid');
    if (!packagesGrid) return;
    
    packagesGrid.innerHTML = tourPackages.map(pkg => `
        <div class="package-card">
            <img src="${pkg.image}" 
                 alt="${pkg.title} - ${pkg.duration} tour package - ${pkg.code}" 
                 class="package-image"
                 decoding="async"
                >
            <div class="package-content">
                <div class="package-header">
                    <span class="package-code">Package Code: <strong>${pkg.code}</strong></span>
                    <span class="package-duration">Duration: <strong>${pkg.duration}</strong></span>
                </div>
                <h3>${pkg.title}</h3>
                <div class="package-route">
                    <strong>Route Plan:</strong>
                    <p>${pkg.route}</p>
                </div>
                <div class="package-includes">
                    <strong>Package Includes:</strong>
                    <ul>
                        ${pkg.includes.map(item => `<li>– ${item}</li>`).join('')}
                    </ul>
                </div>
                <div class="package-note">
                    <em><strong>Note:</strong> Only the driver's food has to be provided by the customer.</em>
                </div>
                <div class="package-price">Starting from ₹${pkg.price}</div>
                <div class="action-buttons">
                    <a href="tel:+919912325325" class="btn btn-primary"><i class="fas fa-phone"></i> Call Now</a>
                    <a href="https://wa.me/919912325325?text=Hi, I'm interested in ${encodeURIComponent(pkg.title)} (${pkg.code})" target="_blank" class="btn btn-secondary"><i class="fab fa-whatsapp"></i> WhatsApp</a>
                </div>
            </div>
        </div>
    `).join('');
}

// Display Vehicles
function displayVehicles() {
    const vehiclesGrid = document.getElementById('vehiclesGrid');
    if (!vehiclesGrid) return;
    
    vehiclesGrid.innerHTML = vehicles.map(vehicle => `
        <div class="vehicle-card">
            <img src="${vehicle.image}" 
                 alt="${vehicle.name} - ${vehicle.type} rental for ${vehicle.capacity} passengers" 
                 class="vehicle-image"
                 decoding="async"
                >
            <div class="vehicle-content">
                <h3>${vehicle.name}</h3>
                <div class="vehicle-pricing">
                    <div class="pricing-section">
                        <strong>Local</strong>
                        <p>Day rent ₹${vehicle.localPrice}/-</p>
                        <p>${vehicle.fuelEfficiency}</p>
                    </div>
                    <div class="pricing-section">
                        <strong>Out Station</strong>
                        <p>₹${vehicle.outstationPrice}/- per km</p>
                        <p>${vehicle.capacity} persons allowed</p>
                    </div>
                </div>
                <div class="vehicle-note">
                    <em>*Minimum ${vehicle.minKm}km</em>
                </div>
                <div class="action-buttons">
                    <a href="tel:+919912325325" class="btn btn-primary"><i class="fas fa-phone"></i> Call Now</a>
                    <a href="https://wa.me/919912325325?text=Hi, I'm interested in renting ${encodeURIComponent(vehicle.name)}" target="_blank" class="btn btn-secondary"><i class="fab fa-whatsapp"></i> WhatsApp</a>
                </div>
            </div>
        </div>
    `).join('');
}

// Display Bikes and Scooters
function displayBikes() {
    const bikesGrid = document.getElementById('bikesGrid');
    if (!bikesGrid) return;
    
    bikesGrid.innerHTML = bikes.map(bike => `
        <div class="bike-card">
            <div class="bike-type-badge">${bike.type}</div>
            <img src="${bike.image}" 
                 alt="${bike.name} - ${bike.type} rental in Tirupati" 
                 class="bike-image"
                 decoding="async"
                >
            <div class="bike-content">
                <h3>${bike.name}</h3>
                <p class="bike-description">${bike.description}</p>
                <div class="bike-pricing">
                    <div class="pricing-section">
                        <strong>Local</strong>
                        <p class="price-highlight">₹${bike.localPrice}/- per day</p>
                        <p>${bike.fuelEfficiency}</p>
                    </div>
                    <div class="pricing-section">
                        <strong>Out Station</strong>
                        <p class="price-highlight">₹${bike.outstationPrice}/- per km</p>
                        <p>${bike.capacity} persons</p>
                    </div>
                </div>
                <div class="bike-features">
                    ${bike.features.map(feature => `
                        <span class="bike-feature">
                            <i class="fas fa-check-circle"></i>
                            ${feature}
                        </span>
                    `).join('')}
                </div>
                <div class="bike-note">
                    <em>*Minimum ${bike.minKm}km</em>
                </div>
                <div class="action-buttons">
                    <a href="tel:+919912325325" class="btn btn-primary"><i class="fas fa-phone"></i> Call Now</a>
                    <a href="https://wa.me/919912325325?text=Hi, I'm interested in renting ${encodeURIComponent(bike.name)}" target="_blank" class="btn btn-secondary"><i class="fab fa-whatsapp"></i> WhatsApp</a>
                </div>
            </div>
        </div>
    `).join('');
}

// Display Testimonials
function displayTestimonials() {
    const testimonialsGrid = document.getElementById('testimonialsGrid');
    if (!testimonialsGrid) return;
    
    testimonialsGrid.innerHTML = testimonials.map(testimonial => `
        <div class="testimonial-card">
            <div class="testimonial-rating">
                ${'★'.repeat(testimonial.rating)}
            </div>
            <p class="testimonial-review">"${testimonial.review}"</p>
            <div class="testimonial-author">
                <strong>${testimonial.name}</strong>
                <span>${testimonial.date}</span>
            </div>
        </div>
    `).join('');
}

// Statistics Counter Animation
function animateStatistics() {
    const statNumbers = document.querySelectorAll('.stat-number');
    
    const observerOptions = {
        threshold: 0.5
    };
    
    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                const target = parseInt(entry.target.getAttribute('data-target'));
                const duration = 2000;
                const increment = target / (duration / 16);
                let current = 0;
                
                const timer = setInterval(() => {
                    current += increment;
                    if (current >= target) {
                        entry.target.textContent = target;
                        clearInterval(timer);
                    } else {
                        entry.target.textContent = Math.floor(current);
                    }
                }, 16);
                
                observer.unobserve(entry.target);
            }
        });
    }, observerOptions);
    
    statNumbers.forEach(stat => observer.observe(stat));
}

// Updated Booking Modal Function
function openBookingModal(type, id) {
    let serviceData = null;
    let serviceName = '';
    let price = 0;
    
    if (type === 'package') {
        serviceData = tourPackages.find(p => p.id === id);
        serviceName = serviceData.title;
        price = serviceData.price;
    } else if (type === 'vehicle') {
        serviceData = vehicles.find(v => v.id === id);
        serviceName = serviceData.name;
        price = serviceData.localPrice;
    } else if (type === 'room') {
        serviceData = rooms.find(r => r.id === id);
        serviceName = serviceData.name + ' - ' + serviceData.location;
        price = serviceData.price;
    }
    
    if (!serviceData) return;
    
    selectedRoom = serviceData;
    selectedRoom.type = type;
    
    document.getElementById('modalServiceName').value = serviceName;
    document.getElementById('modalPrice').value = `₹${price}`;
    
    const today = new Date().toISOString().split('T')[0];
    document.getElementById('modalTravelDate').setAttribute('min', today);
    
    bookingModal.style.display = 'block';
}

// Update booking form handler
const originalBookingHandler = bookingForm?.onsubmit;
if (bookingForm) {
    bookingForm.onsubmit = null;
    bookingForm.addEventListener('submit', (e) => {
        e.preventDefault();
        trackConversion('submit', 'Form', 'Booking Form', 1);
        const name = document.getElementById('bookingName').value;
        const email = document.getElementById('bookingEmail').value;
        const phone = document.getElementById('bookingPhone').value;
        const serviceName = document.getElementById('modalServiceName').value;
        
        alert(`Thank you ${name}! Your booking request for ${serviceName} has been received. We will contact you at ${email} or ${phone} shortly.`);
        
        bookingModal.style.display = 'none';
        bookingForm.reset();
    });
}

// Set minimum date for check-in
const today = new Date().toISOString().split('T')[0];
document.getElementById('checkIn')?.setAttribute('min', today);
document.getElementById('checkOut')?.setAttribute('min', today);
document.getElementById('modalTravelDate')?.setAttribute('min', today);

// Mobile optimizations
function initMobileOptimizations() {
    // Improve modal scrolling on mobile
    const modal = document.getElementById('bookingModal');
    if (modal) {
        const modalContent = modal.querySelector('.modal-content');
        if (modalContent) {
            // Prevent modal content clicks from closing modal
            modalContent.addEventListener('touchstart', (e) => {
                e.stopPropagation();
            });
        }
        
        // Close modal on outside tap (mobile)
        modal.addEventListener('touchstart', (e) => {
            if (e.target === modal) {
                modal.style.display = 'none';
            }
        });
    }
    
    // Improve form inputs on mobile - ensure minimum touch target size
    const inputs = document.querySelectorAll('input, select, textarea, button, .btn');
    inputs.forEach(input => {
        if (input.offsetHeight < 44) {
            input.style.minHeight = '44px';
        }
    });
    
    // Improve hamburger menu touch target
    const hamburger = document.querySelector('.hamburger');
    if (hamburger && hamburger.offsetHeight < 44) {
        hamburger.style.minHeight = '44px';
        hamburger.style.minWidth = '44px';
        hamburger.style.display = 'flex';
        hamburger.style.alignItems = 'center';
        hamburger.style.justifyContent = 'center';
    }
}

// Lazy loading is handled natively by browser with attribute
// No custom implementation needed - browser handles it efficiently

// FAQ Accordion Functionality
function initFAQ() {
    const faqItems = document.querySelectorAll('.faq-item');
    
    faqItems.forEach(item => {
        const question = item.querySelector('.faq-question');
        if (question) {
            question.addEventListener('click', () => {
                const isActive = item.classList.contains('active');
                
                // Close all FAQ items
                faqItems.forEach(faqItem => {
                    faqItem.classList.remove('active');
                });
                
                // Open clicked item if it wasn't active
                if (!isActive) {
                    item.classList.add('active');
                    // Track FAQ interaction
                    if (typeof gtag !== 'undefined') {
                        gtag('event', 'faq_open', {
                            'event_category': 'Engagement',
                            'event_label': question.querySelector('h4')?.textContent || 'FAQ Question'
                        });
                    }
                }
            });
        }
    });
}

// Conversion Tracking
function trackConversion(action, category, label, value) {
    if (typeof gtag !== 'undefined') {
        gtag('event', action, {
            'event_category': category,
            'event_label': label,
            'value': value
        });
    }
}

// Call Tracking - Enhanced for Google Ads
function trackPhoneCall(source) {
    if (typeof gtag !== 'undefined') {
        gtag('event', 'phone_call', {
            'event_category': 'Contact',
            'event_label': source || 'Phone Call',
            'value': 1
        });
        // For Google Ads conversion tracking
        gtag('event', 'conversion', {
            'send_to': 'AW-CONVERSION_ID/CONVERSION_LABEL', // Replace with your conversion ID
            'event_category': 'Contact',
            'event_label': source || 'Phone Call'
        });
    }
}

// WhatsApp Click Tracking - Enhanced for Google Ads
function trackWhatsAppClick(source) {
    if (typeof gtag !== 'undefined') {
        gtag('event', 'whatsapp_click', {
            'event_category': 'Contact',
            'event_label': source || 'WhatsApp Click',
            'value': 1
        });
        // For Google Ads conversion tracking
        gtag('event', 'conversion', {
            'send_to': 'AW-CONVERSION_ID/CONVERSION_LABEL', // Replace with your conversion ID
            'event_category': 'Contact',
            'event_label': source || 'WhatsApp Click'
        });
    }
}

// Enhanced Form Submission Tracking
function enhanceFormTracking() {
    // Track phone clicks
    document.querySelectorAll('a[href^="tel:"]').forEach(link => {
        link.addEventListener('click', () => {
            trackConversion('click', 'Contact', 'Phone Call', 1);
        });
    });
    
    // Track WhatsApp clicks
    document.querySelectorAll('a[href*="wa.me"]').forEach(link => {
        link.addEventListener('click', () => {
            trackConversion('click', 'Contact', 'WhatsApp', 1);
        });
    });
    
    // Track package/book button clicks
    document.querySelectorAll('.btn-primary, .book-btn').forEach(btn => {
        if (!btn.hasAttribute('data-tracked')) {
            btn.setAttribute('data-tracked', 'true');
            btn.addEventListener('click', () => {
                trackConversion('click', 'CTA', 'Book Now Button', 1);
            });
        }
    });
    
    // Track scroll depth (important for engagement)
    let maxScroll = 0;
    window.addEventListener('scroll', () => {
        const scrollPercent = Math.round((window.scrollY / (document.documentElement.scrollHeight - window.innerHeight)) * 100);
        if (scrollPercent > maxScroll && scrollPercent % 25 === 0) {
            maxScroll = scrollPercent;
            if (typeof gtag !== 'undefined') {
                gtag('event', 'scroll', {
                    'event_category': 'Engagement',
                    'event_label': `${scrollPercent}% scroll depth`,
                    'value': scrollPercent
                });
            }
        }
    });
    
    // Track time on page
    let timeOnPage = 0;
    setInterval(() => {
        timeOnPage += 30;
        if (timeOnPage === 30 || timeOnPage === 60 || timeOnPage === 120) {
            if (typeof gtag !== 'undefined') {
                gtag('event', 'time_on_page', {
                    'event_category': 'Engagement',
                    'event_label': `${timeOnPage} seconds`,
                    'value': timeOnPage
                });
            }
        }
    }, 30000);
}

// Quick Booking Form Handler
function initQuickBookingForm() {
    const quickBookingForm = document.getElementById('quickBookingForm');
    const quickPickup = document.getElementById('quickPickup');
    const quickDrop = document.getElementById('quickDrop');
    const quickDate = document.getElementById('quickDate');
    const quickVehicle = document.getElementById('quickVehicle');
    const quickPriceDisplay = document.getElementById('quickPriceDisplay');
    const quickPriceAmount = document.getElementById('quickPriceAmount');
    
    if (!quickBookingForm) return;
    
    // Calculate price based on route and vehicle
    function calculateQuickPrice() {
        const pickup = quickPickup?.value.toLowerCase().trim() || '';
        const drop = quickDrop?.value.toLowerCase().trim() || '';
        const vehicle = quickVehicle?.value || '';
        
        if (!pickup || !drop || !vehicle) {
            quickPriceDisplay.style.display = 'none';
            return;
        }
        
        // Route distance mapping (in km)
        const routeDistances = {
            'tirupati to bangalore': 250,
            'bangalore to tirupati': 250,
            'tirupati to chennai': 150,
            'chennai to tirupati': 150,
            'tirupati to hyderabad': 550,
            'hyderabad to tirupati': 550,
            'tirupati to srikalahasti': 38,
            'srikalahasti to tirupati': 38,
            'tirupati to kanipakam': 70,
            'kanipakam to tirupati': 70,
            'tirupati to kanchipuram': 120,
            'kanchipuram to tirupati': 120,
            'tirupati to mahabalipuram': 180,
            'mahabalipuram to tirupati': 180,
            'tirupati to rameshwaram': 550,
            'rameshwaram to tirupati': 550
        };
        
        const routeKey = `${pickup} to ${drop}`;
        const reverseRouteKey = `${drop} to ${pickup}`;
        const distance = routeDistances[routeKey] || routeDistances[reverseRouteKey] || null;
        
        // Vehicle base prices (per km for outstation, per day for local)
        const vehiclePrices = {
            'sedan': { local: 600, perKm: 8 },
            'ertiga': { local: 800, perKm: 10 },
            'innova': { local: 1000, perKm: 12 },
            'swift-dzire': { local: 600, perKm: 8 },
            'toyota-fortuner': { local: 1200, perKm: 14 },
            'mahindra-xylo': { local: 900, perKm: 11 },
            'tempo-12': { local: 2000, perKm: 15 },
            'tempo-16': { local: 2500, perKm: 18 },
            'tempo-20': { local: 3000, perKm: 20 },
            'urbania-12': { local: 2200, perKm: 16 },
            'urbania-16': { local: 2700, perKm: 19 },
            'bus-27': { local: 4000, perKm: 25 },
            'bus-40': { local: 5000, perKm: 30 },
            'bus-45': { local: 5500, perKm: 32 },
            'bike': { local: 600, perKm: 6 },
            'other': { local: 0, perKm: 0 } // Will show "Contact for price"
        };
        
        const vehiclePrice = vehiclePrices[vehicle];
        if (!vehiclePrice) {
            quickPriceDisplay.style.display = 'none';
            return;
        }
        
        let price = 0;
        if (vehicle === 'other') {
            quickPriceAmount.textContent = 'Contact for Price';
            quickPriceDisplay.style.display = 'block';
            return;
        }
        
        if (distance && distance > 50) {
            // Outstation: per km pricing
            price = distance * vehiclePrice.perKm;
        } else {
            // Local: per day pricing
            price = vehiclePrice.local;
        }
        
        quickPriceAmount.textContent = `₹${price.toLocaleString('en-IN')}`;
        quickPriceDisplay.style.display = 'block';
    }
    
    // Show/hide notes field based on vehicle selection
    const quickNotesGroup = document.getElementById('quickNotesGroup');
    const quickNotes = document.getElementById('quickNotes');
    
    function toggleNotesField() {
        if (quickVehicle?.value === 'other') {
            quickNotesGroup.style.display = 'block';
            quickNotes.setAttribute('required', 'required');
        } else {
            quickNotesGroup.style.display = 'none';
            quickNotes.removeAttribute('required');
            quickNotes.value = '';
        }
    }
    
    // Add event listeners for price calculation
    if (quickPickup) quickPickup.addEventListener('input', calculateQuickPrice);
    if (quickDrop) quickDrop.addEventListener('input', calculateQuickPrice);
    if (quickVehicle) {
        quickVehicle.addEventListener('change', () => {
            calculateQuickPrice();
            toggleNotesField();
        });
    }
    
    // Form submission
    quickBookingForm.addEventListener('submit', (e) => {
        e.preventDefault();
        
        const name = document.getElementById('quickName')?.value;
        const phone = document.getElementById('quickPhone')?.value;
        const pickup = quickPickup?.value;
        const drop = quickDrop?.value;
        const date = quickDate?.value;
        const vehicle = quickVehicle?.value;
        const notes = quickNotes?.value || '';
        
        if (!name || !phone || !pickup || !drop || !date || !vehicle) {
            alert('Please fill all required fields');
            return;
        }
        
        if (vehicle === 'other' && !notes.trim()) {
            alert('Please specify the vehicle type or requirements in the notes field');
            return;
        }
        
        // Track conversion
        if (typeof gtag !== 'undefined') {
            gtag('event', 'submit', {
                'event_category': 'Form',
                'event_label': 'Quick Booking Form',
                'value': 1
            });
        }
        
        // Get vehicle display name
        const vehicleSelect = document.getElementById('quickVehicle');
        const vehicleDisplayName = vehicleSelect.options[vehicleSelect.selectedIndex].text;
        
        // Create WhatsApp message
        let message = `Hi, I want to book Tirupati cab service:

Name: ${name}
Phone: ${phone}
Pickup: ${pickup}
Drop: ${drop}
Date: ${date}
Vehicle: ${vehicleDisplayName}`;
        
        if (notes.trim()) {
            message += `\nNotes: ${notes}`;
        }
        
        const whatsappUrl = `https://wa.me/919912325325?text=${encodeURIComponent(message)}`;
        window.open(whatsappUrl, '_blank');
        
        // Show confirmation
        alert(`Thank you ${name}! We've opened WhatsApp for you. Please send the message to confirm your booking.`);
        
        // Reset form
        quickBookingForm.reset();
        quickPriceDisplay.style.display = 'none';
        quickNotesGroup.style.display = 'none';
        quickNotes.removeAttribute('required');
    });
}

// Initialize
document.addEventListener('DOMContentLoaded', () => {
    initNavigation();
    displayTemples();
    displayDestinations();
    displayRooms('Tirupati', 'all'); // Default to Tirupati & Other Cities
    displayPackages();
    displayVehicles();
    displayBikes();
    displayTestimonials();
    animateStatistics();
    initMobileOptimizations();
    initFAQ();
    enhanceFormTracking();
    initQuickBookingForm();
    
    // Set footer links
    document.querySelectorAll('.footer-section a[data-state]').forEach(link => {
        link.addEventListener('click', (e) => {
            e.preventDefault();
            const state = link.getAttribute('data-state');
            document.querySelector(`.filter-btn[data-state="${state}"]`)?.click();
            document.getElementById('destinations').scrollIntoView({ behavior: 'smooth' });
        });
    });
});

