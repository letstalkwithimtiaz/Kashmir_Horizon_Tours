/**
 * Kashmir Horizon Tours - Business Configuration File
 * All business assets, packages, descriptions, and structural constants are centralized here.
 * Future clients can customize this website by updating this file alone.
 */

export interface Destination {
  id: string;
  name: string;
  tagline: string;
  image: string;
  overview: string;
  highlights: string[];
  bestTime: string;
  activities: string[];
}

export interface TourPackage {
  id: string;
  title: string;
  tagline: string;
  duration: string; // e.g., "5 Nights / 6 Days"
  pricePlaceholder: string; // e.g., "From ₹12,500/Person"
  image: string;
  category: 'honeymoon' | 'family' | 'adventure' | 'luxury' | 'group';
  highlights: string[];
  inclusions: string[];
  exclusions: string[];
  itinerary: { day: number; title: string; desc: string }[];
}

export interface Service {
  id: string;
  title: string;
  description: string;
  iconName: string; // Used to dynamically render Lucide icons Safely
}

export interface Review {
  id: string;
  name: string;
  location: string;
  rating: number;
  date: string;
  comment: string;
  avatar: string;
}

export interface FAQ {
  id: string;
  question: string;
  answer: string;
}

export interface BusinessConfig {
  name: string;
  tagline: string;
  phoneRaw: string; // E.g. "+91XXXXXXXXXX" for Tel links
  phoneFormatted: string; // E.g. "+91 98765 43210"
  whatsappRaw: string; // E.g. "919876543210" for WhatsApp API url
  whatsappWelcomeText: string;
  email: string;
  address: string;
  officeHours: string;
  socials: {
    facebook?: string;
    instagram?: string;
    twitter?: string;
    youtube?: string;
  };
  destinations: Destination[];
  packages: TourPackage[];
  services: Service[];
  reviews: Review[];
  faqs: FAQ[];
  stats: {
    number: string;
    label: string;
  }[];
}

export const travelConfig: BusinessConfig = {
  name: "Kashmir Horizon Tours",
  tagline: "Discover Paradise Through Local Expertise",
  phoneRaw: "+919419012345",
  phoneFormatted: "+91 94190 12345",
  whatsappRaw: "919419012345",
  whatsappWelcomeText: "Hello Kashmir Horizon Tours! I am interested in planning a trip to Kashmir. Please share package details.",
  email: "info@kashmirhorizontours.com",
  address: "1st Floor, Boulevard Road, Opposite Ghat No. 7, Dal Lake, Srinagar, Jammu & Kashmir - 190001",
  officeHours: "9:00 AM - 8:00 PM (Monday to Saturday)",
  socials: {
    facebook: "https://facebook.com/kashmirhorizontours",
    instagram: "https://instagram.com/kashmirhorizontours",
    twitter: "https://twitter.com/kashmirhorizon",
    youtube: "https://youtube.com/kashmirhorizontours",
  },
  stats: [
    { number: "10+", label: "Years Experience" },
    { number: "5,200+", label: "Happy Travelers" },
    { number: "150+", label: "Premium Packages" },
    { number: "4.9/5", label: "Google Rating" }
  ],
  destinations: [
    {
      id: "srinagar",
      name: "Srinagar",
      tagline: "The Summer Capital & Heart of the Valley",
      image: "https://images.unsplash.com/photo-1566228015668-4c45dbc4e2f5?auto=format&fit=crop&q=80&w=1000", // Shikara on Dal Lake
      overview: "Srinagar, famed for its sparkling houseboats, majestic Mughal gardens, and the iconic Dal Lake, sits like a crown jewel in the Kashmir valley. Blessed with an ethereal setting, a shikara ride along the calm waters during sunset is a spiritual entry into Kashmiri life.",
      highlights: [
        "Glorious Shikara Rides on iconic Dal Lake",
        "Aromatic overnight stays in hand-crafted Deluxe Houseboats",
        "Historic Mughal Gardens (Shalimar, Nishat, Chashme Shahi)",
        "Asia's Largest Tulip Garden (vibrant in Spring)",
        "Spiritual peace at Hazratbal Shrine and Shankaracharya Temple"
      ],
      bestTime: "April to October (Pleasant Summer) & December to February (Mystic Snow Fall)",
      activities: ["Shikara Riding", "Houseboat Stay", "Heritage Walk", "Local Shopping for Pashminas", "Mughal Garden Tours"]
    },
    {
      id: "gulmarg",
      name: "Gulmarg",
      tagline: "The Meadow of Flowers & Skiing Paradise",
      image: "https://images.unsplash.com/photo-1621503923376-790104f378d3?auto=format&fit=crop&q=80&w=1000", // Snowy Gulmarg Valley
      overview: "Gulmarg is a world-class premier ski destination boasting the iconic Gulmarg Gondola—one of the highest cable cars on Earth. In winters, it transforms into a blinding white wonderland, while summers carpet the pristine slopes with wild daisies and buttercups.",
      highlights: [
        "Gulmarg Gondola Ride ascending to Apharwat Peak (Phase I & II)",
        "Vast ski slopes perfect for amateur and professional winter sports",
        "Kashmir's oldest iconic St. Mary's Church",
        "Panoramic views of Nanga Parbat and Pir Panjal ranges",
        "High-altitude 18-hole Gulmarg Golf Course"
      ],
      bestTime: "December to March (For Alpine Snow & Skiing), May to September (Lush green landscapes)",
      activities: ["Gondola Cable Car Ride", "Snow Skiing & Sledging", "Snowboarding", "Golfing", "Pony Trekking to Khilanmarg"]
    },
    {
      id: "pahalgam",
      name: "Pahalgam",
      tagline: "The Valley of Shepherds & Scenic Rivers",
      image: "https://images.unsplash.com/photo-1595841696660-151cf94b5f40?auto=format&fit=crop&q=80&w=1000", // Lidder River flowing near alpine pines
      overview: "Pahalgam is a tranquil, mountain-hemmed haven situated at the confluence of the Lidder River and Sheshnag Lake. Home to spectacular, untouched meadows like Baisaran (justly crowned 'Mini Switzerland'), it is an idyllic base for nature enthusiasts and trekkers.",
      highlights: [
        "Gushing white waters of the gorgeous Lidder River",
        "Breathtaking meadows of Baisaran (Mini Switzerland) via pine-forest trails",
        "Valleys of Aru and Betaab (named after the famous Bollywood film)",
        "Ancient Mamal Temple (dating back to the 12th century)",
        "Starting camp for the holy annual Amarnath Yatra pilgrimage"
      ],
      bestTime: "April to November (Extremely pleasant and green), December to February (Charming winter freeze)",
      activities: ["River Rafting", "Alpine Camping", "Pony Riding", "Photography", "Trekking to Kolahoi Glacier"]
    },
    {
      id: "sonamarg",
      name: "Sonamarg",
      tagline: "The Golden Meadow & Gateway to Ladakh",
      image: "https://images.unsplash.com/photo-1605649487212-47bdab064df7?auto=format&fit=crop&q=80&w=1000", // Sonamarg snow peaks and winding roads
      overview: "Sonamarg, translated as the 'Meadow of Gold', is framed by snowy peaks and high glaciers. Situated on the scenic Srinagar-Ladakh highway, it is renowned for the mesmerizing Thajiwas Glacier and acts as a gateway to the majestic high altitude passes.",
      highlights: [
        "Eternal snow at the magnificent Thajiwas Glacier",
        "Scenic banks of the roaring Sindh River running through pines",
        "Starting point of the famed Kashmir Great Lakes alpine trek",
        "Thrilling proximity to the historic Zoji-La Pass",
        "Endless views of silver firs and birch trees"
      ],
      bestTime: "April to September (Enchanting glacial views)",
      activities: ["Glacier Trekking", "Sledge Rides", "Trout Fishing", "White Water Rafting", "Camping near Sindh River"]
    },
    {
      id: "doodhpathri",
      name: "Doodhpathri",
      tagline: "The Eco-Friendly Valley of Milk",
      image: "https://images.unsplash.com/photo-1507525428034-b723cf961d3e?auto=format&fit=crop&q=80&w=1000&q=50", // Placeholder scenic mountain landscape with rapid water
      overview: "Doodhpathri is a beautiful, newly explored hidden gem in Budgam district. The name translates to 'Valley of Milk', owing to its fast-flowing, frothy rivers that rattle over boulders looking just like milk. Lush pine ridges surround this circular meadowland.",
      highlights: [
        "The roaring, pristine, cold waters of the Shaliganga River",
        "Undisturbed, serene, and crowd-free sprawling green carpets",
        "Enchanting tall pine and deodar forests whispering in the breeze",
        "Authentic interactions with warm nomadic Gujjar families",
        "Perfect untouched picnic and meditation spots"
      ],
      bestTime: "May to September (Lush, vibrant, refreshing weather)",
      activities: ["Riverside Walking", "Camping", "Scenic Horseback Tours", "Tasting traditional Kashmiri Kahwa cooked by locals"]
    },
    {
      id: "yusmarg",
      name: "Yusmarg",
      tagline: "The Meadow of Jesus & Absolute Solitude",
      image: "https://images.unsplash.com/photo-1470071459604-3b5ec3a7fe05?auto=format&fit=crop&q=80&w=1000", // Lush alpine meadow
      overview: "Yusmarg is a secluded forest paradise situated in the Pir Panjal range. Fabled to have been visited by Jesus himself, it offers absolute pine-scented solitude, endless flowery meadows, and spectacular vistas of snow-capped peaks like Tatakooti.",
      highlights: [
        "Untouched alpine lake of Nilnag tucked inside deep woods",
        "Doodh Ganga river rattling down the boulder-studded valleys",
        "Panoramas of the majestic Sunset Peak and Tatakooti peak",
        "Pristine, peaceful meadows untouched by commercial crowds",
        "Breathtaking mountain trails perfect for quiet, soulful hiking"
      ],
      bestTime: "April to October (Pure green meadows & wildflowers)",
      activities: ["Forest Hiking", "Nilnag Lake Trekking", "Horse Riding to Dragdolan", "Wilderness Photography"]
    }
  ],
  packages: [
    {
      id: "honeymoon-paradise",
      title: "Romantic Kashmir Honeymoon Special",
      tagline: "Celebrate love in the warmth of deluxe houseboats and spectacular snow valleys",
      duration: "5 Nights / 6 Days",
      pricePlaceholder: "₹18,500",
      image: "https://images.unsplash.com/photo-1618083707368-b3823daa2726?auto=format&fit=crop&q=80&w=1000", // Sunset Shikara candle light/flower feel
      category: "honeymoon",
      highlights: [
        "Luxury Houseboat night on Dal Lake with romantic candlelit dinner",
        "Scenic shikara ride decorated with local fresh flowers",
        "Gondola ride up to Phase-1 in Gulmarg with snow photography",
        "Visit Betaab Valley in Pahalgam with private transfers",
        "Exclusive premium decorated honeymoon cake & Bed decoration included"
      ],
      inclusions: [
        "01 Night stay in Premium Srinagar Houseboat",
        "02 Nights stay in Deluxe Gulmarg Hotel",
        "02 Nights stay in Riverside Pahalgam Hotel",
        "Daily Breakfast & Dinner with safe dining",
        "Private Sanitized Sedan Car (including airport pickup and drop)",
        "Complimentary decorated Honeymoon cake, nuts and saffron Kahwa tea"
      ],
      exclusions: [
        "Airfare / Train tickets",
        "Any personal activities (Pony rides, Gondola tickets, Local taxi union cars in Pahalgam)",
        "Lunch and personal laundry/shopping services",
        "Travel Insurance"
      ],
      itinerary: [
        { day: 1, title: "Srinagar Arrival & Houseboat Stay", desc: "Our local representative greets you warmly at Srinagar Airport. Transfer to your premium decorated houseboat on Dal Lake. Enjoy a relaxing 1-hour sunset Shikara ride, passing Floating Markets, followed by a romantic candlelit dinner onboard." },
        { day: 2, title: "Srinagar Local Sightseeing", desc: "Tour the famous Shalimar Bagh, Nishat Bagh, and Chashme Shahi Mughal Gardens. Late afternoon, drive through Boulevard road and visit the ancient Shankaracharya temple overlooking the entire capital." },
        { day: 3, title: "Srinagar to Gulmarg (The Floral Slope)", desc: "Proceed to Gulmarg (approximately 2 hours). Check into your cozy hotel. Board the legendary Gulmarg Gondola (Phase 1) for breath-taking snow panoramas. Spend the evening walk across the historic church trail." },
        { day: 4, title: "Gulmarg to Pahalgam (River Valley)", desc: "Drive to Pahalgam, passing saffron fields in Pampore and ruins of Avantipura. Reach Lidder River, check in, and spend the evening enjoying an organic riverside cup of authentic Kashmiri Kahwa." },
        { day: 5, title: "Explore Pahalgam Valleys", desc: "Board the local eco-cab to explore Betaab Valley, Chandanwari, and Aru Valley. Enjoy soft hiking along the Lidder River and optional pony ride to the gorgeous Baisaran (Mini Switzerland) meadow." },
        { day: 6, title: "Departure to Srinagar Airport", desc: "Enjoy a hearty breakfast, check out, and take a personalized private transfer back to Srinagar Airport for your onward journey with beautiful memories." }
      ]
    },
    {
      id: "family-unmatched",
      title: "Kashmir Classic Family Holiday",
      tagline: "Create everlasting family bonds in safe, premium, and child-safe environments",
      duration: "6 Nights / 7 Days",
      pricePlaceholder: "₹14,900",
      image: "https://images.unsplash.com/photo-1506929562872-bb421503ef21?auto=format&fit=crop&q=80&w=1000", // Family camping/lakeside mountain
      category: "family",
      highlights: [
        "Complete secure airport to airport group private transfers",
        "Kids-friendly hotels with heating systems & verified standard menus",
        "Snow activities in Gulmarg for elderlies and children with local guides",
        "Sightseeing in Shalimar Garden, Srinagar houseboat, and Lidder River bank",
        "Exciting, comfortable private spacious SUV for up to 6 family members"
      ],
      inclusions: [
        "02 Nights stay in Srinagar Premium Hotel",
        "01 Night stay in Dal Lake Houseboat",
        "01 Night stay in Mountain-view Gulmarg Hotel",
        "02 Nights stay in Family-comfort Pahalgam Hotel",
        "Daily delicious Breakfast & Dinner at all accommodations",
        "Spacious high-guard SUV (Innova/Tavera) with expert driver-cum-guide",
        "Toll taxes, parking fees, and driver allowances fully covered"
      ],
      exclusions: [
        "Lidder River rafting tickets",
        "Gondola ride tickets (advised to book in advance)",
        "Meals outside Breakfast and Dinner",
        "Personal porterage fees"
      ],
      itinerary: [
        { day: 1, title: "Srinagar Airport Pickup & Mughal Gardens Tour", desc: "Warm Kashmiri welcome at airport. Check in to your Srinagar hotel, then visit the breathtaking Chashme Shahi, Nishat Bagh, and the massive Shalimar Bagh. Return for a relaxing dinner." },
        { day: 2, title: "Day Tour to the Golden meadow Sonamarg", desc: "Take a beautiful day excursion to Sonamarg. Spend your afternoon enjoying sledging and snow views over Thajiwas glacier or walk along the fast running, crystal clear Sindh river. Drive back to Srinagar." },
        { day: 3, title: "Srinagar to Gulmarg Valley", desc: "Check out and drive to Gulmarg. Explore the beautiful high-altitude golf course and ride the majestic Gondola. Perfect family snow fights and photography on Apharwat peaks." },
        { day: 4, title: "Gulmarg to Pahalgam Valley", desc: "Drive to Pahalgam. Pass by the scenic saffron plains and stop to purchase pure organic Kashmiri saffron, honey, and walnuts directly from local village farms. Check into hotel." },
        { day: 5, title: "Pahalgam Local Leisure & Ponies", desc: "Explore Pahalgam. Hire a pony to ride to Baisaran Meadow (known as Mini Switzerland for its beautiful thick pine forests). Spend your afternoon relaxing by Lidder river." },
        { day: 6, title: "Pahalgam to Srinagar Deluxe Houseboat", desc: "Drive back to Srinagar and check-in to your traditional timber-carved Deluxe Houseboat. Enjoy an elite sunset Shikara ride across the lotus gardens of Dal Lake." },
        { day: 7, title: "Airport Dropoff with Souvenirs", desc: "Morning shopping tour of local handicrafts, carpets, and wooden art pieces. Safely check out of the houseboat for your scheduled airport transfer." }
      ]
    },
    {
      id: "adventure-unleashed",
      title: "Alpine Adventure & Glacier Trekking",
      tagline: "Feel the rush of Himalayan river rafting, glacier trekking, and rugged forest camping",
      duration: "5 Nights / 6 Days",
      pricePlaceholder: "₹21,000",
      image: "https://images.unsplash.com/photo-1533240332313-0db49b439ad3?auto=format&fit=crop&q=80&w=1000", // Trekking in high mountains
      category: "adventure",
      highlights: [
        "Intense white water river rafting in Lidder River (Level II/III)",
        "Scenic alpine trek to the base of the majestic Thajiwas Glacier in Sonamarg",
        "Camping in wild pine woods of Pahalgam with campfire and organic local grill",
        "Off-road mountain biking trails and steep mountain walks",
        "Gondola ascending to Apex Phase-2 of mountains (4,200m altitude)"
      ],
      inclusions: [
        "01 Night stay in Srinagar Base Camp Deluxe Hotel",
        "02 Nights Wilderness Mountain Camping in Pahalgam",
        "01 Night Adventure Resort stay in Sonamarg",
        "01 Night high-altitude Cabin stay in Gulmarg",
        "Adventure gear, high-grade tents, sleeping bags, and safety equipment",
        "Licensed professional local mountain guide & safety crew",
        "Full-board meals (Breakfast, Packed lunches, Hot campsite Dinners)"
      ],
      exclusions: [
        "Extreme sport specialized insurance",
        "Personal hiking boots and clothing",
        "Tips for local horsemen and guides"
      ],
      itinerary: [
        { day: 1, title: "Arrival & Altitude Acclimatization", desc: "Arrive in Srinagar. Spend the day relaxing, drinking local Kahwa, and walking through old town Srinagar for easy acclimatization to high elevation." },
        { day: 2, title: "Srinagar to Sonamarg Glacier Trek", desc: "Drive to Sonamarg. Trek to Thajiwas Glacier. Touch eternal snow, sledge down snowy banks, and set base campsites in the pine valleys of Sindh River." },
        { day: 3, title: "Sonamarg to Pahalgam & River Rafting", desc: "Proceed to Pahalgam. Strap on helmets for wild white water rafting on Lidder River. Establish wilderness campfire camp under star-studded skies." },
        { day: 4, title: "Baisaran Forest Steep Hike", desc: "An active hike to Baisaran, ascending steep forest trails. Explore secret waterfalls and view the dramatic peaks of Lidder Valley away from tourists." },
        { day: 5, title: "Pahalgam to Gulmarg Gondola Base", desc: "Drive to Gulmarg. Climb with Gondola cable car straight to Phase 2 (Apharwat Peak) for breathtaking views and extreme snowboarding activities." },
        { day: 6, title: "Return Voyage to Srinagar Airport", desc: "Pack up all gear. Take a private SUV transfer directly from Gulmarg back to Srinagar airport for your return flight." }
      ]
    },
    {
      id: "luxury-paradise",
      title: "Kashmir Grandeur & Luxury Retreat",
      tagline: "Ultimate bespoke indulgence. Ultra-luxurious stays, private helicopter transfers, and fine dining",
      duration: "4 Nights / 5 Days",
      pricePlaceholder: "₹45,500",
      image: "https://images.unsplash.com/photo-1540541338287-41700207dee6?auto=format&fit=crop&q=80&w=1000", // Luxury Resort hotel infinity view
      category: "luxury",
      highlights: [
        "Elite Ultra-luxury stays (e.g., The Kyber Resort, Taj Vivanta / Lalit Grand Palace equivalence)",
        "VIP fast-track airport lounge access and private executive transfers",
        "Bespoke private dining overlooking snow mountains",
        "Premium full-plane customized sightseeing itineraries with private local historian",
        "Premium private Shikara boat with butler service and Kashmiri Wazwan snack platter"
      ],
      inclusions: [
        "02 Nights stay in Premier Heritage Grand Suite at Srinagar",
        "02 Nights stay in Luxury Mountain Villa at Gulmarg",
        "Bespoke customizable premium dining plans (Breakfast, Exotic high teas, Gourmet Dinners)",
        "Chauffeur-driven Mercedes Benz / Audi or Luxury customized 4x4 Fortuner",
        "Complimentary high-speed VIP tickets to Gulmarg Gondola Phase 1 & 2",
        "24/7 dedicated travel concierge assistant at hotel"
      ],
      exclusions: [
        "Bespoke optional charter helicopter flights",
        "Premium alcoholic beverages/private spa procedures",
        "Everything not in inclusions"
      ],
      itinerary: [
        { day: 1, title: "VIP Srinagar Welcome & Royal Palace Check-in", desc: "Arrive in style. Warm welcome with fresh flowers and premium dry fruits. Private transfer to a historical luxury hotel. In the evening, enjoy a sunset private Shikara ride on Dal Lake with live acoustic Kashmiri flute session." },
        { day: 2, title: "Private Mughal Heritage Tour", desc: "Guided private tour of the hidden structural wonders of Nishat and Shalimar gardens with an architectural historian. Dine at a premium traditional Wazwan fine-art restaurant." },
        { day: 3, title: "Srinagar to Gulmarg Kyber Retreat", desc: "Travel to Gulmarg in a luxury executive SUV. Check-in to one of the world's finest high-altitude resort. Spend the afternoon pampering yourself at the luxury thermal spa with view of snowy peaks." },
        { day: 4, title: "Gondola Phase 2 & Sunset Champagne Tea", desc: "Fast-track VIP access onto Gulmarg Gondola, ascending 13,000 feet directly into untouched deep snow slopes. Return to the resort deck for a luxury warm Saffron Kahwa tea overlooking the mountain horizon." },
        { day: 5, title: "Morning Helicopter Ride / Private Airport Transfer", desc: "Private checkout. Savor a final glorious breakfast buffet before an executive transfer directly to Srinagar Airport VIP departures gate." }
      ]
    },
    {
      id: "group-unbeatable",
      title: "Kashmir Explorer Group Adventure",
      tagline: "Budget-friendly, highly social, and comprehensive valley group tour with certified local captains",
      duration: "7 Nights / 8 Days",
      pricePlaceholder: "₹11,500",
      image: "https://images.unsplash.com/photo-1539635278303-d4002c07eae3?auto=format&fit=crop&q=80&w=1000", // Friends group traveling
      category: "group",
      highlights: [
        "Highly cost-effective deal for friends, corporate, and group travelers",
        "Explore 6 scenic regions: Srinagar, Gulmarg, Pahalgam, Sonamarg, Doodhpathri, Yusmarg",
        "Kashmiri live musical nights and group bonfire activities included",
        "Guided village excursions and interactive walnut tree climbing sessions",
        "Travel in a modern, deluxe comfort Tempo Traveller with verified safety crew"
      ],
      inclusions: [
        "03 Nights stay in Srinagar Deluxe Group Hotel",
        "01 Night stay in group-sharing Premium Dal Lake Houseboat",
        "01 Night stay in snowy Gulmarg Hotel",
        "02 Nights stay in Pahalgam Pine Resort",
        "Daily group buffet Breakfast and comforting Dinner",
        "Complete group transfers in luxurious sanitized AC Tempo Traveller",
        "Services of an active, young and certified local Trip Captain"
      ],
      exclusions: [
        "Individual entry tickets to gardens",
        "Any private expenses or additional snacks",
        "Laundry fees"
      ],
      itinerary: [
        { day: 1, title: "Group Convergence in Srinagar", desc: "Meet your co-travelers and your expert Trip Captain at the hotel lobby. Icebreaker evening followed by an exciting group Shikara race across the Dal Lake." },
        { day: 2, title: "Srinagar Local Sightseeing & Wazwan Fest", desc: "Explore Shankaracharya hill, Tulip garden, and Mughal gardens. Dine in a famous local food alley to taste traditional wood-fired Kashmiri flatbread and mutton kebab." },
        { day: 3, title: "Day Voyage to Sonamarg Meadows", desc: "Drive as a group to Sonamarg. Enjoy sledging down the mountain snow, build human snow towers, and have tea by the running Sindh River." },
        { day: 4, title: "Srinagar to snowy Gulmarg", desc: "Transfer to Gulmarg. Queue together for the amazing Gondola ride to Apharwat peak. Group snow battles and skiing sessions with group discounts." },
        { day: 5, title: "Gulmarg to Pahalgam & Apple Orchards", desc: "Drive to Pahalgam. Tour local apple farms in Sopore and taste fresh apple juice straight from the pressing mills. Evening group bonfire under pine woods." },
        { day: 6, title: "Trekking and Baisaran Exploration", desc: "Group pony trek or trek to Baisaran meadow (Mini Switzerland). Fun physical games in the meadow and panoramic photography sessions." },
        { day: 7, title: "Pahalgam to Srinagar Deluxe Dal Lake Houseboat", desc: "Drive back to Srinagar, checking into cozy classical hand-finished houseboats. Share trip memories during the live local musical instruments show on the boat porch." },
        { day: 8, title: "Farewell Transfer to Airport", desc: "Final group breakfast and hugging farewells! Take the group transfer back to Srinagar airport." }
      ]
    }
  ],
  services: [
    {
      id: "hotel-booking",
      title: "Hotel Booking",
      description: "Handpicked, warm, and secure premium hotels ranging from elegant budget guest houses to elite 5-star mountain luxury chalets. Checked strictly for central heating systems, electrical blankets, and culinary standard hygiene.",
      iconName: "Hotel"
    },
    {
      id: "houseboat-booking",
      title: "Houseboat Booking",
      description: "Sleep over the shimmering Dal Lake or Nigeen Lake on hand-carved heritage cedarwood houseboats. Complimented by local hosts, handcrafted Mughal windows, deluxe carpets, and active hot water facilities.",
      iconName: "Ship"
    },
    {
      id: "taxi-service",
      title: "In-Valley Taxi Service",
      description: "Comfortable, safe, fully insured, and highly experienced local drivers operating a modern fleet: Innova, Etios, Swift, Fortuner, Tempo Travellers, and premium customized 4x4 SUVs for snow terrains.",
      iconName: "Car"
    },
    {
      id: "airport-transfers",
      title: "Airport Transfers",
      description: "Punctual, secure, and hassle-free pickups and drop-offs directly at Srinagar International Airport with clear holding banners, flight-tracking systems, and immediate luggage assistance.",
      iconName: "PlaneTakeoff"
    },
    {
      id: "sightseeing-tours",
      title: "Custom Sightseeing",
      description: "Carefully curated tours of Kashmir's majestic wonders—the Mughal Gardens, high mountains, ancient temples, local copper-craft bazaars, saffron plantations, and legendary pine forests.",
      iconName: "Compass"
    },
    {
      id: "trekking-tours",
      title: "Trekking & Camping",
      description: "Bespoke guided outdoor adventures to alpine high-altitude lakes (Vishansar, Krishansar, Gangabal) and glaciers with top-grade, weather-sealed warm gear and expert local mountain captains.",
      iconName: "Mountain"
    },
    {
      id: "corporate-tours",
      title: "Corporate Packages",
      description: "Comprehensive corporate retreats and team-building packages equipped with audio-visual setups, conference rooms, local gala dinners, customized team tasks, and safe group logistics.",
      iconName: "Briefcase"
    },
    {
      id: "family-vacations",
      title: "Family Vacations",
      description: "Kid-friendly and elderliness-appropriate leisurely pacing. Including easy transfers, diet accommodations, customizable safety steps, and family-first private accommodations.",
      iconName: "Users"
    }
  ],
  reviews: [
    {
      id: "rev1",
      name: "Aditya & Neha Sharma",
      location: "Mumbai, India",
      rating: 5,
      date: "May 2026",
      comment: "Our Honeymoon tour with Kashmir Horizon Tours was absolutely dreamlike! The houseboat room on Dal Lake was beautifully decorated, and staying there felt like stepping back in time. Special thanks to our driver, Shabir, who kept introducing us to the finest local shops and secret viewpoints in Pahalgam where we got gorgeous photos. Highly recommend!",
      avatar: "https://images.unsplash.com/photo-1544005313-94ddf0286df2?auto=format&fit=crop&q=80&w=150"
    },
    {
      id: "rev2",
      name: "The Kulkarni Family",
      location: "Pune, India",
      rating: 5,
      date: "June 2026",
      comment: "A flawless trip with 3 generations of our family (including elderly parents and a toddler). The vehicle provided (a modern Tempo Traveller) was spotless and extremely comfortable. Our trip coordinator adjusted our daily itinerary perfectly to make sure our parents didn't walk too much, and arranged warm, nutritious meals at every stop. Truly professional local experts!",
      avatar: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&q=80&w=150"
    },
    {
      id: "rev3",
      name: "Vikram Malhotra",
      location: "New Delhi, India",
      rating: 5,
      date: "January 2026",
      comment: "I am a solo photography enthusiast and was looking for a highly custom, snow-themed itinerary. These guys are incredible! They arranged a majestic cabin stay in Gulmarg, and hooked me up with a local mountain guide who helped me carry gear right to Apharwat Peak on snow treks. They understand hospitality, safety, and local culture. Best agency in Srinagar!",
      avatar: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?auto=format&fit=crop&q=80&w=150"
    }
  ],
  faqs: [
    {
      id: "faq1",
      question: "What is the best time to visit Kashmir?",
      answer: "Kashmir is literally a year-round paradise, with each season offering its own unique charm. Spring/Summer (April to October) is perfect for pleasant, warm weather, blooming tulips, lush green meadows, and clear skies. Winter (December to early March) is ideal for snow lovers, skiing, snowboarding, and capturing the breathtaking white wonderland of Gulmarg and Pahalgam."
    },
    {
      id: "faq2",
      question: "Is traveling to Kashmir safe for families and couples?",
      answer: "Yes, absolutely. Kashmir is one of the safest and most tourist-friendly destinations in India. Hundreds of thousands of domestic and international travelers visit every year without any safety concerns. The local Kashmiri people are legendary for their warmth, friendliness, and hospitality. We also provide secure, private, sanitized vehicles with expert local drivers who act as local guides and guardians throughout your journey."
    },
    {
      id: "faq3",
      question: "How do we handle postpaid/prepaid sim cards in Kashmir?",
      answer: "Prepaid SIM cards from outside Jammu & Kashmir do not work in the state due to national security regulations. Only postpaid connection numbers (BNSL, Airtel, Jio) from other states work seamlessly here. If you only have a prepaid SIM, we advise purchasing a local temporary prepaid SIM card upon arrival in Srinagar using your Aadhaar or passport, or utilizing our high-speed hotel/houseboat Wi-Fi."
    },
    {
      id: "faq4",
      question: "What woolens/warm clothes should we carry?",
      answer: "In Spring/Summer (April to September), light woolens, sweaters, or stylish windproof jackets are recommended, especially for chilly evenings, boat rides, or high-altitude stops like Gulmarg Phase 2, Sonamarg, and Yusmarg. In Autumn/Winter (October to March), you will definitely need heavy thermals, warm sweaters, heavy down jackets, woolen mittens, caps, and sturdy snow-proof boots. Waterproof snow jackets can also be rented locally in Gulmarg if needed."
    },
    {
      id: "faq5",
      question: "Can we customize our tour packages?",
      answer: "Yes, definitely! Customization is our absolute specialty. All our featured itineraries are fully flexible. You can add extra days, change hotel preferences, include specific destinations like newly explored Yusmarg and Doodhpathri, swap sightseeing lists, or design a brand new personalized itinerary from scratch. Just fill our Inquiry form or hit the WhatsApp button to chat with our travel designer."
    },
    {
      id: "faq6",
      question: "Is high-altitude mountain sickness a concern in places like Gulmarg?",
      answer: "Srinagar sits at a very manageable altitude of around 5,200 feet, which poses no breathing concerns. High-altitude spots like Gulmarg (Phase-1 is ~8,500 feet) and Pahalgam (~7,200 feet) are also very comfortable. When taking the Gondola cable car up to phase 2 Apharwat Peak (~13,700 feet), some visitors might feel slightly lightheaded. We advise sitting down, staying warm, drinking mineral water, and chewing a piece of clove or ginger. Those with active heart/lung concerns should consult their physician before climbing phase 2."
    },
    {
      id: "faq7",
      question: "How does staying in a houseboat work on Dal Lake?",
      answer: "Staying in a Dal Lake houseboat is an exquisite, cozy, and traditional experience. Houses are stationary (moored along the lake bank) and fitted with running hot water, premium bedrooms, elegant dining areas, and wood-carved lounges. Regular Shikaras (shuttle boats) are provided for free to ferry you from the main boulevard road Ghat directly to the houseboat porch and back whenever you wish."
    },
    {
      id: "faq8",
      question: "Are meals included in the packages?",
      answer: "Yes. All our premium tour packages standardly include daily warm Breakfast and traditional rich multi-cuisine Dinners served right inside your hotels and houseboats. Lunches are traditionally left open to give you maximum freedom to taste amazing local trout, Wazwan street food,, or try diverse restaurants during your active sightseeing trips."
    }
  ]
};
