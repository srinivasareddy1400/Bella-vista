import { useState, useEffect } from "react";
import { Menu, X } from "lucide-react";

export default function Navigation() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 100);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
    setIsMenuOpen(false);
  };

  return (
    <nav className={`fixed top-0 w-full z-50 border-b transition-all duration-300 ${
      isScrolled ? 'bg-cream/95 backdrop-blur-md border-terracotta/10' : 'bg-cream/95 backdrop-blur-md border-terracotta/10'
    }`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          <div className="flex-shrink-0">
            <h1 className="font-display text-2xl font-bold text-terracotta" data-testid="logo">
              Bella Vista
            </h1>
          </div>
          
          {/* Desktop Navigation */}
          <div className="hidden md:block">
            <div className="ml-10 flex items-baseline space-x-8">
              <button 
                onClick={() => scrollToSection("home")}
                className="text-rich-brown hover:text-terracotta transition-colors duration-300"
                data-testid="nav-home"
              >
                Home
              </button>
              <button 
                onClick={() => scrollToSection("menu")}
                className="text-rich-brown hover:text-terracotta transition-colors duration-300"
                data-testid="nav-menu"
              >
                Menu
              </button>
              <button 
                onClick={() => scrollToSection("about")}
                className="text-rich-brown hover:text-terracotta transition-colors duration-300"
                data-testid="nav-about"
              >
                About
              </button>
              <button 
                onClick={() => scrollToSection("gallery")}
                className="text-rich-brown hover:text-terracotta transition-colors duration-300"
                data-testid="nav-gallery"
              >
                Gallery
              </button>
              <button 
                onClick={() => scrollToSection("contact")}
                className="text-rich-brown hover:text-terracotta transition-colors duration-300"
                data-testid="nav-contact"
              >
                Contact
              </button>
            </div>
          </div>
          
          {/* Mobile menu button */}
          <div className="md:hidden">
            <button 
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="text-rich-brown hover:text-terracotta"
              data-testid="mobile-menu-button"
            >
              {isMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
            </button>
          </div>
        </div>
      </div>
      
      {/* Mobile Navigation */}
      {isMenuOpen && (
        <div className="md:hidden bg-cream border-t border-terracotta/10" data-testid="mobile-menu">
          <div className="px-2 pt-2 pb-3 space-y-1">
            <button 
              onClick={() => scrollToSection("home")}
              className="block w-full text-left px-3 py-2 text-rich-brown hover:text-terracotta transition-colors duration-300"
              data-testid="mobile-nav-home"
            >
              Home
            </button>
            <button 
              onClick={() => scrollToSection("menu")}
              className="block w-full text-left px-3 py-2 text-rich-brown hover:text-terracotta transition-colors duration-300"
              data-testid="mobile-nav-menu"
            >
              Menu
            </button>
            <button 
              onClick={() => scrollToSection("about")}
              className="block w-full text-left px-3 py-2 text-rich-brown hover:text-terracotta transition-colors duration-300"
              data-testid="mobile-nav-about"
            >
              About
            </button>
            <button 
              onClick={() => scrollToSection("gallery")}
              className="block w-full text-left px-3 py-2 text-rich-brown hover:text-terracotta transition-colors duration-300"
              data-testid="mobile-nav-gallery"
            >
              Gallery
            </button>
            <button 
              onClick={() => scrollToSection("contact")}
              className="block w-full text-left px-3 py-2 text-rich-brown hover:text-terracotta transition-colors duration-300"
              data-testid="mobile-nav-contact"
            >
              Contact
            </button>
          </div>
        </div>
      )}
    </nav>
  );
}
