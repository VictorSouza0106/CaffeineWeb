import { Injectable, Injector } from '@angular/core';
import { BaseService } from './base.service';
import { Musics } from '../models/musics.model';

@Injectable({
  providedIn: 'root'
})
export class MusicService extends BaseService<Musics> {

  constructor(protected injector: Injector) {
		super(injector, 'musics', (json:any)=>json);
	}
}
