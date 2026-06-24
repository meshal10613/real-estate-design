export interface Agent {
  name: string;
  role: string;
  image: string;
  phone: string;
  email: string;
  rating: number;
}

export interface Amenities {
  comfort: string[];
  outdoor: string[];
  wellness: string[];
  security: string[];
}

export interface Property {
  id: string;
  title: string;
  location: string;
  address: string;
  description: string;
  price: string;
  priceValue: number;
  area: string;
  bedrooms: number;
  bathrooms: number;
  category: string;
  image: string;
  gallery: string[];
  yearBuilt: number;
  status: "For Sale" | "For Rent";
  rating: number;
  reviewsCount: number;
  agent: Agent;
  amenities: Amenities;
}

export const properties: Property[] = [
  {
    id: "tropical-oasis",
    title: "Tropical Oasis",
    location: "Seminyak, Bali",
    address: "14 Jalan Kayu Aya, Seminyak, Bali 80361",
    description: "Nestled in the heart of Seminyak's most exclusive enclave, Tropical Oasis is a masterpiece of modern tropical architecture. Designed to blend indoor luxury with Bali's lush natural beauty, the villa features an open-concept living area overlooking a pristine 15-meter private swimming pool. High vaulted ceilings crafted from local teakwood, polished concrete floors, and floor-to-ceiling glass paneling create an airy, bright atmosphere throughout.\n\nThe gourmet kitchen comes fully equipped with state-of-the-art European appliances, custom marble countertops, and an integrated wine fridge. Each bedroom suite serves as a private sanctuary, complete with walk-in wardrobes and indoor-outdoor tropical bathrooms featuring freestanding stone bathtubs. Perfect as a high-yield investment or a luxurious personal holiday home.",
    price: "$2,450,000",
    priceValue: 2450000,
    area: "3,850 sqft",
    bedrooms: 4,
    bathrooms: 4.5,
    category: "Villas",
    image: "/property-1.png",
    gallery: ["/property-1.png", "/property-2.png", "/property-3.png", "/property-4.png"],
    yearBuilt: 2023,
    status: "For Sale",
    rating: 4.92,
    reviewsCount: 34,
    agent: {
      name: "Made Wijaya",
      role: "Luxury Villa Specialist",
      image: "https://images.unsplash.com/photo-1560250097-0b93528c311a?w=150&h=150&fit=crop&crop=face",
      phone: "+62 812-3456-7890",
      email: "made@realteek.com",
      rating: 4.9
    },
    amenities: {
      comfort: ["Smart Home System", "Central Air Conditioning", "Fully Furnished", "Walk-in Closets"],
      outdoor: ["15m Private Pool", "Lush Landscaped Gardens", "Outdoor BBQ Kitchen", "Sun Deck Lounge"],
      wellness: ["Private Yoga Shala", "Jacuzzi Spa Tub", "In-house Massage Room"],
      security: ["24/7 Security Patrol", "Smart Lock Gates", "CCTV Surveillance", "Secure Safe Box"]
    }
  },
  {
    id: "bali-cliff-retreat",
    title: "Bali Cliff Retreat",
    location: "Uluwatu, Bali",
    address: "88 Jalan Uluwatu Cliffside, Uluwatu, Bali 80364",
    description: "Perched majestically on the dramatic limestone cliffs of Uluwatu, Bali Cliff Retreat offers an unparalleled oceanfront lifestyle. This architecturally designed sanctuary commands breathtaking, unobstructed panoramic views of the Indian Ocean and the world-famous surf breaks directly below. The villa's design language is defined by sleek minimalism, utilizing natural white stone, raw concrete, and glass elements that invite the ocean breeze inside.\n\nThe expansive open-plan living spaces flow effortlessly onto a wide cliff-edge pool deck. Complete with a sunken lounge firepit, an outdoor dining pavilion, and a 20-meter infinity pool, this property represents the ultimate entertainment venue. All suites are situated to capture sunset vistas over the ocean, ensuring that every morning begins with an awe-inspiring horizon.",
    price: "$850,000",
    priceValue: 850000,
    area: "2,900 sqft",
    bedrooms: 3,
    bathrooms: 3,
    category: "Villas",
    image: "/property-2.png",
    gallery: ["/property-2.png", "/property-1.png", "/property-4.png", "/property-5.png"],
    yearBuilt: 2024,
    status: "For Sale",
    rating: 4.88,
    reviewsCount: 19,
    agent: {
      name: "Sarah Jenkins",
      role: "Oceanfront Property Expert",
      image: "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?w=150&h=150&fit=crop&crop=face",
      phone: "+62 819-9876-5432",
      email: "sarah@realteek.com",
      rating: 4.95
    },
    amenities: {
      comfort: ["Double Height Ceilings", "Integrated Sound System", "Chef's Kitchen", "Wine Cellar"],
      outdoor: ["20m Infinity Edge Pool", "Sunken Cliffside Lounge", "Fire Pit", "Sunset Viewing Deck"],
      wellness: ["Private Gym room", "Steam Room & Sauna", "Outdoor Shower"],
      security: ["Gated Private Community", "Biometric Access Control", "24/7 Security Desk"]
    }
  },
  {
    id: "metro-skyline-loft",
    title: "Metro Skyline Loft",
    location: "Jakarta, Indonesia",
    address: "Penthouse 3B, Anandamaya Residences, Central Jakarta",
    description: "Experience the pinnacle of metropolitan sophistication in this striking double-story loft penthouse. Located in the heart of Jakarta's financial district, Metro Skyline Loft pairs contemporary urban luxury with breathtaking, unobstructed views of the city's glistening skyline. Spanning two levels of modern architecture, the loft features double-height floor-to-ceiling windows that drench the living space in natural light.\n\nThe interior features premium herringbone oak floors, custom metalwork accents, and a marble spiral staircase. The designer kitchen by Boffi is equipped with top-tier Gaggenau appliances, catering to both casual meals and grand dinners. Living here grants access to elite building amenities including a private elevator, indoor Olympic-sized pool, private cinema, and concierge service.",
    price: "$1,250,000",
    priceValue: 1250000,
    area: "2,200 sqft",
    bedrooms: 2,
    bathrooms: 2.5,
    category: "Apartments",
    image: "/property-3.png",
    gallery: ["/property-3.png", "/property-5.png", "/property-2.png", "/property-1.png"],
    yearBuilt: 2022,
    status: "For Rent",
    rating: 4.95,
    reviewsCount: 42,
    agent: {
      name: "David Chandra",
      role: "Metropolitan Luxury Advisor",
      image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=150&h=150&fit=crop&crop=face",
      phone: "+62 811-2233-4455",
      email: "david@realteek.com",
      rating: 4.87
    },
    amenities: {
      comfort: ["Private Elevator Access", "Motorized Smart Blinds", "Walk-in Wardrobe", "Wine Display Wall"],
      outdoor: ["Private Balcony Sky Garden", "Shared Rooftop Area", "Assigned Underground Parking"],
      wellness: ["Shared Indoor Heated Pool", "Resident Gym & Spa", "Private Cinema Lounge"],
      security: ["24-Hour Concierge", "Video Intercom System", "Card Access Control", "Secure Safe Room"]
    }
  },
  {
    id: "ocean-view-villa",
    title: "Ocean View Villa",
    location: "Tabanan Beach, Bali",
    address: "42 Jalan Pantai Kedungu, Tabanan, Bali 82121",
    description: "Escape the crowds and immerse yourself in the serene tranquility of Tabanan Beach. This spectacular ocean view villa is set on a gentle slope surrounded by vibrant green rice paddies and fronted by the black sands of Kedungu beach. Offering a peaceful sanctuary, the design merges traditional Balinese structures with contemporary minimalism, creating a calm and restorative environment.\n\nFeaturing multiple open pavilions, the property layout emphasizes cross-ventilation and natural breezes. A highlight is the vast lawn that spreads out to meet the beach access, centered by a large timber pool deck. It's the ultimate home for surf lovers and wellness enthusiasts seeking a slower-paced Balinese lifestyle without compromising on luxury finishes and convenience.",
    price: "$2,450,000",
    priceValue: 2450000,
    area: "4,200 sqft",
    bedrooms: 5,
    bathrooms: 5,
    category: "Luxury Villas",
    image: "/property-4.png",
    gallery: ["/property-4.png", "/property-1.png", "/property-2.png", "/property-5.png"],
    yearBuilt: 2023,
    status: "For Sale",
    rating: 4.85,
    reviewsCount: 15,
    agent: {
      name: "Sarah Jenkins",
      role: "Oceanfront Property Expert",
      image: "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?w=150&h=150&fit=crop&crop=face",
      phone: "+62 819-9876-5432",
      email: "sarah@realteek.com",
      rating: 4.95
    },
    amenities: {
      comfort: ["Open Pavilion Living", "High-Speed Fiber Internet", "Separate Guest House", "Eco-friendly ACs"],
      outdoor: ["18m Saltwater Pool", "Massive Lawn Area", "Beach Gate Path", "Rooftop Yoga Terrace"],
      wellness: ["Spa & Wellness Room", "Sauna & Ice Bath", "Organic Garden"],
      security: ["Private Guard Post", "Perimeter Wall & CCTV", "Smart Door Lock"]
    }
  },
  {
    id: "lakeside-retreat",
    title: "Lakeside Retreat",
    location: "Bedugul, Indonesia",
    address: "7 Jalan Danau Beratan, Bedugul, Bali 82191",
    description: "Welcome to a different side of Bali. Tucked away in the cool, misty highlands of Bedugul, Lakeside Retreat is a contemporary mountain lodge that redefines cozy luxury. Built on the shores of Lake Beratan, the property enjoys refreshing cool mountain air and views of cloud-topped volcanic peaks, contrasting with the tropical beach heat.\n\nInside, the cabin features a magnificent double-sided fireplace clad in local river stone, rich cedar wood panelling, and plush textiles that invite warmth. Floor-to-ceiling windows capture views of the lake and surrounding pine forests. The property includes a private jetty for boating, beautiful terraced flower gardens, and an outdoor firepit setup perfect for roasting marshmallows under starry mountain skies.",
    price: "$590,000",
    priceValue: 590000,
    area: "3,100 sqft",
    bedrooms: 3,
    bathrooms: 3.5,
    category: "Villas",
    image: "/property-5.png",
    gallery: ["/property-5.png", "/property-3.png", "/property-1.png", "/property-4.png"],
    yearBuilt: 2021,
    status: "For Sale",
    rating: 4.79,
    reviewsCount: 22,
    agent: {
      name: "David Chandra",
      role: "Metropolitan & Rural Luxury Advisor",
      image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=150&h=150&fit=crop&crop=face",
      phone: "+62 811-2233-4455",
      email: "david@realteek.com",
      rating: 4.87
    },
    amenities: {
      comfort: ["Stone Wood-burning Fireplace", "Heated Flooring System", "Vaulted Cedar Ceilings", "Loft Study Room"],
      outdoor: ["Private Boat Jetty", "Terraced Alpine Gardens", "Fire Pit & BBQ Pavilion", "Wrap-around Deck"],
      wellness: ["Private Hot Tub Jacuzzi", "Finnish Wood Sauna", "Pine Wood Forest Path"],
      security: ["Alarm & Motion Sensors", "Fully Fenced Grounds", "Guardhouse Gate"]
    }
  },
  {
    id: "beachfront-paradise",
    title: "Beachfront Paradise",
    location: "Seminyak, Bali",
    address: "102 Jalan Laksmana, Seminyak, Bali 80361",
    description: "Located on one of Seminyak's rarest absolute beachfront parcels, Beachfront Paradise is a modern masterpiece of coastal luxury. This villa offers direct, private gated access to the warm golden sands, allowing you to walk straight out of your garden onto the beach. Architecturally designed to blend clean lines with organic textures, the villa's open floorplan offers mesmerizing sunset vistas from almost every corner.\n\nThe expansive ground floor opens completely via pocketing glass doors to a large ironwood terrace, a 16-meter infinity pool, and a manicured beachfront lawn. Upstairs, the master suite is a luxurious sanctuary featuring a private sea-facing balcony, double shower wet room, and custom designer finishes. Walking distance to Bali's finest dining and boutiques, this is beachfront living at its absolute zenith.",
    price: "$770,000",
    priceValue: 770000,
    area: "3,400 sqft",
    bedrooms: 4,
    bathrooms: 4,
    category: "Luxury Villas",
    image: "/property-1.png",
    gallery: ["/property-1.png", "/property-3.png", "/property-4.png", "/property-2.png"],
    yearBuilt: 2022,
    status: "For Sale",
    rating: 4.91,
    reviewsCount: 26,
    agent: {
      name: "Made Wijaya",
      role: "Luxury Villa Specialist",
      image: "https://images.unsplash.com/photo-1560250097-0b93528c311a?w=150&h=150&fit=crop&crop=face",
      phone: "+62 812-3456-7890",
      email: "made@realteek.com",
      rating: 4.9
    },
    amenities: {
      comfort: ["Fully Integrated Smart Living", "Dual Zone Climate Control", "Pro Cook's Kitchen", "Wet and Dry Bar"],
      outdoor: ["Direct Private Beach Gate", "16m Infinity Ocean Pool", "Beachfront Cabana Lounge", "Alfresco Dining Deck"],
      wellness: ["Private Gym overlooking Pool", "Soaking Garden Tub", "Yoga & Meditation Deck"],
      security: ["24/7 Security Guard Room", "Keycard Lock Access", "Perimeter Infrared Sensors"]
    }
  }
];
