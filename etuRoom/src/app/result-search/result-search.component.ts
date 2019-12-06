import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-result-search',
  templateUrl: './result-search.component.html',
  styleUrls: ['./result-search.component.css']
})
export class ResultSearchComponent implements OnInit {

  searchText : String

  dataset = [
    {"title": "Bourse erasmus", "link": "/Bourse/BourseErasmus" },
    {"title": "Bourse sur critères sociaux", "link": "/Bourse/BourseCriteresSociaux" },
    {"title": "Bourse erasmus", "link": "/Bourse/BourseErasmus" },
    {"title": "Crous", "link": "/Crous/leCrous" },
    {"title": "Bourse erasmus", "link": "/Bourse/BourseErasmus" },
    {"title": "Bourse erasmus", "link": "/Bourse/BourseErasmus" },
    {"title": "Bourse erasmus", "link": "/Bourse/BourseErasmus" },
    {"title": "Bourse erasmus", "link": "/Bourse/BourseErasmus" },
  ];

  constructor(private route : ActivatedRoute) { }

  ngOnInit() {
    this.route.queryParams.subscribe(data=>{
      this.searchText = data["searchText"]
    });
  }

}
