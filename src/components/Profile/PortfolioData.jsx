
const weddingImages = Object.values(
  import.meta.glob("../../assets/portfolio/wedding/*.webp", {
    eager: true,
    import: "default",
  })
);


const fashionImages = Object.values(
  import.meta.glob("../../assets/portfolio/fashion/*.webp", {
    eager: true,
    import: "default",
  })
);


const portraitImages = Object.values(
  import.meta.glob("../../assets/portfolio/portrait/*.webp", {
    eager: true,
    import: "default",
  })
);


const eventImages = Object.values(
  import.meta.glob("../../assets/portfolio/event/*.webp", {
    eager: true,
    import: "default",
  })
);


const commercialImages = Object.values(
  import.meta.glob("../../assets/portfolio/commercial/*.webp", {
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