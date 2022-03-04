import { Injectable } from '@angular/core';
import { SessionStorageService } from 'ngx-webstorage';
import * as Plyr from 'plyr';
import { Observable } from 'rxjs';
import { Musics } from '../models/musics.model';



@Injectable({
  providedIn: 'root'
})
export class MusicPlayerService {

  player:any = Plyr.setup('#plyr', {
    controls:['play-large', 'play', 'progress', 'current-time', 'mute', 'volume', 'captions', 'pip', 'airplay', 'fullscreen']},
  );

  constructor(
    private sessionStorage:SessionStorageService
  ) { }


  public observeMusic():Observable<Musics>{
    return this.sessionStorage.observe('currentMusic');
  }

  public changeCurrentMusic(currentMusic:Musics){ 
    
    try {

      this.player.stop();
      currentMusic = this.sessionStorage.retrieve('currentMusic');
      this.player.autoplay = true;
    } catch (error) {
      console.log('player', this.player, error);   
    }

  }
}
