import { Component, OnInit, AfterViewInit,ViewChild,ElementRef, Renderer2, AfterViewChecked, Input } from '@angular/core';
import { Card } from 'src/app/models/card.model';
import { Musics } from 'src/app/models/musics.model';

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

  @Input() cards_1: Musics = null;
  @Input() cards_2: Musics = null;
  @Input() cards_3: Musics = null;
  
  
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
