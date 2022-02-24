import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class WishlistService {
  onWishlist: number[] = [];

  constructor() {}

  addToWishlist(id: number) {
    this.onWishlist.push(id);
  }

  getWishlist(): Observable<number[]> {
    return of(this.onWishlist);
  }

  removeFromWishlist(id: number): void {
    this.onWishlist.filter((x) => x === id);
  }
}
