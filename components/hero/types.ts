export interface CityNode {
  name: string;
  country: string;
  lat: number;
  lon: number;
  isPrimary?: boolean;
}

export interface NetworkArc {
  from: string;
  to: string;
  color?: string;
  speed?: number;
}

export interface FloatingBadge {
  id: string;
  text: string;
  subtext?: string;
  position: [number, number, number];
}
