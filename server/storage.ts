import { type MenuItem, type InsertMenuItem, type ContactSubmission, type InsertContactSubmission } from "@shared/schema";
import { randomUUID } from "crypto";

export interface IStorage {
  getMenuItems(): Promise<MenuItem[]>;
  getMenuItemsByCategory(category: string): Promise<MenuItem[]>;
  createContactSubmission(submission: InsertContactSubmission): Promise<ContactSubmission>;
}

export class MemStorage implements IStorage {
  private menuItems: Map<string, MenuItem>;
  private contactSubmissions: Map<string, ContactSubmission>;

  constructor() {
    this.menuItems = new Map();
    this.contactSubmissions = new Map();
    this.initializeMenuItems();
  }

  private initializeMenuItems() {
    const items: MenuItem[] = [
      {
        id: "1",
        name: "Burrata & Heirloom Tomatoes",
        description: "Fresh burrata cheese with seasonal heirloom tomatoes, basil oil, and aged balsamic",
        price: "18.00",
        category: "appetizers",
        image: "https://images.unsplash.com/photo-1565299624946-b28f40a0ca4b?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&h=600",
        tags: ["vegetarian"]
      },
      {
        id: "2",
        name: "Pan-Seared Scallops",
        description: "Diver scallops with cauliflower purée, pancetta crisps, and micro greens",
        price: "24.00",
        category: "appetizers",
        image: "https://images.unsplash.com/photo-1559847844-d721426d6edc?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&h=600",
        tags: ["seafood"]
      },
      {
        id: "3",
        name: "Dry-Aged Ribeye",
        description: "28-day dry-aged ribeye with truffle mashed potatoes and seasonal vegetables",
        price: "48.00",
        category: "mains",
        image: "https://images.unsplash.com/photo-1546833999-b9f581a1996d?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&h=600",
        tags: ["premium"]
      },
      {
        id: "4",
        name: "Cedar Plank Salmon",
        description: "Atlantic salmon with quinoa risotto, roasted vegetables, and lemon herb sauce",
        price: "32.00",
        category: "mains",
        image: "https://images.unsplash.com/photo-1467003909585-2f8a72700288?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&h=600",
        tags: ["healthy"]
      },
      {
        id: "5",
        name: "Lobster Ravioli",
        description: "House-made ravioli filled with Maine lobster in brown butter sage sauce",
        price: "36.00",
        category: "mains",
        image: "https://images.unsplash.com/photo-1621996346565-e3dbc353d2e5?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&h=600",
        tags: ["signature"]
      },
      {
        id: "6",
        name: "Valrhona Chocolate Soufflé",
        description: "Warm chocolate soufflé with vanilla bean ice cream and raspberry coulis",
        price: "14.00",
        category: "desserts",
        image: "https://images.unsplash.com/photo-1571877227200-a0d98ea607e9?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&h=600",
        tags: ["chef's choice"]
      },
      {
        id: "7",
        name: "Classic Tiramisu",
        description: "Traditional Italian tiramisu with espresso-soaked ladyfingers and mascarpone",
        price: "12.00",
        category: "desserts",
        image: "https://images.unsplash.com/photo-1571877227200-a0d98ea607e9?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&h=600",
        tags: ["traditional"]
      },
      {
        id: "8",
        name: "Signature Espresso",
        description: "Single-origin Ethiopian beans with notes of chocolate and citrus",
        price: "6.00",
        category: "beverages",
        image: "https://images.unsplash.com/photo-1509042239860-f550ce710b93?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&h=600",
        tags: ["artisan"]
      },
      {
        id: "9",
        name: "Bella Vista Old Fashioned",
        description: "House bourbon with maple syrup, orange bitters, and smoked cherry",
        price: "16.00",
        category: "beverages",
        image: "https://images.unsplash.com/photo-1514361892635-6b07e31e75f9?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&h=600",
        tags: ["craft"]
      }
    ];

    items.forEach(item => this.menuItems.set(item.id, item));
  }

  async getMenuItems(): Promise<MenuItem[]> {
    return Array.from(this.menuItems.values());
  }

  async getMenuItemsByCategory(category: string): Promise<MenuItem[]> {
    return Array.from(this.menuItems.values()).filter(item => item.category === category);
  }

  async createContactSubmission(insertSubmission: InsertContactSubmission): Promise<ContactSubmission> {
    const id = randomUUID();
    const submission: ContactSubmission = {
      ...insertSubmission,
      id,
      createdAt: new Date().toISOString(),
    };
    this.contactSubmissions.set(id, submission);
    return submission;
  }
}

export const storage = new MemStorage();
