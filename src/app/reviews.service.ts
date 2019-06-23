import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ReviewsService {

  constructor() { }

  sortReviews(array: any[]): any[] {
    return array.sort((b,a) => a.mark.localeCompare(b.mark));
  }  
}
