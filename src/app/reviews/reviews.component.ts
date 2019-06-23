import { Component, OnInit } from '@angular/core';
import { ReviewsService } from '../reviews.service';
import { Http } from '@angular/http';
import { Review } from '../review.model';

@Component({
  selector: 'app-reviews',
  templateUrl: './reviews.component.html',
  styleUrls: ['./reviews.component.css'],
})
// export class ReviewsComponent implements OnInit {
export class ReviewsComponent implements OnInit {
  title = "List of reviews";
  reviews: Review[];
  url: string = 'https://api-qa.trustedshops.com/rest/internal/v2/shops/X6A4AACCD2C75E430381B2E1C4CLASSIC/reviews.json';

  // had to install http: npm i @angular/http
  constructor(private http: Http, private service: ReviewsService) {
    http.get(this.url).subscribe(data => {
      let unsortedReviews = data.json().response.data.shop.reviews;
      this.reviews = service.sortReviews(unsortedReviews);
      console.log(this.reviews);
    },
      error => console.log(error)
    );
  }

  ngOnInit() {

  }

  refresh() {
    console.log("refresh() was called.")
    this.http.get(this.url).subscribe(data => {
      let unsortedReviews = data.json().response.data.shop.reviews;
      this.reviews = this.service.sortReviews(unsortedReviews);
      console.log("Reviews got refreshed!")
    },
      error => console.log(error)
    );
  }

}
