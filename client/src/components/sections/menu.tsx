import { useState } from "react";
import { useQuery } from "@tanstack/react-query";
import { MenuItem } from "@shared/schema";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";

export default function Menu() {
  const [selectedCategory, setSelectedCategory] = useState("all");

  const { data: menuItems, isLoading } = useQuery<MenuItem[]>({
    queryKey: ["/api/menu"],
  });

  const categories = [
    { id: "all", label: "All" },
    { id: "appetizers", label: "Appetizers" },
    { id: "mains", label: "Main Courses" },
    { id: "desserts", label: "Desserts" },
    { id: "beverages", label: "Beverages" },
  ];

  const filteredItems = menuItems?.filter(item => 
    selectedCategory === "all" || item.category === selectedCategory
  ) || [];

  const getTagColor = (tag: string) => {
    const colors: Record<string, string> = {
      vegetarian: "bg-sage/20 text-sage",
      seafood: "bg-blue-100 text-blue-600",
      premium: "bg-red-100 text-red-600",
      healthy: "bg-blue-100 text-blue-600",
      signature: "bg-purple-100 text-purple-600",
      "chef's choice": "bg-amber-100 text-amber-600",
      traditional: "bg-sage/20 text-sage",
      artisan: "bg-amber-100 text-amber-600",
      craft: "bg-amber-100 text-amber-600",
    };
    return colors[tag] || "bg-gray-100 text-gray-600";
  };

  if (isLoading) {
    return (
      <section id="menu" className="py-20 bg-cream">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <div className="animate-pulse">
              <div className="h-8 bg-gray-300 rounded w-48 mx-auto mb-4"></div>
              <div className="h-4 bg-gray-300 rounded w-96 mx-auto"></div>
            </div>
          </div>
        </div>
      </section>
    );
  }

  return (
    <section id="menu" className="py-20 bg-cream">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="font-display text-4xl md:text-5xl font-bold text-rich-brown mb-4" data-testid="menu-title">
            Our Menu
          </h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto" data-testid="menu-subtitle">
            Crafted with the finest ingredients and inspired by seasonal flavors
          </p>
        </div>
        
        {/* Menu Categories */}
        <div className="flex flex-wrap justify-center gap-4 mb-12">
          {categories.map((category) => (
            <button
              key={category.id}
              onClick={() => setSelectedCategory(category.id)}
              className={`px-6 py-2 rounded-full font-medium transition-all duration-300 ${
                selectedCategory === category.id
                  ? "bg-terracotta text-white"
                  : "bg-white text-rich-brown hover:bg-terracotta hover:text-white"
              }`}
              data-testid={`filter-${category.id}`}
            >
              {category.label}
            </button>
          ))}
        </div>
        
        {/* Menu Items Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8" data-testid="menu-grid">
          {filteredItems.map((item) => (
            <Card 
              key={item.id} 
              className="bg-white rounded-2xl shadow-lg overflow-hidden transform hover:scale-105 transition-all duration-300"
              data-testid={`menu-item-${item.id}`}
            >
              <img 
                src={item.image} 
                alt={item.name} 
                className="w-full h-48 object-cover"
                data-testid={`menu-item-image-${item.id}`}
              />
              <CardContent className="p-6">
                <h3 className="font-display text-xl font-semibold mb-2" data-testid={`menu-item-name-${item.id}`}>
                  {item.name}
                </h3>
                <p className="text-gray-600 mb-3" data-testid={`menu-item-description-${item.id}`}>
                  {item.description}
                </p>
                <div className="flex justify-between items-center">
                  <span className="text-2xl font-bold text-terracotta" data-testid={`menu-item-price-${item.id}`}>
                    ${item.price}
                  </span>
                  {item.tags && item.tags.length > 0 && (
                    <Badge 
                      className={getTagColor(item.tags[0])}
                      data-testid={`menu-item-tag-${item.id}`}
                    >
                      {item.tags[0]}
                    </Badge>
                  )}
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}
