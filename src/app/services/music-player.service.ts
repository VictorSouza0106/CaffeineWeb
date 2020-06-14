import { Injectable } from '@angular/core';
import { SessionStorageService } from 'ngx-webstorage';
import { Observable } from 'rxjs';
import { Musics } from '../models/musics.model';

@Injectable({
  providedIn: 'root'
})
export class MusicPlayerService {

  constructor(
    private sessionStorage:SessionStorageService
  ) { }


  observeMusic():Observable<Musics>{
    return this.sessionStorage.observe('CurrentSong');
  }
}
