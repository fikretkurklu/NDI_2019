import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavbarComponent } from './core/components/navbar/navbar.component';
import { HomepageComponent } from './homepage/homepage.component';
import {Routes, RouterModule} from "@angular/router";
import { BourseComponent } from './bourse/bourse.component';
import { WhoareweComponent } from './whoarewe/whoarewe.component';

const appRoutes: Routes = [
  {path : "", component : HomepageComponent},
  {path : "Bourse", component : BourseComponent},
  {path : "Whoarewe", component : WhoareweComponent}
];

import { HttpClient, HttpParams, HttpClientModule } from '@angular/common/http';
import { RedditPostComponent } from './reddit-post/reddit-post.component';

@NgModule({
  declarations: [
    AppComponent,
    RedditPostComponent,
    NavbarComponent,
    HomepageComponent,
    BourseComponent,
    WhoareweComponent
  ],
 
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    RouterModule.forRoot(appRoutes)
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
