import { BrowserModule } from "@angular/platform-browser";
import { NgModule } from "@angular/core";

import { AppRoutingModule } from "./app-routing.module";
import { AppComponent } from "./app.component";
import { NavbarComponent } from "./core/components/navbar/navbar.component";
import { HomepageComponent } from "./homepage/homepage.component";
import { Routes, RouterModule } from "@angular/router";
import { BourseComponent } from "./bourse/bourse.component";
import { TranslateModule, TranslateLoader } from "@ngx-translate/core";
import { TranslateHttpLoader } from "@ngx-translate/http-loader";
import { HttpClientModule, HttpClient } from "@angular/common/http";

export function HttpLoaderFactory(http: HttpClient) {
  return new TranslateHttpLoader(http);
}

const appRoutes: Routes = [
  { path: "", component: HomepageComponent },
  { path: "Bourse", component: BourseComponent }
];

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    HomepageComponent,
    BourseComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    RouterModule.forRoot(appRoutes),
    TranslateModule.forRoot({
      loader: {
        provide: TranslateLoader,
        useFactory: HttpLoaderFactory,
        deps: [HttpClient]
      }
    })
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {}
