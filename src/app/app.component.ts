import { Component, OnInit, ViewChild } from '@angular/core';
import { MatDrawer } from '@angular/material';
import { Router, NavigationEnd } from '@angular/router';
import { PlyrComponent } from 'ngx-plyr';
import { Musics } from './models/musics.model';
import { MusicPlayerService } from './services/music-player.service';
import { SessionStorageService } from 'ngx-webstorage';

const LOGIN_URL = "";
const NUMBER_OF_HISTORIC_ITEMS = 5;

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {

  @ViewChild('drawer') drawer: MatDrawer;
  @ViewChild(PlyrComponent) plyr: PlyrComponent;

  title = 'caffeineWebPanel';
  showBusinessSelector:boolean  = true;
  player: Plyr;

  musicHistoric:Musics[] = [];
  currentSong:Musics = null;

  plyr_controls = {
    controls:['play-large', 'play', 'progress', 'current-time', 'mute', 'volume', 'captions', 'pip', 'airplay', 'fullscreen']};

  plyrSources: Plyr.Source[] = [
    {
      src: '..\assets\VAPORWAVE 01.mp3',
      type: 'audio/mp3',
    },
  ];

  constructor(
    public router:Router,
    private sessionStorage:SessionStorageService,
    private musicPlayerService:MusicPlayerService,
  ) { }

  toggleDrawer() {
    if (this.drawer.opened)
        this.drawer.close();
    else
        this.drawer.open();
}

ngOnInit(){

  this.getCurrentSong();

  this.router.events.subscribe((router) => {
    if (router instanceof NavigationEnd) {
      this.setBusinessSelectorStatus(router.url)
    }
  });
  
}

setBusinessSelectorStatus(routerName:string){
  if(routerName.includes(LOGIN_URL)){
    this.showBusinessSelector = false;
    return;
  }else{
    this.showBusinessSelector = true;
  }
  }

  goToURL(path){
    this.router.navigateByUrl(path)
  }

  played(event: Plyr.PlyrEvent) {
    console.log('played', event);
  }
  
  play(): void {
    this.player.play();
  }

  getCurrentSong(){

    this.musicPlayerService.observeMusic().subscribe((music) => {
      this.changeCurrentSong();
    })
  }

  playHistoricMusic(music:Musics){
    this.currentSong = music;
    this.plyrSources = [{
      src: music.music_url,
      type:'audio/mp3',
    }]
  }

  changeCurrentSong():Promise<any>{    
    return new Promise<void>(() => {
      this.player.stop();
      this.currentSong = this.sessionStorage.retrieve('currentSong');
      this.musicHistoric.push(this.currentSong);
      if(this.musicHistoric.length > NUMBER_OF_HISTORIC_ITEMS)
        this.musicHistoric.splice(0,1);
      this.sessionStorage.store('history',this.musicHistoric);
      this.player.autoplay = true;
      this.plyrSources = [{
        src: this.currentSong.music_url,
        type: 'audio/mp3',
      }];
    }).catch((e) => {
      console.log("ERROR CHANGE MUSIC",e);
    }).finally(() => {
       
      this.play();    
    })
  }

}

