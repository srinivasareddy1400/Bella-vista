import { ChevronDown } from "lucide-react";

export default function Hero() {
  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <section id="home" className="relative min-h-screen flex items-center justify-center overflow-hidden">
      <div 
        className="absolute inset-0 bg-cover bg-center bg-fixed"
        style={{
          backgroundImage: "url('https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?ixlib=rb-4.0.3&auto=format&fit=crop&w=1920&h=1080')"
        }}
      >
        <div className="absolute inset-0 bg-black/40"></div>
      </div>
      
      <div className="relative z-10 text-center text-white px-4 sm:px-6 lg:px-8">
        <h1 className="font-display text-5xl md:text-7xl font-bold mb-6 leading-tight" data-testid="hero-title">
          Bella Vista
        </h1>
        <p className="text-xl md:text-2xl mb-8 max-w-2xl mx-auto font-light" data-testid="hero-subtitle">
          Where culinary artistry meets warm hospitality in the heart of the city
        </p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <button 
            onClick={() => scrollToSection("menu")}
            className="bg-terracotta hover:bg-terracotta/90 text-white px-8 py-3 rounded-full font-medium transition-all duration-300 transform hover:scale-105"
            data-testid="button-view-menu"
          >
            View Menu
          </button>
          <button 
            onClick={() => scrollToSection("contact")}
            className="border-2 border-white text-white hover:bg-white hover:text-rich-brown px-8 py-3 rounded-full font-medium transition-all duration-300"
            data-testid="button-make-reservation"
          >
            Make Reservation
          </button>
        </div>
      </div>
      
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 text-white animate-bounce">
        <ChevronDown className="h-8 w-8" />
      </div>
    </section>
  );
}
