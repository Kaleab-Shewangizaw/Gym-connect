export interface Gym {
  id: number;
  name: string;
  image: string;
  rating: number;
  price: string;
  desc: string;
  available: boolean;
  location: string;
  equipment: string[];
  amenities: string[];
}

export type Client = {
  name: string;
  id: number;
  sex: string;
  gymId: number;
  subscription: string;
};

export interface Trainer {
  name: string;
  rating: number;
  image: string;
  skills: string[];
  clients: number;
  experience: string;
  available: boolean;
  price: string;
  location: string;
}
