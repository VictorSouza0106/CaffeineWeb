import { Component, OnInit } from '@angular/core';
import { CloudOptions, CloudData } from 'angular-tag-cloud-module';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.scss']
})
export class SearchComponent implements OnInit {

  options: CloudOptions = {
    // if width is between 0 and 1 it will be set to the width of the upper element multiplied by the value 
    width:1,
    // if height is between 0 and 1 it will be set to the height of the upper element multiplied by the value 
    height: 500,
    overflow: true,
  };
 
  data: CloudData[] = [
    {text: 'Rock', weight: 8, color: '#ffaaee'},
    {text: 'K-Pop', weight: 5, link: 'https://google.com', color: '#ff0000'},
    {text: 'LoopMaster', weight: 1, link: 'https://google.com', color: '#FF0000'},
    {text: 'Lo-Fi', weight: 3, link: 'https://google.com', color: '#FF0000'},
    {text: 'Samba', weight: 12, link: 'https://google.com', color: '#00FF00'},
    {text: '150 BPM', weight: 8, link: 'https://google.com', color: '#FF0000'},
    {text: 'Baixo', weight: 2, link: 'https://google.com', color: '#ff0000'},
    {text: 'Eletronica', weight: 1, link: 'https://google.com', color: '#FF0000'},
    {text: 'Sertanejo', weight: 16, link: 'https://google.com', color: '#FF0000'},
    {text: 'Guitarra', weight: 8, link: 'https://google.com', color: '#00FF00'},

    // {text: 'Rain Effects', weight: 8, link: 'https://google.com', color: '#FF0000'},
    // {text: 'Florest Effects', weight: 5, link: 'https://google.com', color: '#ff0000'},
    // {text: 'Frevo', weight: 1, link: 'https://google.com', color: '#FF0000'},
    // {text: 'Violao', weight: 3, link: 'https://google.com', color: '#FF0000'},
    // {text: 'Violino', weight: 12, link: 'https://google.com', color: '#00FF00'},
    // {text: 'Death Effects', weight: 8, link: 'https://google.com', color: '#FF0000'},
    // {text: 'Disco', weight: 2, link: 'https://google.com', color: '#ff0000'},
    // {text: 'Weight-8-link-color', weight: 1, link: 'https://google.com', color: '#FF0000'},
    // {text: 'Gun Effects', weight: 16, link: 'https://google.com', color: '#FF0000'},
    // {text: '250BPMr', weight: 8, link: 'https://google.com', color: '#00FF00'},

    // {text: 'Rock', weight: 8, link: 'https://google.com', color: '#FF0000'},
    // {text: 'Gun Effects', weight: 5, link: 'https://google.com', color: '#ff0000'},
    // {text: 'Eletronica', weight: 1, link: 'https://google.com', color: '#FF0000'},
    // {text: 'Samba', weight: 3, link: 'https://google.com', color: '#FF0000'},
    // {text: 'Sapatiado', weight: 12, link: 'https://google.com', color: '#00FF00'},
    // {text: 'Cyberpunk', weight: 8, link: 'https://google.com', color: '#FF0000'},
    // {text: 'Reggae', weight: 2, link: 'https://google.com', color: '#ff0000'},
    // {text: 'Happy Songs', weight: 1, link: 'https://google.com', color: '#FF0000'},
    // {text: 'Florest Effects', weight: 16, link: 'https://google.com', color: '#FF0000'},
    // {text: 'Disco', weight: 8, link: 'https://google.com', color: '#00FF00'},

    // {text: 'Rock', weight: 8, link: 'https://google.com', color: '#FF0000'},
    // {text: 'K-Pop', weight: 5, link: 'https://google.com', color: '#ff0000'},
    // {text: 'LoopMaster', weight: 1, link: 'https://google.com', color: '#FF0000'},
    // {text: 'Lo-Fi', weight: 3, link: 'https://google.com', color: '#FF0000'},
    // {text: 'Samba', weight: 12, link: 'https://google.com', color: '#00FF00'},
    // {text: '150 BPM', weight: 8, link: 'https://google.com', color: '#FF0000'},
    // {text: 'Baixo', weight: 2, link: 'https://google.com', color: '#ff0000'},
    // {text: 'Eletronica', weight: 1, link: 'https://google.com', color: '#FF0000'},
    // {text: 'Sertanejo', weight: 16, link: 'https://google.com', color: '#FF0000'},
    // {text: 'Guitarra', weight: 8, link: 'https://google.com', color: '#00FF00'},

    // {text: 'Rain Effects', weight: 8, link: 'https://google.com', color: '#FF0000'},
    // {text: 'Florest Effects', weight: 5, link: 'https://google.com', color: '#ff0000'},
    // {text: 'Frevo', weight: 1, link: 'https://google.com', color: '#FF0000'},
    // {text: 'Violao', weight: 3, link: 'https://google.com', color: '#FF0000'},
    // {text: 'Violino', weight: 12, link: 'https://google.com', color: '#00FF00'},
    // {text: 'Death Effects', weight: 8, link: 'https://google.com', color: '#FF0000'},
    // {text: 'Disco', weight: 2, link: 'https://google.com', color: '#ff0000'},
    // {text: 'Weight-8-link-color', weight: 1, link: 'https://google.com', color: '#FF0000'},
    // {text: 'Gun Effects', weight: 16, link: 'https://google.com', color: '#FF0000'},
    // {text: '250BPMr', weight: 8, link: 'https://google.com', color: '#00FF00'},

    // {text: 'Rock', weight: 8, link: 'https://google.com', color: '#FF0000'},
    // {text: 'Gun Effects', weight: 5, link: 'https://google.com', color: '#ff0000'},
    // {text: 'Eletronica', weight: 1, link: 'https://google.com', color: '#FF0000'},
    // {text: 'Samba', weight: 3, link: 'https://google.com', color: '#FF0000'},
    // {text: 'Sapatiado', weight: 12, link: 'https://google.com', color: '#00FF00'},
    // {text: 'Cyberpunk', weight: 8, link: 'https://google.com', color: '#FF0000'},
    // {text: 'Reggae', weight: 2, link: 'https://google.com', color: '#ff0000'},
    // {text: 'Happy Songs', weight: 1, link: 'https://google.com', color: '#FF0000'},
    // {text: 'Florest Effects', weight: 16, link: 'https://google.com', color: '#FF0000'},
    // {text: 'Disco', weight: 8, link: 'https://google.com', color: '#00FF00'},

    // {text: 'Rock', weight: 8, link: 'https://google.com', color: '#FF0000'},
    // {text: 'K-Pop', weight: 5, link: 'https://google.com', color: '#ff0000'},
    // {text: 'LoopMaster', weight: 1, link: 'https://google.com', color: '#FF0000'},
    // {text: 'Lo-Fi', weight: 3, link: 'https://google.com', color: '#FF0000'},
    // {text: 'Samba', weight: 12, link: 'https://google.com', color: '#00FF00'},
    // {text: '150 BPM', weight: 8, link: 'https://google.com', color: '#FF0000'},
    // {text: 'Baixo', weight: 2, link: 'https://google.com', color: '#ff0000'},
    // {text: 'Eletronica', weight: 1, link: 'https://google.com', color: '#FF0000'},
    // {text: 'Sertanejo', weight: 16, link: 'https://google.com', color: '#FF0000'},
    // {text: 'Guitarra', weight: 8, link: 'https://google.com', color: '#00FF00'},

    // {text: 'Rain Effects', weight: 8, link: 'https://google.com', color: '#FF0000'},
    // {text: 'Florest Effects', weight: 5, link: 'https://google.com', color: '#ff0000'},
    // {text: 'Frevo', weight: 1, link: 'https://google.com', color: '#FF0000'},
    // {text: 'Violao', weight: 3, link: 'https://google.com', color: '#FF0000'},
    // {text: 'Violino', weight: 12, link: 'https://google.com', color: '#00FF00'},
    // {text: 'Death Effects', weight: 8, link: 'https://google.com', color: '#FF0000'},
    // {text: 'Disco', weight: 2, link: 'https://google.com', color: '#ff0000'},
    // {text: 'Weight-8-link-color', weight: 1, link: 'https://google.com', color: '#FF0000'},
    // {text: 'Gun Effects', weight: 16, link: 'https://google.com', color: '#FF0000'},
    // {text: '250BPMr', weight: 8, link: 'https://google.com', color: '#00FF00'},

    // {text: 'Rock', weight: 8, link: 'https://google.com', color: '#FF0000'},
    // {text: 'Gun Effects', weight: 5, link: 'https://google.com', color: '#ff0000'},
    // {text: 'Eletronica', weight: 1, link: 'https://google.com', color: '#FF0000'},
    // {text: 'Samba', weight: 3, link: 'https://google.com', color: '#FF0000'},
    // {text: 'Sapatiado', weight: 12, link: 'https://google.com', color: '#00FF00'},
    // {text: 'Cyberpunk', weight: 8, link: 'https://google.com', color: '#FF0000'},
    // {text: 'Reggae', weight: 2, link: 'https://google.com', color: '#ff0000'},
    // {text: 'Happy Songs', weight: 1, link: 'https://google.com', color: '#FF0000'},
    // {text: 'Florest Effects', weight: 16, link: 'https://google.com', color: '#FF0000'},
    // {text: 'Disco', weight: 8, link: 'https://google.com', color: '#00FF00'},
    // ...
  ];

  constructor() { }

  ngOnInit() {
  }

}
