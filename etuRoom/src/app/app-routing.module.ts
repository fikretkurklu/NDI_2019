import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { RedditPostComponent } from './reddit-post/reddit-post.component';

const routes: Routes = [
  { path: 'redditpost', component: RedditPostComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
