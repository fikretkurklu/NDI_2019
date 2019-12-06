import { Component, OnInit, Inject, Input } from '@angular/core';
import { RedditPostService } from './reddit-post.service';

@Component({
  selector: 'app-reddit-post',
  templateUrl: './reddit-post.component.html',
  styleUrls: ['./reddit-post.component.css']
})
export class RedditPostComponent implements OnInit {
  posts;

  @Input() 
  cat_tag : String;

  constructor(private redditPostService: RedditPostService) {
    // // this.cat_tag = tag;
    // this.cat_tag = "Aides/Logement";
   }

  ngOnInit() {
    this.posts = this.redditPostService.getSubReddit();
    // this.cat_tag = "Aides/Logement";
  }

}
