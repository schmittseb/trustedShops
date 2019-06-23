import { Component, OnInit } from '@angular/core';
import { ReviewsComponent } from '../reviews/reviews.component';
import { Http } from '@angular/http';
import { ReviewsService } from '../reviews.service';

@Component({
  selector: 'app-buttonbar',
  templateUrl: './buttonbar.component.html',
  styleUrls: ['./buttonbar.component.css']
})
export class ButtonbarComponent implements OnInit {

  constructor(private comp: ReviewsComponent) { } 

  ngOnInit() {
  }

  public callRefresh(){
    this.comp.refresh();
  }

  public toggleMode() {
    var element = document.getElementById("myTable");
    element.classList.toggle("mode1");
    element.classList.toggle("mode2");
}



}
