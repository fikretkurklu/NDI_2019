import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-ameli',
  templateUrl: './ameli.component.html',
  styleUrls: ['./ameli.component.css']
})
export class AmeliComponent implements OnInit {
  tag : String = "Santé/Ameli";
  constructor() { }

  ngOnInit() {
  }

}
