export interface MedicineItem {
  id: string;
  name: string;
  brand: string;
  category: string;
  mrp: number;
  discountPrice?: number;
  availableQuantity: number;
  expiry: string;
  status: 'Available' | 'Limited Stock' | 'Out of Stock';
  prescriptionRequired: boolean;
  dosageForm: string; // e.g., Tablet, Syrup, Injection, Ointment, Equipment
  description?: string;
}

export interface ServiceCategory {
  id: string;
  title: string;
  subtitle: string;
  description: string;
  iconName: string;
  badge?: string;
  items: string[];
}

export interface GalleryItem {
  id: string;
  title: string;
  category: 'store' | 'shelves' | 'products' | 'equipment' | 'exterior';
  image: string;
  caption: string;
}

export interface FAQItem {
  question: string;
  answer: string;
  category: string;
}

export interface ReviewItem {
  id: string;
  author: string;
  location: string;
  rating: number;
  date: string;
  comment: string;
  verified: boolean;
}

export interface HealthTip {
  id: string;
  title: string;
  category: string;
  readTime: string;
  date: string;
  summary: string;
  image: string;
  content: string[];
}

export interface WhatsAppOrderFormData {
  customerName: string;
  phone: string;
  email: string;
  address: string;
  medicineName: string;
  hasPrescription: boolean;
  prescriptionFileName?: string;
  message: string;
  preferredDeliveryTime: string;
}
