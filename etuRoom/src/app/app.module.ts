import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavbarComponent } from './core/components/navbar/navbar.component';
import { HomepageComponent } from './homepage/homepage.component';
import {Routes, RouterModule} from "@angular/router";
import { BourseComponent } from './bourse/bourse.component';
import { FilterPipe } from './filter.pipe';
import { FormsModule } from '@angular/forms';
import { ResultSearchComponent } from './result-search/result-search.component'

const appRoutes: Routes = [
  {path : "", component : HomepageComponent},
  {path : "Bourse", component : BourseComponent},
  {path: "ResultSearch", component : ResultSearchComponent}
];

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    HomepageComponent,
    BourseComponent,
    FilterPipe,
    ResultSearchComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    RouterModule.forRoot(appRoutes),
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
