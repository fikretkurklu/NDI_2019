import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomepageComponent } from './homepage/homepage.component';
import {Routes, RouterModule} from "@angular/router";
import { BourseComponent } from './bourse/bourse.component';

const appRoutes: Routes = [
  {path : "", component : HomepageComponent},
  {path : "Bourse", component : BourseComponent}
];

@NgModule({
  declarations: [
    AppComponent,
    HomepageComponent,
    BourseComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    RouterModule.forRoot(appRoutes)
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
