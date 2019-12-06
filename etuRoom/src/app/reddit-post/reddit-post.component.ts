import { Component, OnInit } from '@angular/core';
import { RedditPostService } from './reddit-post.service';

@Component({
  selector: 'app-reddit-post',
  templateUrl: './reddit-post.component.html',
  styleUrls: ['./reddit-post.component.css']
})
export class RedditPostComponent implements OnInit {
  posts;

  constructor(private redditPostService: RedditPostService) { }

  ngOnInit() {
    this.posts = this.redditPostService.getSubReddit();
  }

}
