import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-le-bon-coin',
  templateUrl: './le-bon-coin.component.html',
  styleUrls: ['./le-bon-coin.component.css']
})
export class LeBonCoinComponent implements OnInit {
  tag: String = "Logement/LeBonCoin";
  
  constructor() { }

  ngOnInit() {
  }

}
