import { Component, OnInit } from '@angular/core';
import { RedditPostComponent } from '../reddit-post/reddit-post.component';

@Component({
  selector: 'app-soutien',
  templateUrl: './soutien.component.html',
  styleUrls: ['./soutien.component.css']
})
export class SoutienComponent implements OnInit {
  tag: String = "Assoc/Soutien";
  
  constructor() { }

  ngOnInit() {
  }

}
