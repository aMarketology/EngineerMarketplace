export interface EngineeringService {
  id: string;
  title: string;
  description: string;
  shortDescription: string;
  price: number;
  category: string;
  subcategory: string;
  duration: string;
  deliverables: string[];
  skills: string[];
  provider: ServiceProvider;
  images: string[];
  rating: number;
  reviewCount: number;
  isAvailable: boolean;
  createdAt: string;
  updatedAt: string;
}

export interface ServiceProvider {
  id: string;
  name: string;
  company?: string;
  avatar: string;
  bio: string;
  location: string;
  yearsExperience: number;
  expertise: string[];
  rating: number;
  completedProjects: number;
  responseTime: string;
  languages: string[];
  certifications: string[];
  hourlyRate?: number;
}

export interface ServiceCategory {
  id: string;
  name: string;
  description: string;
  icon: string;
  subcategories: ServiceSubcategory[];
}

export interface ServiceSubcategory {
  id: string;
  name: string;
  description: string;
}

export interface Review {
  id: string;
  serviceId: string;
  buyerId: string;
  buyerName: string;
  buyerAvatar: string;
  rating: number;
  comment: string;
  createdAt: string;
}

export interface Order {
  id: string;
  serviceId: string;
  buyerId: string;
  sellerId: string;
  status: 'pending' | 'in-progress' | 'completed' | 'cancelled';
  totalAmount: number;
  createdAt: string;
  updatedAt: string;
  requirements?: string;
  deliveredFiles?: string[];
  completedAt?: string;
}