import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-result-search',
  templateUrl: './result-search.component.html',
  styleUrls: ['./result-search.component.css']
})
export class ResultSearchComponent implements OnInit {

  searchText : String

  dataset = ['MDB', 'Angular', 'Bootstrap', 'Framework', 'SPA', 'React', 'Vue'];

  constructor(private route : ActivatedRoute) { }

  ngOnInit() {
    this.route.queryParams.subscribe(data=>{
      this.searchText = data["searchText"]
    });
  }

}
