export const categories = [
  { 
    id: "jeans",
    name: "Jeans", 
    href: "/jeans", 
    imageUrl: "/jeans.jpg"
  },
  { 
    id: "t-shirts",
    name: "T-shirts", 
    href: "/t-shirts", 
    imageUrl: "/tshirts.jpg"
  },
  { 
    id: "shoes",
    name: "Shoes", 
    href: "/shoes", 
    imageUrl: "/shoes.jpg"
  },
  { 
    id: "glasses",
    name: "Glasses", 
    href: "/glasses", 
    imageUrl: "/glasses.png"
  },
  { 
    id: "jackets",
    name: "Jackets", 
    href: "/jackets", 
    imageUrl: "/jackets.jpg"
  },
  { 
    id: "suits",
    name: "Suits", 
    href: "/suits", 
    imageUrl: "/suits.jpg"
  },
  { 
    id: "bags",
    name: "Bags", 
    href: "/bags", 
    imageUrl: "/bags.jpg"
  },
  { 
    id: "beds",
    name: "Beds", 
    href: "/beds", 
    imageUrl: "/beds.jpg"
  },
  { 
    id: "techs",
    name: "Techs", 
    href: "/techs", 
    imageUrl: "/techs.jpg"
  }
];

// Helper function to get category IDs for forms
export const getCategoryIds = () => categories.map(cat => cat.id);

// Helper function to get category by ID
export const getCategoryById = (id) => categories.find(cat => cat.id === id);

// Helper function to shuffle categories for homepage
export const shuffleCategories = () => {
  const shuffled = [...categories];
  for (let i = shuffled.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [shuffled[i], shuffled[j]] = [shuffled[j], shuffled[i]];
  }
  return shuffled;
};