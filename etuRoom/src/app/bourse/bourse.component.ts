import { Component, OnInit } from '@angular/core';
import { RedditPostComponent } from '../reddit-post/reddit-post.component';

@Component({
  selector: 'app-bourse',
  templateUrl: './bourse.component.html',
  styleUrls: ['./bourse.component.css']
})
export class BourseComponent implements OnInit {
  tag: String = "";

  constructor() { }

  ngOnInit() {
  }

}
