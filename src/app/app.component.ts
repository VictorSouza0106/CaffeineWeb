import { Component, OnInit, ViewChild } from '@angular/core';
import { MatDrawer } from '@angular/material';
import { Router, NavigationEnd, ActivatedRoute, GuardsCheckStart, RouterEvent } from '@angular/router';
import { PlyrComponent } from 'ngx-plyr';
import { Musics } from './models/musics.model';
import { MusicPlayerService } from './services/music-player.service';
import { SessionStorageService } from 'ngx-webstorage';
import { TawkService } from './services/tawk.service';

const LOGIN_URL = "";
const NUMBER_OF_HISTORIC_ITEMS = 8;

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {

  @ViewChild('drawer') drawer: MatDrawer;
  @ViewChild(PlyrComponent) plyr: PlyrComponent;

  title = 'caffeineWebPanel';
  player: Plyr;

  musicHistoric:Musics[] = [];
  currentMusic:Musics = null;

  plyr_controls = {
    controls:['play-large', 'play', 'progress', 'current-time', 'mute', 'volume', 'captions', 'pip', 'airplay', 'fullscreen']};

  plyrSources: Plyr.Source[] = [
    {
      src: '..\assets\VAPORWAVE 01.mp3',
      type: 'audio/mp3',
    },
  ];

  constructor(
    private router:Router,
    private sessionStorage:SessionStorageService,
    private musicPlayerService:MusicPlayerService,
    private tawkService: TawkService,
  ) { }

  public ngOnInit(){

    this.startRouterOberserver();    
    this.startCurrentMusicObservable(); 
    this.tawkService.SetChatVisibility(false);

  } 
  
  private startCurrentMusicObservable(){
    this.musicPlayerService.observeMusic().subscribe((music:Musics) => {

      try{
        this.musicPlayerService.changeCurrentMusic(music);
        this.addMusicToHistoric(music);      
        this.plyrSources = [{
          src: music.music_url,
          type: 'audio/mp3',
        }];
      }catch{
        console.log("ERROR TO CHANGE MUSIC");
      }

    })
  }

  private startRouterOberserver(){
    this.router.events.subscribe((router:RouterEvent) => {
      if(router instanceof NavigationEnd )
        console.log("CALL OBS ROUTE",router.url);
    });
  }

  private addMusicToHistoric(currentMusic:Musics){
    this.musicHistoric.push(currentMusic);
    if(this.musicHistoric.length > NUMBER_OF_HISTORIC_ITEMS)
      this.musicHistoric.splice(0,1);
    this.sessionStorage.store('history',this.musicHistoric);
  }

  private play(): void {
    this.player.play();
  }

  public playHistoricMusic(music:Musics){
    this.currentMusic = music;
    this.plyrSources = [{
      src: music.music_url,
      type:'audio/mp3',
    }]
  }

  public goToURL(path){
    this.router.navigateByUrl(path)
  }

  public toggleDrawer() {
    if (this.drawer.opened)
        this.drawer.close();
    else
        this.drawer.open(); 
  }


}

