import { Component, OnInit, AfterViewInit,ViewChild,ElementRef, Renderer2, AfterViewChecked, Input } from '@angular/core';
import { Card } from 'src/app/models/card.model';

@Component({
  selector: 'app-cards-carrosel',
  templateUrl: './cards-carrosel.component.html',
  styleUrls: ['./cards-carrosel.component.scss']
})
export class CardsCarroselComponent implements OnInit ,AfterViewInit, AfterViewChecked {

  
  @ViewChild('musicCard', {static: false}) musicCard: ElementRef;

  @Input() identifier:string = 'MyIdentifier';
  @Input() title:string = "";
  @Input() color:string = null;

  @Input() cards_1: Card = null;
  @Input() cards_2: Card = null;
  @Input() cards_3: Card = null;
  
  
  height = null;

  constructor(
  ) { }

  ngOnInit(){
  }
  ngAfterViewInit() {  
    console.log(this.musicCard.nativeElement.offsetHeight);
  }

  ngAfterViewChecked() {
      this.height = `${this.musicCard.nativeElement.offsetWidth}px`
  }

}
