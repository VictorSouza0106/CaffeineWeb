import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  constructor() { }

  obj = [{
    'card':[{'id':1,'name':'BILIE ELISH SHOW','img_url': 'https://s3.us-east-2.amazonaws.com/aaronstestbucketpnw/Abraham-lincoln-quote-internet-hoax-fake.jpeg','music_url':'https://caffeinemusics.s3.us-east-2.amazonaws.com/lovely.mp3'},
            {'id':2,'name':'BILIE ELISH SHOW','img_url': 'https://s3.us-east-2.amazonaws.com/aaronstestbucketpnw/Abraham-lincoln-quote-internet-hoax-fake.jpeg','music_url':'https://caffeinemusics.s3.us-east-2.amazonaws.com/lovely.mp3'},
            {'id':3,'name':'BILIE ELISH SHOW','img_url': 'https://s3.us-east-2.amazonaws.com/aaronstestbucketpnw/Abraham-lincoln-quote-internet-hoax-fake.jpeg','music_url':'https://caffeinemusics.s3.us-east-2.amazonaws.com/lovely.mp3'},
            {'id':4,'name':'BILIE ELISH SHOW','img_url': 'https://s3.us-east-2.amazonaws.com/aaronstestbucketpnw/Abraham-lincoln-quote-internet-hoax-fake.jpeg','music_url':'https://caffeinemusics.s3.us-east-2.amazonaws.com/lovely.mp3'}]},{

    'card':[{'id':1,'name':'OUTRA MUSICA REAL JURO QUE MUDOU','img_url': 'https://heart-the-cat.s3.us-east-2.amazonaws.com/Sailor_heart.png','music_url':'https://caffeinemusics.s3.us-east-2.amazonaws.com/orgia-de-traveco.mp3'},
            {'id':2,'name':'OUTRA MUSICA REAL JURO QUE MUDOU','img_url': 'https://heart-the-cat.s3.us-east-2.amazonaws.com/Sailor_heart.png','music_url':'https://caffeinemusics.s3.us-east-2.amazonaws.com/orgia-de-traveco.mp3'},
            {'id':3,'name':'OUTRA MUSICA REAL JURO QUE MUDOU','img_url': 'https://heart-the-cat.s3.us-east-2.amazonaws.com/Sailor_heart.png','music_url':'https://caffeinemusics.s3.us-east-2.amazonaws.com/orgia-de-traveco.mp3'},
            {'id':4,'name':'OUTRA MUSICA REAL JURO QUE MUDOU','img_url': 'https://heart-the-cat.s3.us-east-2.amazonaws.com/Sailor_heart.png','music_url':'https://caffeinemusics.s3.us-east-2.amazonaws.com/orgia-de-traveco.mp3'}]
          }
        ]

  ngOnInit() {
  }

}
