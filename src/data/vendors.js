// ==========================================================
// HAREVENT VENDOR DATA
// ==========================================================
// All images are loaded from the public/ folder.
// Do NOT add "public/" in the image path.
// Example:
// public/Golden Mandap Wedding Ceremony.png
// becomes:
// /Golden Mandap Wedding Ceremony.png
// ==========================================================

export const vendors = [
  // ========================================================
  // 1. ROYAL MOMENTS PHOTOGRAPHY
  // ========================================================
  {
    id: "royal-moments",

    category: "Wedding Photography",
    filterCategory: "Photography",

    businessName: "Royal Moments...",
    fullName: "Royal Moments Photography",

    description:
      "Specializing in cinematic wedding stories, candid moments and timeless portraits.",

    location: "Pune",

    priceFrom: "₹85,000",
    priceNote: "onwards",
    startingPrice: "₹85,000 Onwards",

    // Main image
    portfolioImage: "/Joyful Indian Wedding Petal Shower.png",

    imageAlt:
      "Royal Moments Photography wedding couple celebrating with flower petals",

    primaryMarket: "Pune",

    rating: "5.0",
    reviewCount: 42,

    services: [
      "Candid Photography",
      "Cinematic Wedding Films",
      "Pre-Wedding Shoots",
      "Traditional Photography",
    ],

    about:
      "Royal Moments Photography creates cinematic wedding stories with a focus on candid emotions, natural portraits and beautifully timed celebrations. The team works across Pune and nearby destinations.",

    // Photography-specific gallery
    gallery: [
      "/Joyful Indian Wedding Petal Shower.png",
      "/Golden-Hour Garden Wedding Ceremony.png",
      "/Golden Mandap Wedding Ceremony.png",
      "/Golden-Hour Pre-Wedding Celebration.png",
    ],
  },

  // ========================================================
  // 2. MAYUR MANDAP & FLORAL
  // ========================================================
  {
    id: "mayur-mandap-floral",

    category: "Wedding Decor",
    filterCategory: "Decor",

    businessName: "Mayur Mandap & Floral...",
    fullName: "Mayur Mandap & Floral",

    description:
      "Elegant mandap designs, floral installations and contemporary wedding decor.",

    location: "Pune & Mumbai",

    priceFrom: "₹1.2 Lakh",
    priceNote: "onwards",
    startingPrice: "₹1.2 Lakh Onwards",

    // Decor-specific main image
    portfolioImage: "/Waterfront Romance Under a Floral Canopy.png",

    imageAlt:
      "Mayur Mandap and Floral elegant wedding decoration",

    primaryMarket: "Pune & Mumbai",

    rating: "4.9",
    reviewCount: 36,

    services: [
      "Mandap Decoration",
      "Floral Installations",
      "Stage & Entrance Decor",
      "Theme Wedding Decor",
    ],

    about:
      "Mayur Mandap & Floral designs elegant wedding environments with custom mandaps, floral installations and contemporary styling. Packages can be tailored to the venue, theme and celebration size.",

    // Decor-related images only
    gallery: [
      "/Waterfront Romance Under a Floral Canopy.png",
      "/Lavish Red and Gold Wedding Stage.png",
      "/Opulent Indian Garden Wedding Mandap.png",
      "/Golden Mandap Wedding Ceremony.png",
    ],
  },

  // ========================================================
  // 3. IMPERIAL PALACE & BANQUETS
  // ========================================================
  {
    id: "imperial-palace-banquets",

    category: "Luxury Venue",
    filterCategory: "Venues",

    businessName: "Imperial Palace & Banquets",
    fullName: "Imperial Palace & Banquets",

    description:
      "Spacious luxury banquet spaces for weddings, receptions and celebrations.",

    location: "Kharadi, Pune",

    priceFrom: "₹3.5 Lakh",
    priceNote: "per event",
    startingPrice: "₹3.5 Lakh Per Event",

    // Venue-specific main image
    portfolioImage: "/Opulent Indian Garden Wedding Mandap.png",

    imageAlt:
      "Imperial Palace luxury wedding venue and banquet decoration",

    primaryMarket: "Kharadi, Pune",

    rating: "5.0",
    reviewCount: 28,

    services: [
      "Banquet Hall",
      "Wedding Catering",
      "Decoration Coordination",
      "Event Support",
    ],

    about:
      "Imperial Palace & Banquets offers spacious celebration areas for weddings, receptions and family functions in Kharadi, Pune. The venue combines a grand setting with flexible event arrangements.",

    // Venue-related images only
    gallery: [
      "/Opulent Indian Garden Wedding Mandap.png",
      "/Golden Mandap Wedding Ceremony.png",
      "/Lavish Red and Gold Wedding Stage.png",
      "/Elegant Banquet Table Inspection.png",
    ],
  },

  // ========================================================
  // 4. SAFFRON & SPICE GOURMET
  // ========================================================
  {
    id: "saffron-spice-gourmet",

    category: "Catering",
    filterCategory: "Catering",

    businessName: "Saffron & Spice Gourmet...",
    fullName: "Saffron & Spice Gourmet",

    description:
      "Multi-cuisine catering with regional specialties and live counters.",

    location: "Pune",

    priceFrom: "₹950",
    priceNote: "per plate",
    startingPrice: "₹950 Per Plate",

    // Catering-specific main image
    portfolioImage: "/Lavish Indian Fusion Wedding Buffet.png",

    imageAlt:
      "Saffron and Spice Gourmet Indian wedding buffet",

    primaryMarket: "Pune",

    rating: "4.9",
    reviewCount: 31,

    services: [
      "Multi-Cuisine Catering",
      "Live Food Counters",
      "Regional Specialities",
      "Dessert & Beverage Service",
    ],

    about:
      "Saffron & Spice Gourmet brings multi-cuisine catering to weddings and celebrations in Pune, with regional specialities, live counters and flexible menu planning for different guest groups.",

    // Catering-related images only
    gallery: [
      "/Lavish Indian Fusion Wedding Buffet.png",
      "/Golden Wedding Buffet Under Crystal Lights.png",
      "/Elegant Banquet Table Inspection.png",
      "/Joyful Indian Family Celebration.png",
    ],
  },
];

// ==========================================================
// FIND VENDOR BY ID
// ==========================================================

export const getVendorById = (id) => {
  return vendors.find((vendor) => vendor.id === id);
};