import { CityNode, NetworkArc, FloatingBadge } from "./types";
import * as THREE from "three";

export const GLOBE_RADIUS = 2.0;

export const GLOBAL_CITIES: CityNode[] = [
  { name: "Kolkata", country: "India", lat: 22.5726, lon: 88.3639, isPrimary: true },
  { name: "Bengaluru", country: "India", lat: 12.9716, lon: 77.5946, isPrimary: true },
  { name: "Singapore", country: "Singapore", lat: 1.3521, lon: 103.8198 },
  { name: "Tokyo", country: "Japan", lat: 35.6762, lon: 139.6503 },
  { name: "Sydney", country: "Australia", lat: -33.8688, lon: 151.2093 },
  { name: "Dubai", country: "UAE", lat: 25.2048, lon: 55.2708 },
  { name: "London", country: "UK", lat: 51.5074, lon: -0.1278 },
  { name: "Berlin", country: "Germany", lat: 52.52, lon: 13.405 },
  { name: "New York", country: "USA", lat: 40.7128, lon: -74.006 },
  { name: "San Francisco", country: "USA", lat: 37.7749, lon: -122.4194 },
  { name: "Toronto", country: "Canada", lat: 43.6532, lon: -79.3832 },
  { name: "São Paulo", country: "Brazil", lat: -23.5505, lon: -46.6333 },
];

export const NETWORK_ARCS: NetworkArc[] = [
  { from: "Kolkata", to: "Bengaluru", color: "#38bdf8", speed: 0.8 },
  { from: "Bengaluru", to: "Singapore", color: "#06b6d4", speed: 0.6 },
  { from: "Kolkata", to: "Dubai", color: "#38bdf8", speed: 0.5 },
  { from: "Dubai", to: "London", color: "#6366f1", speed: 0.6 },
  { from: "London", to: "Berlin", color: "#22d3ee", speed: 0.9 },
  { from: "London", to: "New York", color: "#38bdf8", speed: 0.55 },
  { from: "New York", to: "Toronto", color: "#06b6d4", speed: 0.85 },
  { from: "New York", to: "San Francisco", color: "#818cf8", speed: 0.65 },
  { from: "San Francisco", to: "Tokyo", color: "#38bdf8", speed: 0.5 },
  { from: "Tokyo", to: "Singapore", color: "#06b6d4", speed: 0.7 },
  { from: "Singapore", to: "Sydney", color: "#6366f1", speed: 0.6 },
  { from: "New York", to: "São Paulo", color: "#22d3ee", speed: 0.5 },
];

export const FLOATING_BADGES: FloatingBadge[] = [
  {
    id: "badge-1",
    text: "CONNECTED GLOBALLY",
    subtext: "High-Availability Backend APIs",
    position: [2.1, 1.8, 0.4],
  },
  {
    id: "badge-2",
    text: "DIGITAL NETWORK",
    subtext: "Distributed Cloud Architecture",
    position: [-2.2, -1.4, 0.6],
  },
  {
    id: "badge-3",
    text: "BUILDING THE WEB",
    subtext: "Modern Laravel & Next.js",
    position: [2.3, -1.3, -0.4],
  },
];

/**
 * Converts standard Latitude/Longitude coordinates to 3D Cartesian Vector3 on a sphere of radius R.
 */
export function latLongToVector3(lat: number, lon: number, radius: number): THREE.Vector3 {
  const phi = (90 - lat) * (Math.PI / 180);
  const theta = (lon + 180) * (Math.PI / 180);
  const x = -(radius * Math.sin(phi) * Math.cos(theta));
  const z = radius * Math.sin(phi) * Math.sin(theta);
  const y = radius * Math.cos(phi);
  return new THREE.Vector3(x, y, z);
}
