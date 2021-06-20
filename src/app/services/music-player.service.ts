import { Injectable } from '@angular/core';
import { SessionStorageService } from 'ngx-webstorage';
import * as Plyr from 'plyr';
import { Observable } from 'rxjs';
import { Musics } from '../models/musics.model';



@Injectable({
  providedIn: 'root'
})
export class MusicPlayerService {

  player:Plyr;

  constructor(
    private sessionStorage:SessionStorageService
  ) { }


  public observeMusic():Observable<Musics>{
    return this.sessionStorage.observe('CurrentMusic');
  }

  public changeCurrentMusic(currentMusic:Musics){    
      this.player.stop();
      currentMusic = this.sessionStorage.retrieve('currentMusic');
      this.player.autoplay = true;
  }
}
