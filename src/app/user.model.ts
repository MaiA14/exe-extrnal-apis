export interface User {
  id: number;
  name: string;
  username: string;
  email: string;
  address: Address;
  geo: Geo;
}

export interface Address {
  street: string;
  city: string;
  zipcode: string;
}

export interface Geo {
  lat: number;
  lng: number;
}


