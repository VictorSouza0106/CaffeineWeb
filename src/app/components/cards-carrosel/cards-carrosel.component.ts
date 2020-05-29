import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-cards-carrosel',
  templateUrl: './cards-carrosel.component.html',
  styleUrls: ['./cards-carrosel.component.scss']
})
export class CardsCarroselComponent implements OnInit {

  constructor() { }


  active:Boolean = false;

  ngOnInit(){

  }
}
