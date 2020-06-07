import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  constructor() { }

  obj = [{
    'card':[{'id':1,'img_url': 'https://s3.us-east-2.amazonaws.com/aaronstestbucketpnw/Abraham-lincoln-quote-internet-hoax-fake.jpeg'},
            {'id':2,'img_url': 'https://s3.us-east-2.amazonaws.com/aaronstestbucketpnw/Abraham-lincoln-quote-internet-hoax-fake.jpeg'},
            {'id':3,'img_url': 'https://s3.us-east-2.amazonaws.com/aaronstestbucketpnw/Abraham-lincoln-quote-internet-hoax-fake.jpeg'},
            {'id':4,'img_url': 'https://s3.us-east-2.amazonaws.com/aaronstestbucketpnw/Abraham-lincoln-quote-internet-hoax-fake.jpeg'}]},{

    'card':[{'id':1,'img_url': 'https://s3.us-east-2.amazonaws.com/aaronstestbucketpnw/Abraham-lincoln-quote-internet-hoax-fake.jpeg'},
            {'id':2,'img_url': 'https://s3.us-east-2.amazonaws.com/aaronstestbucketpnw/Abraham-lincoln-quote-internet-hoax-fake.jpeg'},
            {'id':3,'img_url': 'https://s3.us-east-2.amazonaws.com/aaronstestbucketpnw/Abraham-lincoln-quote-internet-hoax-fake.jpeg'},
            {'id':4,'img_url': 'https://s3.us-east-2.amazonaws.com/aaronstestbucketpnw/Abraham-lincoln-quote-internet-hoax-fake.jpeg'}]
          },{
          'card':[{'id':1,'img_url': 'https://s3.us-east-2.amazonaws.com/aaronstestbucketpnw/Abraham-lincoln-quote-internet-hoax-fake.jpeg'},
          {'id':2,'img_url': 'https://s3.us-east-2.amazonaws.com/aaronstestbucketpnw/Abraham-lincoln-quote-internet-hoax-fake.jpeg'},
          {'id':3,'img_url': 'https://s3.us-east-2.amazonaws.com/aaronstestbucketpnw/Abraham-lincoln-quote-internet-hoax-fake.jpeg'},
          {'id':4,'img_url': 'https://s3.us-east-2.amazonaws.com/aaronstestbucketpnw/Abraham-lincoln-quote-internet-hoax-fake.jpeg'}]
        }]

  ngOnInit() {
    console.log("OBJ",this.obj[0]);
  }

}
