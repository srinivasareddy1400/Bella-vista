import { Clock, MapPin, Phone } from "lucide-react";

export default function HoursInfo() {
  return (
    <section className="py-16 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-center">
          <div className="p-6" data-testid="info-hours">
            <Clock className="h-12 w-12 text-terracotta mb-4 mx-auto" />
            <h3 className="font-display text-xl font-semibold mb-2" data-testid="hours-title">Hours</h3>
            <div className="text-gray-600" data-testid="hours-content">
              <p>Mon-Thu: 11:00 AM - 10:00 PM</p>
              <p>Fri-Sat: 11:00 AM - 11:00 PM</p>
              <p>Sunday: 10:00 AM - 9:00 PM</p>
            </div>
          </div>
          
          <div className="p-6" data-testid="info-location">
            <MapPin className="h-12 w-12 text-terracotta mb-4 mx-auto" />
            <h3 className="font-display text-xl font-semibold mb-2" data-testid="location-title">Location</h3>
            <div className="text-gray-600" data-testid="location-content">
              <p>123 Culinary Avenue</p>
              <p>Downtown District</p>
              <p>New York, NY 10001</p>
            </div>
          </div>
          
          <div className="p-6" data-testid="info-contact">
            <Phone className="h-12 w-12 text-terracotta mb-4 mx-auto" />
            <h3 className="font-display text-xl font-semibold mb-2" data-testid="contact-title">Contact</h3>
            <div className="text-gray-600" data-testid="contact-content">
              <p>Phone: (555) 123-4567</p>
              <p>Email: info@bellavista.com</p>
              <p>Reservations Welcome</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
