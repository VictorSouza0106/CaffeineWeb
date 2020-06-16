import { Component, OnInit, AfterViewInit,ViewChild,ElementRef, Renderer2, AfterViewChecked, Input } from '@angular/core';
import { Card } from 'src/app/models/card.model';
import { Musics } from 'src/app/models/musics.model';
import { SessionStorageService } from 'ngx-webstorage';

@Component({
  selector: 'app-cards-carrosel',
  templateUrl: './cards-carrosel.component.html',
  styleUrls: ['./cards-carrosel.component.scss']
})
export class CardsCarroselComponent implements OnInit , AfterViewChecked {

  
  @ViewChild('musicCard',{static:true}) musicCard: ElementRef;

  @Input() identifier:string = 'MyIdentifier';
  @Input() title:string = "";
  @Input() color:string = null;

  @Input() cards_1: Musics = null;
  @Input() cards_2: Musics = null;
  @Input() cards_3: Musics = null;
  
  
  height = null;

  constructor(
    private sessionStorage:SessionStorageService,
  ) { }

  ngOnInit(){
  }
  ngAfterViewChecked() {
      this.height = `${this.musicCard.nativeElement.offsetWidth}px`;
  }

  setCurrentSong(music:Musics){
    this.sessionStorage.store("currentSong",music);
  }

}
