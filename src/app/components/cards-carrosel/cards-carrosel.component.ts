import { Component, OnInit, AfterViewInit,ViewChild,ElementRef, Renderer2, AfterViewChecked, Input } from '@angular/core';

@Component({
  selector: 'app-cards-carrosel',
  templateUrl: './cards-carrosel.component.html',
  styleUrls: ['./cards-carrosel.component.scss']
})
export class CardsCarroselComponent implements OnInit ,AfterViewInit, AfterViewChecked {

  
  @ViewChild('musicCard', {static: false}) musicCard: ElementRef;

  @Input()
  identifier:string = 'MyIdentifier'

  ID_DINAMICO = "TEST"

  active:Boolean = false;  
  height = null;

  constructor(
    private renderer:Renderer2
  ) { }

  ngOnInit(){
    console.log('IDENTIFICADOR',this.identifier)
  }
  ngAfterViewInit() {  
    console.log(this.musicCard.nativeElement.offsetHeight);
  }

  ngAfterViewChecked() {
      this.height = `${this.musicCard.nativeElement.offsetWidth}px`;
  }

}