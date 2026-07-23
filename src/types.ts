export interface PhotoMemory {
  id: string;
  url: string;
  caption: string;
  date: string;
  location: string;
  description: string;
  leftPage: boolean; // For Section 2 album spread arrangement
  rotationOffset: number; // Organic tilt in degrees
  tapePosition: 'top-left' | 'top-right' | 'top-center';
  annotationText?: string;
}

export interface BannerStory {
  id: string;
  title: string;
  subtitle: string;
  date: string;
  imageUrl: string;
  location: string;
  quote: string;
}

export interface LoveNote {
  title: string;
  date: string;
  salutation: string;
  body: string[];
  closing: string;
  signature: string;
}
