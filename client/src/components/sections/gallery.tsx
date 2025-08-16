export default function Gallery() {
  const galleryImages = [
    {
      src: "https://images.unsplash.com/photo-1414235077428-338989a2e8c0?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&h=800",
      alt: "Food spread",
      id: "food-spread"
    },
    {
      src: "https://images.unsplash.com/photo-1521017432531-fbd92d768814?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&h=400",
      alt: "Café seating",
      id: "cafe-seating"
    },
    {
      src: "https://images.unsplash.com/photo-1551024506-0bccd828d307?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&h=800",
      alt: "Signature cocktail",
      id: "signature-cocktail"
    },
    {
      src: "https://images.unsplash.com/photo-1565958011703-44f9829ba187?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&h=400",
      alt: "Dessert plating",
      id: "dessert-plating"
    },
    {
      src: "https://images.unsplash.com/photo-1555396273-367ea4eb4db5?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&h=400",
      alt: "Restaurant exterior",
      id: "restaurant-exterior"
    },
    {
      src: "https://images.unsplash.com/photo-1509042239860-f550ce710b93?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&h=400",
      alt: "Coffee art",
      id: "coffee-art"
    }
  ];

  return (
    <section id="gallery" className="py-20 bg-cream">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="font-display text-4xl md:text-5xl font-bold text-rich-brown mb-4" data-testid="gallery-title">
            Gallery
          </h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto" data-testid="gallery-subtitle">
            A visual feast showcasing our culinary creations and atmosphere
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6" data-testid="gallery-grid">
          {galleryImages.map((image) => (
            <div 
              key={image.id}
              className="relative group cursor-pointer overflow-hidden rounded-2xl shadow-lg"
              data-testid={`gallery-image-${image.id}`}
            >
              <img 
                src={image.src} 
                alt={image.alt} 
                className="w-full h-80 object-cover group-hover:scale-110 transition-transform duration-500"
              />
              <div className="absolute inset-0 bg-black/20 group-hover:bg-black/40 transition-all duration-300"></div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
