// Destinations Data - South India
const destinations = [
    // Karnataka
    {
        name: "Bangalore",
        state: "karnataka",
        image: "https://images.unsplash.com/photo-1587330979470-3585a3b0e0a0?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
        description: "The Silicon Valley of India, known for its gardens, parks, and vibrant tech culture.",
        features: ["Tech Hub", "Gardens", "Nightlife"]
    },
    {
        name: "Mysore",
        state: "karnataka",
        image: "https://images.unsplash.com/photo-1584464491033-06628f3a6b7b?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
        description: "Famous for the magnificent Mysore Palace and rich cultural heritage.",
        features: ["Palace", "Heritage", "Culture"]
    },
    {
        name: "Coorg",
        state: "karnataka",
        image: "https://images.unsplash.com/photo-1506905925346-21bda4d32df4?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
        description: "Scotland of India, known for coffee plantations and misty hills.",
        features: ["Coffee", "Hills", "Nature"]
    },
    {
        name: "Hampi",
        state: "karnataka",
        image: "https://images.unsplash.com/photo-1578662996442-48f60103fc96?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
        description: "UNESCO World Heritage Site with ancient ruins and temples.",
        features: ["Heritage", "Ruins", "Temples"]
    },
    {
        name: "Gokarna",
        state: "karnataka",
        image: "https://images.unsplash.com/photo-1507525428034-b723cf961d3e?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
        description: "Beach paradise with pristine shores and spiritual vibes.",
        features: ["Beaches", "Spiritual", "Relaxation"]
    },
    {
        name: "Chikmagalur",
        state: "karnataka",
        image: "https://images.unsplash.com/photo-1506905925346-21bda4d32df4?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
        description: "Coffee land with scenic mountains and waterfalls.",
        features: ["Coffee", "Mountains", "Waterfalls"]
    },
    
    // Tamil Nadu
    {
        name: "Chennai",
        state: "tamil-nadu",
        image: "https://images.unsplash.com/photo-1584464491033-06628f3a6b7b?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
        description: "Cultural capital of Tamil Nadu with beautiful beaches and temples.",
        features: ["Beaches", "Temples", "Culture"]
    },
    {
        name: "Ooty",
        state: "tamil-nadu",
        image: "https://images.unsplash.com/photo-1506905925346-21bda4d32df4?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
        description: "Queen of Hill Stations with tea gardens and cool climate.",
        features: ["Hill Station", "Tea Gardens", "Cool Climate"]
    },
    {
        name: "Kodaikanal",
        state: "tamil-nadu",
        image: "https://images.unsplash.com/photo-1506905925346-21bda4d32df4?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
        description: "Princess of Hill Stations with beautiful lakes and forests.",
        features: ["Lake", "Forests", "Scenic"]
    },
    {
        name: "Madurai",
        state: "tamil-nadu",
        image: "https://images.unsplash.com/photo-1578662996442-48f60103fc96?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
        description: "Ancient city famous for Meenakshi Temple and rich history.",
        features: ["Temples", "History", "Architecture"]
    },
    {
        name: "Rameswaram",
        state: "tamil-nadu",
        image: "https://images.unsplash.com/photo-1507525428034-b723cf961d3e?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
        description: "Sacred island town with beautiful beaches and temples.",
        features: ["Spiritual", "Beaches", "Pilgrimage"]
    },
    {
        name: "Kanyakumari",
        state: "tamil-nadu",
        image: "https://images.unsplash.com/photo-1507525428034-b723cf961d3e?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
        description: "Southernmost tip of India with stunning sunrise and sunset views.",
        features: ["Sunrise", "Sunset", "Beaches"]
    },
    
    // Kerala
    {
        name: "Munnar",
        state: "kerala",
        image: "https://images.unsplash.com/photo-1506905925346-21bda4d32df4?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
        description: "Tea country with rolling hills and misty valleys.",
        features: ["Tea Gardens", "Hills", "Nature"]
    },
    {
        name: "Alleppey",
        state: "kerala",
        image: "https://images.unsplash.com/photo-1507525428034-b723cf961d3e?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
        description: "Venice of the East with beautiful backwaters and houseboats.",
        features: ["Backwaters", "Houseboats", "Canals"]
    },
    {
        name: "Kochi",
        state: "kerala",
        image: "https://images.unsplash.com/photo-1584464491033-06628f3a6b7b?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
        description: "Port city with colonial architecture and spice markets.",
        features: ["Port", "Colonial", "Spices"]
    },
    {
        name: "Wayanad",
        state: "kerala",
        image: "https://images.unsplash.com/photo-1506905925346-21bda4d32df4?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
        description: "Green paradise with dense forests and wildlife.",
        features: ["Forests", "Wildlife", "Adventure"]
    },
    {
        name: "Thekkady",
        state: "kerala",
        image: "https://images.unsplash.com/photo-1506905925346-21bda4d32df4?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
        description: "Wildlife sanctuary and spice plantations.",
        features: ["Wildlife", "Spices", "Nature"]
    },
    {
        name: "Kovalam",
        state: "kerala",
        image: "https://images.unsplash.com/photo-1507525428034-b723cf961d3e?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
        description: "Famous beach destination with golden sands.",
        features: ["Beaches", "Resorts", "Relaxation"]
    },
    
    // Andhra Pradesh
    {
        name: "Visakhapatnam",
        state: "andhra-pradesh",
        image: "https://images.unsplash.com/photo-1507525428034-b723cf961d3e?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
        description: "Jewel of the East Coast with beautiful beaches and hills.",
        features: ["Beaches", "Hills", "Port"]
    },
    {
        name: "Tirupati",
        state: "andhra-pradesh",
        image: "https://images.unsplash.com/photo-1578662996442-48f60103fc96?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
        description: "Famous pilgrimage destination with ancient temples.",
        features: ["Pilgrimage", "Temples", "Spiritual"]
    },
    {
        name: "Araku Valley",
        state: "andhra-pradesh",
        image: "https://images.unsplash.com/photo-1506905925346-21bda4d32df4?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
        description: "Scenic hill station with coffee plantations and waterfalls.",
        features: ["Hill Station", "Coffee", "Waterfalls"]
    },
    {
        name: "Vijayawada",
        state: "andhra-pradesh",
        image: "https://images.unsplash.com/photo-1584464491033-06628f3a6b7b?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
        description: "Commercial hub on the banks of Krishna River.",
        features: ["River", "Temples", "Culture"]
    },
    
    // Telangana
    {
        name: "Hyderabad",
        state: "telangana",
        image: "https://images.unsplash.com/photo-1587330979470-3585a3b0e0a0?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
        description: "City of Pearls with rich history and delicious biryani.",
        features: ["History", "Food", "Culture"]
    },
    {
        name: "Warangal",
        state: "telangana",
        image: "https://images.unsplash.com/photo-1578662996442-48f60103fc96?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
        description: "Ancient city with historic forts and temples.",
        features: ["Forts", "Temples", "History"]
    }
];

// Rooms Data
const rooms = [
    {
        id: 1,
        name: "Luxury Suite",
        location: "Bangalore",
        image: "https://images.unsplash.com/photo-1611892440504-42a792e24d32?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
        price: 3500,
        features: ["WiFi", "AC", "Breakfast", "Pool"],
        description: "Spacious suite with modern amenities and city view."
    },
    {
        id: 2,
        name: "Deluxe Room",
        location: "Mysore",
        image: "https://images.unsplash.com/photo-1631049307264-da0ec9d70304?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
        price: 2500,
        features: ["WiFi", "AC", "Breakfast"],
        description: "Comfortable room with heritage view."
    },
    {
        id: 3,
        name: "Beach Resort",
        location: "Gokarna",
        image: "https://images.unsplash.com/photo-1566073771259-6a8506099945?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
        price: 4000,
        features: ["WiFi", "AC", "Breakfast", "Beach Access"],
        description: "Beachfront resort with stunning ocean views."
    },
    {
        id: 4,
        name: "Hill View Cottage",
        location: "Coorg",
        image: "https://images.unsplash.com/photo-1578683010236-d716f9a3f461?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
        price: 3000,
        features: ["WiFi", "Fireplace", "Breakfast", "Garden"],
        description: "Cozy cottage surrounded by coffee plantations."
    },
    {
        id: 5,
        name: "Heritage Hotel",
        location: "Hampi",
        image: "https://images.unsplash.com/photo-1564501049412-61c2a3083791?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
        price: 2800,
        features: ["WiFi", "AC", "Breakfast", "Heritage"],
        description: "Traditional hotel near ancient ruins."
    },
    {
        id: 6,
        name: "Backwater Houseboat",
        location: "Alleppey",
        image: "https://images.unsplash.com/photo-1559827260-dc66d52bef19?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
        price: 5000,
        features: ["WiFi", "AC", "Meals", "Cruise"],
        description: "Traditional houseboat experience in backwaters."
    },
    {
        id: 7,
        name: "Tea Estate Bungalow",
        location: "Munnar",
        image: "https://images.unsplash.com/photo-1578683010236-d716f9a3f461?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
        price: 3200,
        features: ["WiFi", "Fireplace", "Breakfast", "Tea Garden"],
        description: "Colonial bungalow in tea estate."
    },
    {
        id: 8,
        name: "Beach Villa",
        location: "Kovalam",
        image: "https://images.unsplash.com/photo-1566073771259-6a8506099945?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
        price: 4500,
        features: ["WiFi", "AC", "Breakfast", "Pool", "Beach"],
        description: "Luxury villa with private beach access."
    },
    {
        id: 9,
        name: "City Hotel",
        location: "Chennai",
        image: "https://images.unsplash.com/photo-1611892440504-42a792e24d32?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
        price: 3000,
        features: ["WiFi", "AC", "Breakfast", "Gym"],
        description: "Modern hotel in city center."
    },
    {
        id: 10,
        name: "Hill Station Resort",
        location: "Ooty",
        image: "https://images.unsplash.com/photo-1578683010236-d716f9a3f461?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
        price: 3500,
        features: ["WiFi", "Heating", "Breakfast", "Garden"],
        description: "Resort with panoramic mountain views."
    },
    {
        id: 11,
        name: "Temple View Hotel",
        location: "Madurai",
        image: "https://images.unsplash.com/photo-1564501049412-61c2a3083791?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
        price: 2200,
        features: ["WiFi", "AC", "Breakfast"],
        description: "Hotel with view of Meenakshi Temple."
    },
    {
        id: 12,
        name: "Beach Resort",
        location: "Visakhapatnam",
        image: "https://images.unsplash.com/photo-1566073771259-6a8506099945?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
        price: 3800,
        features: ["WiFi", "AC", "Breakfast", "Beach", "Pool"],
        description: "Resort on RK Beach with modern amenities."
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
        image: "https://images.unsplash.com/photo-1587330979470-3585a3b0e0a0?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80"
    },
    {
        id: 2,
        code: "PKG0002",
        title: "Mysore Palace & Coorg Package",
        duration: "1 Day",
        route: "👉 Mysore Palace, Chamundi Hills, Coorg Coffee Plantations 🔙 Return Drop at Bangalore",
        includes: ["Toll Charges", "Tax & Permit Fees", "Parking Fees", "Driver Bata"],
        price: 4500,
        image: "https://images.unsplash.com/photo-1584464491033-06628f3a6b7b?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80"
    },
    {
        id: 3,
        code: "PKG0003",
        title: "Hampi Heritage Tour Package",
        duration: "2 Days",
        route: "Day 1 👉 Virupaksha Temple, Hampi Bazaar, Vittala Temple (Night Halt) Day 2 👉 Lotus Palace, Elephant Stables, Royal Enclosure 🔙 Return Drop at Bangalore",
        includes: ["Toll Charges", "Tax & Permit Fees", "Parking Fees", "Driver Bata"],
        price: 8000,
        image: "https://images.unsplash.com/photo-1578662996442-48f60103fc96?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80"
    },
    {
        id: 4,
        code: "PKG0004",
        title: "Ooty & Coonoor Hill Station Package",
        duration: "1 Day",
        route: "👉 Ooty Lake, Botanical Gardens, Doddabetta Peak, Coonoor Tea Gardens 🔙 Return Drop at Coimbatore",
        includes: ["Toll Charges", "Tax & Permit Fees", "Parking Fees", "Driver Bata"],
        price: 4000,
        image: "https://images.unsplash.com/photo-1506905925346-21bda4d32df4?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80"
    },
    {
        id: 5,
        code: "PKG0005",
        title: "Munnar Tea Gardens Package",
        duration: "1 Day",
        route: "👉 Tea Museum, Mattupetty Dam, Echo Point, Top Station 🔙 Return Drop at Kochi",
        includes: ["Toll Charges", "Tax & Permit Fees", "Parking Fees", "Driver Bata"],
        price: 3500,
        image: "https://images.unsplash.com/photo-1506905925346-21bda4d32df4?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80"
    },
    {
        id: 6,
        code: "PKG0006",
        title: "Alleppey Backwaters Package",
        duration: "1 Day",
        route: "👉 Alleppey Backwaters, Houseboat Cruise, Marari Beach 🔙 Return Drop at Kochi",
        includes: ["Toll Charges", "Tax & Permit Fees", "Boat Charges", "Driver Bata"],
        price: 5000,
        image: "https://images.unsplash.com/photo-1559827260-dc66d52bef19?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80"
    },
    {
        id: 7,
        code: "PKG0007",
        title: "Chennai to Mahabalipuram Package",
        duration: "8 Hours",
        route: "👉 Mahabalipuram Temples, Shore Temple, Crocodile Bank, DakshinaChitra 🔙 Return Drop at Chennai",
        includes: ["Toll Charges", "Parking Fees", "Driver Bata"],
        price: 3000,
        image: "https://images.unsplash.com/photo-1507525428034-b723cf961d3e?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80"
    },
    {
        id: 8,
        code: "PKG0008",
        title: "Hyderabad City Tour Package",
        duration: "1 Day",
        route: "👉 Charminar, Golconda Fort, Salar Jung Museum, Hussain Sagar Lake 🔙 Return Drop at Hyderabad",
        includes: ["Toll Charges", "Parking Fees", "Driver Bata"],
        price: 3500,
        image: "https://images.unsplash.com/photo-1587330979470-3585a3b0e0a0?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80"
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
        image: "https://images.unsplash.com/photo-1449824913935-59a10b8d2000?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80"
    },
    {
        id: 2,
        name: "Maruti Suzuki Ertiga",
        localPrice: 2500,
        outstationPrice: 19,
        fuelEfficiency: "10km per 1 liter diesel",
        capacity: 6,
        minKm: 300,
        image: "https://images.unsplash.com/photo-1449824913935-59a10b8d2000?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80"
    },
    {
        id: 3,
        name: "Innova Crysta",
        localPrice: 3500,
        outstationPrice: 23,
        fuelEfficiency: "10km per 1 liter diesel",
        capacity: 7,
        minKm: 300,
        image: "https://images.unsplash.com/photo-1449824913935-59a10b8d2000?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80"
    },
    {
        id: 4,
        name: "Fortuner",
        localPrice: 8500,
        outstationPrice: 45,
        fuelEfficiency: "8km per 1 liter diesel",
        capacity: 7,
        minKm: 300,
        image: "https://images.unsplash.com/photo-1449824913935-59a10b8d2000?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80"
    },
    {
        id: 5,
        name: "Urbania",
        localPrice: 10000,
        outstationPrice: 50,
        fuelEfficiency: "5km per 1 liter diesel",
        capacity: 12,
        minKm: 350,
        image: "https://images.unsplash.com/photo-1449824913935-59a10b8d2000?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80"
    },
    {
        id: 6,
        name: "Tempo 12 Seater",
        localPrice: 4500,
        outstationPrice: 26,
        fuelEfficiency: "8km per 1 liter diesel",
        capacity: 12,
        minKm: 350,
        image: "https://images.unsplash.com/photo-1449824913935-59a10b8d2000?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80"
    },
    {
        id: 7,
        name: "Tempo 17 Seater",
        localPrice: 6000,
        outstationPrice: 35,
        fuelEfficiency: "6km per 1 liter diesel",
        capacity: 17,
        minKm: 350,
        image: "https://images.unsplash.com/photo-1449824913935-59a10b8d2000?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80"
    },
    {
        id: 8,
        name: "Tempo 20 Seater",
        localPrice: 8000,
        outstationPrice: 45,
        fuelEfficiency: "5km per 1 liter diesel",
        capacity: 20,
        minKm: 350,
        image: "https://images.unsplash.com/photo-1449824913935-59a10b8d2000?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80"
    },
    {
        id: 9,
        name: "27 Seater Mini Bus",
        localPrice: 10000,
        outstationPrice: 55,
        fuelEfficiency: "4km per 1 liter diesel",
        capacity: 27,
        minKm: 350,
        image: "https://images.unsplash.com/photo-1449824913935-59a10b8d2000?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80"
    },
    {
        id: 10,
        name: "40 Seater AC Bus",
        localPrice: 15000,
        outstationPrice: 65,
        fuelEfficiency: "3km per 1 liter diesel",
        capacity: 40,
        minKm: 350,
        image: "https://images.unsplash.com/photo-1449824913935-59a10b8d2000?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80"
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

let selectedRoom = null;

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

// Display Destinations
function displayDestinations(state = 'all') {
    const filteredDestinations = state === 'all' 
        ? destinations 
        : destinations.filter(dest => dest.state === state);

    destinationsGrid.innerHTML = filteredDestinations.map(dest => `
        <div class="destination-card">
            <img src="${dest.image}" alt="${dest.name}" class="destination-image">
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
function displayRooms(filterLocation = '') {
    const filteredRooms = filterLocation 
        ? rooms.filter(room => room.location.toLowerCase() === filterLocation.toLowerCase())
        : rooms;

    if (filteredRooms.length === 0) {
        roomsGrid.innerHTML = '<p style="grid-column: 1/-1; text-align: center; padding: 2rem;">No rooms available for this destination. Please try another location.</p>';
        return;
    }

    roomsGrid.innerHTML = filteredRooms.map(room => `
        <div class="room-card">
            <img src="${room.image}" alt="${room.name}" class="room-image">
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
                <div class="room-features">
                    ${room.features.map(feature => `
                        <span class="room-feature">
                            <i class="fas fa-check"></i>
                            ${feature}
                        </span>
                    `).join('')}
                </div>
                <button class="btn btn-primary btn-block" onclick="openBookingModal('room', ${room.id})">Book Now</button>
            </div>
        </div>
    `).join('');
}

// Room Search
roomSearchForm.addEventListener('submit', (e) => {
    e.preventDefault();
    const destination = roomDestination.value;
    displayRooms(destination);
    
    // Scroll to rooms grid
    document.getElementById('rooms').scrollIntoView({ behavior: 'smooth' });
});

// Booking Modal (for rooms - keeping for backward compatibility)
function openBookingModal(roomId) {
    if (typeof roomId === 'number') {
        openBookingModal('room', roomId);
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
            <img src="${pkg.image}" alt="${pkg.title}" class="package-image">
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
                <button class="btn btn-primary btn-block" onclick="openBookingModal('package', ${pkg.id})">Book Now</button>
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
            <img src="${vehicle.image}" alt="${vehicle.name}" class="vehicle-image">
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
                <button class="btn btn-primary btn-block" onclick="openBookingModal('vehicle', ${vehicle.id})">Book Now</button>
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

// Initialize
document.addEventListener('DOMContentLoaded', () => {
    initNavigation();
    displayDestinations();
    displayRooms();
    displayPackages();
    displayVehicles();
    displayTestimonials();
    animateStatistics();
    initMobileOptimizations();
    
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

