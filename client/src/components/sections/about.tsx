export default function About() {
  return (
    <section id="about" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div>
            <h2 className="font-display text-4xl md:text-5xl font-bold text-rich-brown mb-6" data-testid="about-title">
              Our Story
            </h2>
            <p className="text-lg text-gray-600 mb-6" data-testid="about-paragraph-1">
              Founded in 2010, Bella Vista began as a dream to create a space where exceptional cuisine meets warm hospitality. Our passion for culinary excellence drives us to source the finest ingredients and craft memorable dining experiences.
            </p>
            <p className="text-lg text-gray-600 mb-6" data-testid="about-paragraph-2">
              Led by Executive Chef Maria Rodriguez, our team combines traditional techniques with modern innovation, creating dishes that celebrate both flavor and artistry.
            </p>
            <div className="grid grid-cols-2 gap-6 mt-8">
              <div className="text-center" data-testid="stat-years">
                <div className="text-3xl font-bold text-terracotta mb-2" data-testid="stat-years-number">13+</div>
                <div className="text-gray-600" data-testid="stat-years-label">Years of Excellence</div>
              </div>
              <div className="text-center" data-testid="stat-guests">
                <div className="text-3xl font-bold text-terracotta mb-2" data-testid="stat-guests-number">50k+</div>
                <div className="text-gray-600" data-testid="stat-guests-label">Happy Guests</div>
              </div>
            </div>
          </div>
          
          <div className="space-y-4">
            <img 
              src="https://images.unsplash.com/photo-1577219491135-ce391730fb2c?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&h=600" 
              alt="Chef in kitchen" 
              className="rounded-2xl shadow-lg w-full h-64 object-cover"
              data-testid="about-image-chef"
            />
            
            <div className="grid grid-cols-2 gap-4">
              <img 
                src="https://images.unsplash.com/photo-1555396273-367ea4eb4db5?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&h=300" 
                alt="Restaurant interior" 
                className="rounded-xl shadow-md w-full h-32 object-cover"
                data-testid="about-image-interior"
              />
              <img 
                src="https://images.unsplash.com/photo-1506368083636-6defb67639a7?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&h=300" 
                alt="Fresh ingredients" 
                className="rounded-xl shadow-md w-full h-32 object-cover"
                data-testid="about-image-ingredients"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
