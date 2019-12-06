import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { TranslateService } from "@ngx-translate/core";

@Component({
  selector: "app-navbar",
  templateUrl: "./navbar.component.html",
  styleUrls: ["./navbar.component.css"]
})
export class NavbarComponent implements OnInit {

  searchText = "";

  constructor(public translate: TranslateService, private router : Router) {
    translate.addLangs(["en", "fr"]);
    translate.setDefaultLang("en");
    const browserLang = translate.getBrowserLang();
    translate.use(browserLang.match(/en|fr/) ? browserLang : "en");
  }

  ngOnInit() {}

  searchSubmit(){
    this.router.navigate(['/ResultSearch'], { queryParams: { searchText: this.searchText } });
  }
}
