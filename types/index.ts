// Mahadev Book TypeScript interfaces

export interface TeamMember {
  id: number;
  name: string;
  title: string;
  bio: string;
  credentials: string[];
  image: string;
  alt: string;
}

export interface Testimonial {
  id: number;
  name: string;
  city: string;
  review: string;
  rating: number;
  image: string;
}

export interface FAQItem {
  id: number;
  question: string;
  answer: string;
}

export interface BlogPost {
  id: number;
  slug: string;
  title: string;
  date: string;
  category: string;
  image: string;
  alt: string;
}

export interface KnowledgeCard {
  id: number;
  icon: string;
  title: string;
  description: string;
  linkText: string;
}

export interface FeatureCard {
  id: number;
  icon: string;
  title: string;
  description: string;
}

export interface Benefit {
  id: number;
  title: string;
  description: string;
  reverse: boolean;
}

export interface PaymentMethod {
  id: number;
  name: string;
  icon: string;
}
