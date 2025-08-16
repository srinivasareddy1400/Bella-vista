import { useState } from "react";
import { useMutation } from "@tanstack/react-query";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { z } from "zod";
import { MapPin, Phone, Mail, Clock, Facebook, Instagram, Twitter } from "lucide-react";
import { insertContactSubmissionSchema } from "@shared/schema";
import { apiRequest } from "@/lib/queryClient";
import { useToast } from "@/hooks/use-toast";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Button } from "@/components/ui/button";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";

const contactFormSchema = insertContactSubmissionSchema.extend({
  firstName: z.string().min(1, "First name is required"),
  lastName: z.string().min(1, "Last name is required"),
  email: z.string().email("Please enter a valid email address"),
  phone: z.string().optional(),
  reservationDate: z.string().optional(),
  partySize: z.number().optional(),
  specialRequests: z.string().optional(),
});

type ContactFormData = z.infer<typeof contactFormSchema>;

export default function Contact() {
  const { toast } = useToast();
  
  const form = useForm<ContactFormData>({
    resolver: zodResolver(contactFormSchema),
    defaultValues: {
      firstName: "",
      lastName: "",
      email: "",
      phone: "",
      reservationDate: "",
      partySize: undefined,
      specialRequests: "",
    },
  });

  const contactMutation = useMutation({
    mutationFn: async (data: ContactFormData) => {
      return apiRequest("POST", "/api/contact", data);
    },
    onSuccess: () => {
      toast({
        title: "Message sent successfully!",
        description: "We'll get back to you soon.",
      });
      form.reset();
    },
    onError: (error) => {
      toast({
        title: "Error sending message",
        description: error instanceof Error ? error.message : "Please try again later.",
        variant: "destructive",
      });
    },
  });

  const onSubmit = (data: ContactFormData) => {
    contactMutation.mutate(data);
  };

  return (
    <section id="contact" className="py-20 bg-white">
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
            <Form {...form}>
              <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-6" data-testid="contact-form">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <FormField
                    control={form.control}
                    name="firstName"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel>First Name</FormLabel>
                        <FormControl>
                          <Input placeholder="John" {...field} data-testid="input-firstName" />
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    )}
                  />
                  <FormField
                    control={form.control}
                    name="lastName"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel>Last Name</FormLabel>
                        <FormControl>
                          <Input placeholder="Doe" {...field} data-testid="input-lastName" />
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    )}
                  />
                </div>
                
                <FormField
                  control={form.control}
                  name="email"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>Email</FormLabel>
                      <FormControl>
                        <Input type="email" placeholder="john@example.com" {...field} data-testid="input-email" />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />
                
                <FormField
                  control={form.control}
                  name="phone"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>Phone</FormLabel>
                      <FormControl>
                        <Input type="tel" placeholder="(555) 123-4567" {...field} data-testid="input-phone" />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />
                
                <FormField
                  control={form.control}
                  name="reservationDate"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>Reservation Date</FormLabel>
                      <FormControl>
                        <Input type="date" {...field} data-testid="input-reservationDate" />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />
                
                <FormField
                  control={form.control}
                  name="partySize"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>Party Size</FormLabel>
                      <Select onValueChange={(value) => field.onChange(parseInt(value))}>
                        <FormControl>
                          <SelectTrigger data-testid="select-partySize">
                            <SelectValue placeholder="Select party size" />
                          </SelectTrigger>
                        </FormControl>
                        <SelectContent>
                          <SelectItem value="2">2 guests</SelectItem>
                          <SelectItem value="3">3 guests</SelectItem>
                          <SelectItem value="4">4 guests</SelectItem>
                          <SelectItem value="5">5 guests</SelectItem>
                          <SelectItem value="6">6+ guests</SelectItem>
                        </SelectContent>
                      </Select>
                      <FormMessage />
                    </FormItem>
                  )}
                />
                
                <FormField
                  control={form.control}
                  name="specialRequests"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>Special Requests</FormLabel>
                      <FormControl>
                        <Textarea 
                          rows={4} 
                          placeholder="Any dietary restrictions or special occasion details..."
                          {...field}
                          data-testid="textarea-specialRequests"
                        />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />
                
                <Button 
                  type="submit" 
                  className="w-full bg-terracotta hover:bg-terracotta/90 text-white py-3 rounded-lg font-medium transition-all duration-300 transform hover:scale-105"
                  disabled={contactMutation.isPending}
                  data-testid="button-submit-contact"
                >
                  {contactMutation.isPending ? "Sending..." : "Send Message"}
                </Button>
              </form>
            </Form>
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
    </section>
  );
}
