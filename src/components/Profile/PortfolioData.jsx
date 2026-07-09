// Wedding Images
const weddingImages = Object.values(
  import.meta.glob("../../assets/portfolio/wedding/*.{jpg,jpeg,png}", {
    eager: true,
    import: "default",
  })
);

// Fashion Images
const fashionImages = Object.values(
  import.meta.glob("../../assets/portfolio/fashion/*.{jpg,jpeg,png}", {
    eager: true,
    import: "default",
  })
);

// Portrait Images
const portraitImages = Object.values(
  import.meta.glob("../../assets/portfolio/portrait/*.{jpg,jpeg,png}", {
    eager: true,
    import: "default",
  })
);

// Event Images
const eventImages = Object.values(
  import.meta.glob("../../assets/portfolio/event/*.{jpg,jpeg,png}", {
    eager: true,
    import: "default",
  })
);

// Commercial Images
const commercialImages = Object.values(
  import.meta.glob("../../assets/portfolio/commercial/*.{jpg,jpeg,png}", {
    eager: true,
    import: "default",
  })
);



const portfolioData = [
  ...weddingImages.map((image) => ({
    
    
    category: "Wedding",
    image,
  })),

  ...fashionImages.map((image) => ({
    
    category: "Fashion",
    image,
  })),

  ...portraitImages.map((image) => ({
  
    category: "Portrait",
    image,
  })),

  ...eventImages.map((image) => ({
    
    category: "Events",
    image,
  })),

  ...commercialImages.map((image) => ({
    

    category: "Commercial",
    image,
  })),
];

export default portfolioData;