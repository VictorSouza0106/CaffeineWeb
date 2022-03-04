import { Component, OnInit } from "@angular/core";
import { MusicService } from "src/app/services/music.service";
import { Musics } from "src/app/models/musics.model";

@Component({
  selector: "app-home",
  templateUrl: "./home.component.html",
  styleUrls: ["./home.component.scss"],
})
export class HomeComponent implements OnInit {
  musics: any[] = [];
  musics1: any[] = [];
  musics2: any[] = [];

  refresh: boolean = false;

  constructor(private musicService: MusicService) {}

  ngOnInit() {
    this.downloadMusics();
  }

  downloadMusics() {
    this.musics = [
      [
        {
          id: 1,
          duration: 2,
          toJson: null,
          name: "The Flower Dance",
          image: "./../../../assets/music_img_1.jpg",
          music_url: "./../../../assets/VAPORWAVE.mp3",
        },
        {
          id: 1,
          duration: 2,
          toJson: null,
          name: "Lock Wood",
          image: "./../../../assets/music_img_2.jpg",
          music_url: "./../../../assets/VAPORWAVE.mp3",
        },
        {
          id: 1,
          duration: 2,
          toJson: null,
          name: "Ascend",
          image: "./../../../assets/music_img_3.jpg",
          music_url: "./../../../assets/VAPORWAVE.mp3",
        },
        {
          id: 1,
          duration: 2,
          toJson: null,
          name: "Nioh ko naa",
          image: "./../../../assets/music_img_4.jpg",
          music_url: "./../../../assets/VAPORWAVE.mp3",
        },
      ],
      [
        {
          id: 1,
          duration: 2,
          toJson: null,
          name: "Street Break",
          image: "./../../../assets/music_img_5.jpg",
          music_url: "./../../../assets/VAPORWAVE.mp3",
        },
        {
          id: 1,
          duration: 2,
          toJson: null,
          name: "Opportunity",
          image: "./../../../assets/music_img_6.jpg",
          music_url: "./../../../assets/VAPORWAVE.mp3",
        },
        {
          id: 1,
          duration: 2,
          toJson: null,
          name: "My Little Moon",
          image: "./../../../assets/music_img_12.jpg",
          music_url: "./../../../assets/VAPORWAVE.mp3",
        },
        {
          id: 1,
          duration: 2,
          toJson: null,
          name: "White Flower",
          image: "./../../../assets/music_img_7.jpg",
          music_url: "./../../../assets/VAPORWAVE.mp3",
        },
      ],
      [
        {
          id: 1,
          duration: 2,
          toJson: null,
          name: "Arrays in the Sea",
          image: "./../../../assets/music_img_8.jpg",
          music_url: "./../../../assets/VAPORWAVE.mp3",
        },
        {
          id: 1,
          duration: 2,
          toJson: null,
          name: "On Focus",
          image: "./../../../assets/music_img_9.jpg",
          music_url: "./../../../assets/VAPORWAVE.mp3",
        },
        {
          id: 1,
          duration: 2,
          toJson: null,
          name: "Fower Number ",
          image: "./../../../assets/music_img_10.jpg",
          music_url: "./../../../assets/VAPORWAVE.mp3",
        },
        {
          id: 1,
          duration: 2,
          toJson: null,
          name: "My Little dream",
          image: "./../../../assets/music_img_11.jpg",
          music_url: "./../../../assets/VAPORWAVE.mp3",
        },
      ],
    ];

    console.log(this.musics);

    this.musics1 = this.musics;
    this.musics2 = this.musics;
  }
}
