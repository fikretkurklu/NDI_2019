import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root',
})
export class RedditPostService {
  // configUrl = 'assets/config.json';
  configUrl = 'https://www.reddit.com/r/Eturoom/top/.json?count=20';

  constructor(private httpClient: HttpClient) { }

  getSubReddit() {
    let posts = [];
    this.httpClient.get(this.configUrl)
    .subscribe(
      (response) => {
        response["data"].children.forEach(elem => posts.push({
          title: elem.data.title,
          tag: elem.data.link_flair_text,
          url: elem.data.url
        }));
      },
      (error) => {
        console.log('Erreur !' + error)
      }
    );

    return posts;
  }


}
