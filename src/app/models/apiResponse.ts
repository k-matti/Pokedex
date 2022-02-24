import { Pokemon } from './pokemon';

export interface ApiResponse {
  count: number;
  next: string;
  previous: string;
  results: Pokemon[];
}
