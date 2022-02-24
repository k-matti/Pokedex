import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class CaughtService {
  onCaughtList: number[] = [];

  constructor() {}

  addToCaughtList(id: number) {
    this.onCaughtList.push(id);
  }

  getCaughtList(): Observable<number[]> {
    return of(this.onCaughtList);
  }

  removeFromCaughtList(id: number): void {
    this.onCaughtList.filter((x) => x === id);
  }
}
