import { useState } from "react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { z } from "zod";
import { MapPin, Phone, Mail, Clock, Facebook, Instagram, Twitter } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { useSimpleToast } from "@/hooks/use-simple-toast";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";

// Form submission will be handled locally
const FORM_SUBMIT_DELAY = 1500; // Simulate network delay in ms

const contactFormSchema = z.object({
  firstName: z.string().min(1, "First name is required"),
  lastName: z.string().min(1, "Last name is required"),
  email: z.string().email("Please enter a valid email address"),
  phone: z.string().optional(),
  reservationDate: z.string().optional(),
  partySize: z.string().optional(),
  specialRequests: z.string().optional(),
});

type ContactFormData = z.infer<typeof contactFormSchema>;

export default function Contact() {
  const { showToast, Toast } = useSimpleToast();
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);
  
  const form = useForm<ContactFormData>({
    resolver: zodResolver(contactFormSchema),
    defaultValues: {
      firstName: "",
      lastName: "",
      email: "",
      phone: "",
      reservationDate: "",
      partySize: "",
      specialRequests: "",
    },
  });

  const onSubmit = async (data: ContactFormData) => {
    setIsSubmitting(true);
    
    // Simulate network delay
    await new Promise(resolve => setTimeout(resolve, FORM_SUBMIT_DELAY));
    
    try {
      // Log the form data to console (for testing)
      console.log('Form submitted:', {
        name: `${data.firstName} ${data.lastName}`,
        email: data.email,
        phone: data.phone,
        reservationDate: data.reservationDate,
        partySize: data.partySize,
        specialRequests: data.specialRequests,
      });
      
      // Set submitted state to show success message
      setIsSubmitted(true);
      
      // Reset the form
      form.reset();
      
      // Hide success message after 5 seconds
      setTimeout(() => {
        setIsSubmitted(false);
      }, 5000);
    } catch (error) {
      console.error('Form submission error:', error);
      showToast("Something went wrong. Please try again later.", "error");
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <section id="contact" className="py-20 bg-white relative">
      {/* Success Message */}
      {isSubmitted && (
        <div className="fixed bottom-6 right-6 z-50">
          <div className="bg-cream border border-gray-200 text-gray-800 px-6 py-4 rounded-lg shadow-lg flex items-center space-x-3 max-w-md">
            <div className="flex-shrink-0">
              <svg className="h-6 w-6 text-green-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
              </svg>
            </div>
            <div>
              <p className="font-medium text-gray-900">Message Sent Successfully!</p>
              <p className="text-sm text-gray-600">Thank you for contacting us. We'll get back to you soon.</p>
            </div>
            <button 
              onClick={() => setIsSubmitted(false)}
              className="text-gray-500 hover:text-gray-700 focus:outline-none ml-4"
              aria-label="Close notification"
            >
              <svg className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
              </svg>
            </button>
          </div>
        </div>
      )}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="font-display text-4xl md:text-5xl font-bold text-rich-brown mb-4" data-testid="contact-title">
            Contact Us
          </h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto" data-testid="contact-subtitle">
            Ready to experience Bella Vista? Get in touch for reservations or inquiries
          </p>
        </div>
        
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {/* Contact Form */}
          <div className="bg-cream p-8 rounded-2xl" data-testid="contact-form-container">
            <h3 className="font-display text-2xl font-semibold mb-6" data-testid="contact-form-title">
              Send us a message
            </h3>
            <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-6">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="space-y-2">
                  <label htmlFor="firstName" className="text-sm font-medium">
                    First Name
                  </label>
                  <Input
                    id="firstName"
                    placeholder="John"
                    {...form.register("firstName")}
                  />
                  {form.formState.errors.firstName && (
                    <p className="text-sm text-red-500">
                      {form.formState.errors.firstName.message}
                    </p>
                  )}
                </div>
                <div className="space-y-2">
                  <label htmlFor="lastName" className="text-sm font-medium">
                    Last Name
                  </label>
                  <Input
                    id="lastName"
                    placeholder="Doe"
                    {...form.register("lastName")}
                  />
                  {form.formState.errors.lastName && (
                    <p className="text-sm text-red-500">
                      {form.formState.errors.lastName.message}
                    </p>
                  )}
                </div>
              </div>
              <div className="space-y-2">
                <label htmlFor="email" className="text-sm font-medium">
                  Email
                </label>
                <Input
                  id="email"
                  type="email"
                  placeholder="john@example.com"
                  {...form.register("email")}
                />
                {form.formState.errors.email && (
                  <p className="text-sm text-red-500">
                    {form.formState.errors.email.message}
                  </p>
                )}
              </div>
              <div className="space-y-2">
                <label htmlFor="phone" className="text-sm font-medium">
                  Phone Number (Optional)
                </label>
                <Input
                  id="phone"
                  type="tel"
                  placeholder="(123) 456-7890"
                  {...form.register("phone")}
                />
              </div>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="space-y-2">
                  <label htmlFor="reservationDate" className="text-sm font-medium">
                    Reservation Date (Optional)
                  </label>
                  <Input
                    id="reservationDate"
                    type="date"
                    {...form.register("reservationDate")}
                  />
                </div>
                <div className="space-y-2">
                  <label htmlFor="partySize" className="text-sm font-medium">
                    Party Size (Optional)
                  </label>
                  <Select
                    onValueChange={(value) => form.setValue("partySize", value)}
                    value={form.watch("partySize") || ""}
                  >
                    <SelectTrigger>
                      <SelectValue placeholder="Select party size" />
                    </SelectTrigger>
                    <SelectContent>
                      {[1, 2, 3, 4, 5, 6, 7, 8, 9, 10].map((num) => (
                        <SelectItem key={num} value={String(num)}>
                          {num} {num === 1 ? "person" : "people"}
                        </SelectItem>
                      ))}
                      <SelectItem value="10+">10+ people</SelectItem>
                    </SelectContent>
                  </Select>
                </div>
              </div>
              <div className="space-y-2">
                <label htmlFor="specialRequests" className="text-sm font-medium">
                  Special Requests (Optional)
                </label>
                <Textarea
                  id="specialRequests"
                  placeholder="Any special requests or dietary restrictions?"
                  className="min-h-[120px]"
                  {...form.register("specialRequests")}
                />
              </div>
              <Button type="submit" className="w-full" disabled={isSubmitting}>
                {isSubmitting ? "Sending..." : "Send Message"}
              </Button>
            </form>
          </div>
          
          {/* Contact Information */}
          <div className="space-y-8">
            <div>
              <h3 className="font-display text-2xl font-semibold mb-6" data-testid="contact-info-title">
                Visit Us
              </h3>
              
              <div className="space-y-6">
                <div className="flex items-start space-x-4" data-testid="contact-info-address">
                  <MapPin className="text-terracotta text-xl mt-1 flex-shrink-0" />
                  <div>
                    <h4 className="font-semibold text-rich-brown mb-1">Address</h4>
                    <div className="text-gray-600">
                      <p>123 Culinary Avenue</p>
                      <p>Downtown District</p>
                      <p>New York, NY 10001</p>
                    </div>
                  </div>
                </div>
                
                <div className="flex items-start space-x-4" data-testid="contact-info-phone">
                  <Phone className="text-terracotta text-xl mt-1 flex-shrink-0" />
                  <div>
                    <h4 className="font-semibold text-rich-brown mb-1">Phone</h4>
                    <p className="text-gray-600">(555) 123-4567</p>
                  </div>
                </div>
                
                <div className="flex items-start space-x-4" data-testid="contact-info-email">
                  <Mail className="text-terracotta text-xl mt-1 flex-shrink-0" />
                  <div>
                    <h4 className="font-semibold text-rich-brown mb-1">Email</h4>
                    <p className="text-gray-600">info@bellavista.com</p>
                  </div>
                </div>
                
                <div className="flex items-start space-x-4" data-testid="contact-info-hours">
                  <Clock className="text-terracotta text-xl mt-1 flex-shrink-0" />
                  <div>
                    <h4 className="font-semibold text-rich-brown mb-1">Hours</h4>
                    <div className="text-gray-600">
                      <p>Monday - Thursday: 11:00 AM - 10:00 PM</p>
                      <p>Friday - Saturday: 11:00 AM - 11:00 PM</p>
                      <p>Sunday: 10:00 AM - 9:00 PM</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            
            {/* Social Media */}
            <div>
              <h4 className="font-semibold text-rich-brown mb-4" data-testid="social-media-title">
                Follow Us
              </h4>
              <div className="flex space-x-4">
                <a 
                  href="#" 
                  className="bg-terracotta text-white p-3 rounded-full hover:bg-terracotta/90 transition-colors duration-300"
                  data-testid="link-facebook"
                >
                  <Facebook className="h-5 w-5" />
                </a>
                <a 
                  href="#" 
                  className="bg-terracotta text-white p-3 rounded-full hover:bg-terracotta/90 transition-colors duration-300"
                  data-testid="link-instagram"
                >
                  <Instagram className="h-5 w-5" />
                </a>
                <a 
                  href="#" 
                  className="bg-terracotta text-white p-3 rounded-full hover:bg-terracotta/90 transition-colors duration-300"
                  data-testid="link-twitter"
                >
                  <Twitter className="h-5 w-5" />
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
      <Toast />
    </section>
  );
}
