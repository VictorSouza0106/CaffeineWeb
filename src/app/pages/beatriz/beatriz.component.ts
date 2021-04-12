import { Component, OnInit } from '@angular/core';
import { SessionStorageService } from 'ngx-webstorage';
import { Musics } from 'src/app/models/musics.model';
import { MusicService } from 'src/app/services/music.service';

@Component({
  selector: 'app-beatriz',
  templateUrl: './beatriz.component.html',
  styleUrls: ['./beatriz.component.scss']
})
export class BeatrizComponent implements OnInit {

  musics:any = []
  musics1:any = []
  musics2:any = []

  music_1:Musics = new Musics;

  refresh:boolean = false;

  constructor(
    private musicService:MusicService,
    public sessionStorage:SessionStorageService,
  ) { }


  ngOnInit() {
  }
  
  setCurrentSong(num:number){

    let musics:Musics = new Musics;

    switch(num)
    {
      case 1:
        musics.music_url = 'https://caffeinemusic.s3-sa-east-1.amazonaws.com/coraline_theme_song.mp3';
        musics.name = 'This is Halloween!';
        musics.image = '../../../assets/album.png'
        break;

      case 2:
        musics.music_url = "https://caffeinemusic.s3-sa-east-1.amazonaws.com/deko_27_sekai.mp3";
        musics.name = "My Sky";
        musics.image = '../../../assets/G1.png';
        break;

      case 3:
        musics.music_url = "https://caffeinemusic.s3-sa-east-1.amazonaws.com/Sailor_moon.mp3";
        musics.name = "My Shiny Moon";
        musics.image = '../../../assets/G2.png';
        break;

      case 4:
        musics.music_url = "https://caffeinemusic.s3-sa-east-1.amazonaws.com/404_not_found.mp3";
        musics.name = "My Sunshine";
        musics.image = '../../../assets/G3.png';
        break;

      case 5:
        musics.music_url = "https://caffeinemusic.s3-sa-east-1.amazonaws.com/lost_girls.mp3";
        musics.name = "Dreams";
        musics.image = "../../../assets/album_2.png"
        break;

      case 6:
        musics.music_url = "https://caffeinemusic.s3-sa-east-1.amazonaws.com/bersek.mp3";
        musics.name = "Os seus sonhos te cegaram";
        musics.image = "../../../assets/berserk.png";
        break;

      case 7:
        break;

      case 8:
        musics.music_url = "https://caffeinemusic.s3-sa-east-1.amazonaws.com/victor.mp3";
        musics.name = "Parabens para Você - Victor";
        musics.image = "../../../assets/victor.jpg";
        break;

      case 9:
        musics.music_url = "https://caffeinemusic.s3-sa-east-1.amazonaws.com/vitor.mp3"
        musics.name = "Parabens para Você - Vitor";
        musics.image = "../../../assets/vitor.png";
        break;

      default:
        musics.music_url = 'null';
    }

    
    console.log("MUSIC",musics)
    this.sessionStorage.store("currentSong",musics);
  }


}
