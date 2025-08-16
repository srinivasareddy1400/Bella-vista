import { Facebook, Instagram, Twitter } from "lucide-react";

export default function Footer() {
  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <footer className="bg-rich-brown text-cream py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div className="col-span-2">
            <h3 className="font-display text-2xl font-bold text-terracotta mb-4" data-testid="footer-logo">
              Bella Vista
            </h3>
            <p className="text-cream/80 mb-4 max-w-md" data-testid="footer-description">
              Where culinary artistry meets warm hospitality. Join us for an unforgettable dining experience in the heart of the city.
            </p>
            <div className="flex space-x-4" data-testid="footer-social">
              <a 
                href="#" 
                className="text-cream/60 hover:text-terracotta transition-colors duration-300"
                data-testid="footer-link-facebook"
              >
                <Facebook className="h-6 w-6" />
              </a>
              <a 
                href="#" 
                className="text-cream/60 hover:text-terracotta transition-colors duration-300"
                data-testid="footer-link-instagram"
              >
                <Instagram className="h-6 w-6" />
              </a>
              <a 
                href="#" 
                className="text-cream/60 hover:text-terracotta transition-colors duration-300"
                data-testid="footer-link-twitter"
              >
                <Twitter className="h-6 w-6" />
              </a>
            </div>
          </div>
          
          <div>
            <h4 className="font-semibold text-cream mb-4" data-testid="footer-links-title">Quick Links</h4>
            <ul className="space-y-2" data-testid="footer-links">
              <li>
                <button 
                  onClick={() => scrollToSection("menu")}
                  className="text-cream/80 hover:text-terracotta transition-colors duration-300"
                  data-testid="footer-link-menu"
                >
                  Menu
                </button>
              </li>
              <li>
                <button 
                  onClick={() => scrollToSection("about")}
                  className="text-cream/80 hover:text-terracotta transition-colors duration-300"
                  data-testid="footer-link-about"
                >
                  About
                </button>
              </li>
              <li>
                <button 
                  onClick={() => scrollToSection("gallery")}
                  className="text-cream/80 hover:text-terracotta transition-colors duration-300"
                  data-testid="footer-link-gallery"
                >
                  Gallery
                </button>
              </li>
              <li>
                <button 
                  onClick={() => scrollToSection("contact")}
                  className="text-cream/80 hover:text-terracotta transition-colors duration-300"
                  data-testid="footer-link-contact"
                >
                  Contact
                </button>
              </li>
            </ul>
          </div>
          
          <div>
            <h4 className="font-semibold text-cream mb-4" data-testid="footer-contact-title">Contact Info</h4>
            <div className="space-y-2 text-cream/80" data-testid="footer-contact-info">
              <p>123 Culinary Avenue</p>
              <p>New York, NY 10001</p>
              <p>(555) 123-4567</p>
              <p>info@bellavista.com</p>
            </div>
          </div>
        </div>
        
        <div className="border-t border-cream/20 mt-8 pt-8 text-center">
          <p className="text-cream/60" data-testid="footer-copyright">
            &copy; 2024 Bella Vista Restaurant. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}
