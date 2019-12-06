import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavbarComponent } from './core/components/navbar/navbar.component';
import { HomepageComponent } from './homepage/homepage.component';
import {Routes, RouterModule} from "@angular/router";
import { BourseComponent } from './bourse/bourse.component';
import { APLComponent } from './apl/apl.component';
import { AidesExeptionnellesComponent } from './aides-exeptionnelles/aides-exeptionnelles.component';
import { BourseCritereSociauxComponent } from './bourse-critere-sociaux/bourse-critere-sociaux.component';
import { BourseErasmusComponent } from './bourse-erasmus/bourse-erasmus.component';
import { CrousComponent } from './crous/crous.component';
import { CrousNiv2Component } from './crous-niv2/crous-niv2.component';
import { WhoareweComponent } from './whoarewe/whoarewe.component';

const appRoutes: Routes = [
  {path : "", component : HomepageComponent},

  {path : "Whoarewe", component : WhoareweComponent},

  // ### ###
  {path : "Apl", component : APLComponent},
  {path : "AidesExeptionnelles", component : AidesExeptionnellesComponent},
  {path : "Bourse", component : BourseComponent},
  {path : "Bourse/BourseErasmus", component : BourseErasmusComponent},
  {path : "Bourse/BourseCriteresSociaux", component : BourseCritereSociauxComponent},

  // #### Logement ###
  {path : "Crous", component : CrousComponent},
  {path : "Crous/leCrous", component : CrousNiv2Component},

];

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    HomepageComponent,
    BourseComponent,
    APLComponent,
    AidesExeptionnellesComponent,
    BourseCritereSociauxComponent,
    BourseErasmusComponent,
    CrousComponent,
    CrousNiv2Component,
    WhoareweComponent
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
