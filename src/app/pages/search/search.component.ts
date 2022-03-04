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
    {text: 'Rock', weight: Math.random() * 16, color: '#ffaaee'},
    {text: 'K-Pop', weight: Math.random() * 16,  color: '#c85541'},
    {text: 'LoopMaster', weight: Math.random() * 16,  color: '#6d58cd'},
    {text: 'Lo-Fi', weight: Math.random() * 16,  color: '#b588de'},
    {text: 'Samba', weight: Math.random() * 16,  color: '#00FF00'},
    {text: '150 BPM', weight: Math.random() * 16,  color: '#208b50'},
    {text: 'Baixo', weight: Math.random() * 16,  color: '#f4f157'},
    {text: 'Eletronica', weight: Math.random() * 16,  color: '#a5d806'},
    {text: 'Sertanejo', weight: Math.random() * 16,  color: '#46b2e3'},
    {text: 'Guitarra', weight: Math.random() * 16,  color: '#00FF00'},

    {text: 'Rain Effects', weight: Math.random() * 16,  color: '#4ce330'},
    {text: 'Florest Effects', weight: Math.random() * 16,  color: '#d37f71'},
    {text: 'Frevo', weight: Math.random() * 16,  color: '#6380d6'},
    {text: 'Violao', weight: Math.random() * 16,  color: '#FF0000'},
    {text: 'Violino', weight: Math.random() * 16,  color: '#00FF00'},
    {text: 'Death Effects', weight: Math.random() * 16,  color: '#6380d6'},
    {text: 'Disco', weight: Math.random() * 16,  color: '#6380d6'},
    {text: 'Weight-8-link-color', weight: Math.random() * 16,  color: '#c18c'},
    {text: 'Gun Effects', weight: Math.random() * 16,  color: '#c1dc99'},
    {text: '250BPMr', weight: Math.random() * 16,  color: '#00FF00'},

    {text: 'Rock', weight: Math.random() * 16,  color: '#c18c'},
    {text: 'K-Pop', weight: Math.random() * 16,  color: '#c85541'},
    {text: 'LoopMaster', weight: Math.random() * 16,  color: '#c18c'},
    {text: 'Lo-Fi', weight: Math.random() * 16,  color: '#ffaaee'},
    {text: 'Samba', weight: Math.random() * 16,  color: '#00FF00'},
    {text: '150 BPM', weight: Math.random() * 16,  color: '#6380d6'},
    {text: 'Baixo', weight: Math.random() * 16,  color: '#c85541'},
    {text: 'Eletronica', weight: Math.random() * 16,  color: '#ffaaee'},
    {text: 'Sertanejo', weight: Math.random() * 16,  color: '#ffaaee'},
    {text: 'Guitarra', weight: Math.random() * 16,  color: '#00FF00'},

    {text: 'Rain Effects', weight: Math.random() * 16,  color: '#6380d6'},
    {text: 'Florest Effects', weight: Math.random() * 16,  color: '#c18c'},
    {text: 'Frevo', weight: Math.random() * 16,  color: '#4ce330'},
    {text: 'Violao', weight: Math.random() * 16,  color: '#4ce330'},
    {text: 'Violino', weight: Math.random() * 16,  color: '#c85541'},
    {text: 'Death Effects', weight: Math.random() * 16,  color: '#b588de'},
    {text: 'Disco', weight: Math.random() * 16,  color: '#6380d6'},
    {text: 'Weight-8-link-color', weight: Math.random() * 16,  color: '#a5d806'},
    {text: 'Gun Effects', weight: Math.random() * 16,  color: '#a5d806'},
    {text: '250BPMr', weight: Math.random() * 16,  color: '#c85541'},

    {text: 'Rock', weight: 8, color: '#ffaaee'},
    {text: 'K-Pop', weight: Math.random() * 16,  color: '#c85541'},
    {text: 'LoopMaster', weight: Math.random() * 16,  color: '#6d58cd'},
    {text: 'Lo-Fi', weight: Math.random() * 16,  color: '#b588de'},
    {text: 'Samba', weight: Math.random() * 16,  color: '#00FF00'},
    {text: '150 BPM', weight: Math.random() * 16,  color: '#208b50'},
    {text: 'Baixo', weight: Math.random() * 16,  color: '#f4f157'},
    {text: 'Eletronica', weight: Math.random() * 16,  color: '#a5d806'},
    {text: 'Sertanejo', weight: Math.random() * 16,  color: '#46b2e3'},
    {text: 'Guitarra', weight: Math.random() * 16,  color: '#00FF00'},

    {text: 'Rain Effects', weight: Math.random() * 16,  color: '#4ce330'},
    {text: 'Florest Effects', weight: Math.random() * 16,  color: '#d37f71'},
    {text: 'Frevo', weight: Math.random() * 16,  color: '#6380d6'},
    {text: 'Violao', weight: Math.random() * 16,  color: '#c18c'},
    {text: 'Violino', weight: Math.random() * 16,  color: '#00FF00'},
    {text: 'Death Effects', weight: Math.random() * 16,  color: '#c18c'},
    {text: 'Disco', weight: Math.random() * 16,  color: '#6380d6'},
    {text: 'Weight-8-link-color', weight: Math.random() * 16,  color: '#c18c'},
    {text: 'Gun Effects', weight: Math.random() * 16,  color: '#c1dc99'},
    {text: '250BPMr', weight: Math.random() * 16,  color: '#00FF00'},

    {text: 'Rain Effects', weight: Math.random() * 16,  color: '#f4f157'},
    {text: 'Florest Effects', weight: Math.random() * 16,  color: '#c18c'},
    {text: 'Frevo', weight: Math.random() * 16,  color: '#c18c'},
    {text: 'Violao', weight: Math.random() * 16,  color: '#b588de'},
    {text: 'Violino', weight: Math.random() * 16,  color: '#00FF00'},
    {text: 'Death Effects', weight: Math.random() * 16,  color: '#b588de'},
    {text: 'Disco', weight: Math.random() * 16,  color: '#b588de'},
    {text: 'Weight-8-link-color', weight: Math.random() * 16,  color: '#ffaaee'},
    {text: 'Gun Effects', weight: Math.random() * 16,  color: '#ffaaee'},
    {text: '250BPMr', weight: Math.random() * 16,  color: '#00FF00'},

    {text: 'Rock', weight: Math.random() * 16,  color: '#a2f8a6'},
    {text: 'Gun Effects', weight: Math.random() * 16,  color: '#6380d6'},
    {text: 'Eletronica', weight: Math.random() * 16,  color: '#fa584a'},
    {text: 'Samba', weight: Math.random() * 16,  color: '#00FF00'},
    {text: 'Sapatiado', weight: Math.random() * 16,  color: '#00FF00'},
    {text: 'Cyberpunk', weight: Math.random() * 16,  color: '#a2f8a6'},
    {text: 'Reggae', weight: Math.random() * 16,  color: '#c85541'},
    {text: 'Happy Songs', weight: Math.random() * 16,  color: '#a2f8a6'},
    {text: 'Florest Effects', weight: Math.random() * 16,  color: '#6380d6'},
    {text: 'Disco', weight: Math.random() * 16,  color: '#00FF00'},
    // ...
  ];

  constructor() { }

  ngOnInit() {
  }

}
