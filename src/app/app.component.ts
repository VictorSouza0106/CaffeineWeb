import { Component, OnInit, ViewChild } from '@angular/core';
import { MatDrawer } from '@angular/material';
import { Router, NavigationEnd, ActivatedRoute, GuardsCheckStart, RouterEvent } from '@angular/router';
import { PlyrComponent } from 'ngx-plyr';
import { Musics } from './models/musics.model';
import { MusicPlayerService } from './services/music-player.service';
import { SessionStorageService } from 'ngx-webstorage';
import { TawkService } from './services/tawk.service';
import { TawkUser } from './models/tawkUser.model';
import { TranslateService } from './services/translate.service';

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

  tawkBlockedUrl:string[] = ['/login','/search'];
  tawkAdminUrl:string[] = ['/'];

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
    private translateService:TranslateService,
  ) { }

  public ngOnInit(){

    //this.translateService.use('pt-BR')

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
      {
        if(this.tawkBlockedUrl.some(urls => router.url.includes(urls))) {
          this.tawkService.SetChatVisibility(false);
        }

        if(this.tawkAdminUrl.some(urls => router.url.includes(urls))) {

          //TODO VERIFICAR USUARIO;
          let tawkUser:TawkUser = new TawkUser();
          this.tawkService.UpdateTawkUser(tawkUser);
        }
      }
    });
  }

  private addMusicToHistoric(currentMusic:Musics){
    this.musicHistoric.push(currentMusic);
    if(this.musicHistoric.length > NUMBER_OF_HISTORIC_ITEMS)
      this.musicHistoric.splice(0,1);
    this.sessionStorage.store('history',this.musicHistoric);
  }

  public playHistoricMusic(music:Musics){
    this.currentMusic = music;
    this.plyrSources = [{
      src: music.music_url,
      type:'audio/mp3',
    }]
  }

  public goToURL(path:string){
    this.router.navigateByUrl(path)
  }

  public toggleDrawer() {
    if (this.drawer.opened)
        this.drawer.close();
    else
        this.drawer.open(); 
  }


}

