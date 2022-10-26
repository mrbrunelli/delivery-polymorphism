interface LatLong {
  latitude: number;
  longitude: number;
}

export interface Route {
  from: LatLong;
  to: LatLong;
}
