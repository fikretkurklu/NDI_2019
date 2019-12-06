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
import { APLComponent } from "./apl/apl.component";
import { AidesExeptionnellesComponent } from "./aides-exeptionnelles/aides-exeptionnelles.component";
import { BourseCritereSociauxComponent } from "./bourse-critere-sociaux/bourse-critere-sociaux.component";
import { BourseErasmusComponent } from "./bourse-erasmus/bourse-erasmus.component";
import { CrousComponent } from "./crous/crous.component";
import { CrousNiv2Component } from "./crous-niv2/crous-niv2.component";
import { WhoareweComponent } from "./whoarewe/whoarewe.component";
import { LeBonCoinComponent } from './le-bon-coin/le-bon-coin.component';
import { AmeliComponent } from './ameli/ameli.component';
import { CentreSanteComponent } from './centre-sante/centre-sante.component';
import { DistributionsAlimentairesComponent } from './distributions-alimentaires/distributions-alimentaires.component';
import { SoutienComponent } from './soutien/soutien.component';
import { AidesFinancieresComponent } from './aides-financieres/aides-financieres.component';
import { AidesLogementComponent } from './aides-logement/aides-logement.component';
import { AidesSocialesComponent } from './aides-sociales/aides-sociales.component';
import { CnousComponent } from './cnous/cnous.component';
import { AboutusComponent } from './aboutus/aboutus.component';

export function HttpLoaderFactory(http: HttpClient) {
  return new TranslateHttpLoader(http);
}

const appRoutes: Routes = [
  { path: "", component: HomepageComponent },
  { path: "Bourse", component: BourseComponent },
  { path: "Whoarewe", component: WhoareweComponent },
  {path : "Aboutus", component : AboutusComponent},

  // ### Aides Etudiantes###
  { path: "AidesFinancieres", component: AidesFinancieresComponent },
  { path: "Bourse/CrousCnous", component: CnousComponent },

  { path: "AidesLogement", component: AidesLogementComponent },
  { path: "AidesSociales", component: AidesSocialesComponent },

  { path: "Apl", component: APLComponent },
  // { path: "AidesExeptionnelles", component: AidesExeptionnellesComponent },
  { path: "Bourse", component: BourseComponent },
  { path: "Bourse/BourseErasmus", component: BourseErasmusComponent },
  // {path: "Bourse/BourseCriteresSociaux",component: BourseCritereSociauxComponent},

  // #### Logement ###
  { path: "Crous", component: CrousComponent },
  { path: "Crous/leCrous", component: CrousNiv2Component },
  { path: "LeBonCoin", component: LeBonCoinComponent },

  // ### Santé ###
  { path: "Ameli", component: AmeliComponent },
  { path: "CentreSante", component: CentreSanteComponent },

  // ### Associations ###
  { path: "DistributionsAlimentaires", component: DistributionsAlimentairesComponent },
  { path: "Soutien", component: SoutienComponent },
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
    WhoareweComponent,
    LeBonCoinComponent,
    AmeliComponent,
    CentreSanteComponent,
    DistributionsAlimentairesComponent,
    SoutienComponent,
    AidesFinancieresComponent,
    AidesLogementComponent,
    AidesSocialesComponent,
    CnousComponent,
    AboutusComponent
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
