import { Component, OnInit } from '@angular/core';
import { MusicService } from 'src/app/services/music.service';
import { Musics } from 'src/app/models/musics.model';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  musics:any = []
  musics1:any = []
  musics2:any = []

  refresh:boolean = false;

  constructor(
    private musicService:MusicService,
  ) { }


  ngOnInit() {
    this.downloadMusics();
  }

  downloadMusics(){
    this.musicService.getResources().then((res:Musics[]) => {
      this.refresh = true
        this.musics = res;
      if(this.musics.length > 1)
        this.musics1 = res;
      if(this.musics1.length > 1){
        this.musics2 = res;
        this.refresh = false;
      }

    }).finally(()=> {
      if(this.refresh)
        this.downloadMusics;
    })
    

  }

}
