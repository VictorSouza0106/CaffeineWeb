import { Component, OnInit, ViewChild } from '@angular/core';
import { MatDrawer } from '@angular/material';
import { Router, NavigationEnd } from '@angular/router';

const LOGIN_URL = "";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {

  title = 'caffeineWebPanel';
  showBusinessSelector:boolean  = true;

  @ViewChild('drawer', {static: false}) drawer: MatDrawer;

  constructor(
    public router:Router
  ) { }

  toggleDrawer() {
    if (this.drawer.opened)
        this.drawer.close();
    else
        this.drawer.open();
}

ngOnInit(){

  this.router.events.subscribe((router) => {
    if (router instanceof NavigationEnd) {
      this.setBusinessSelectorStatus(router.url)
    }
  });
  
}

setBusinessSelectorStatus(routerName:string){
  if(routerName.includes(LOGIN_URL)){
    this.showBusinessSelector = false;
    return;
  }else{
    this.showBusinessSelector = true;
  }
  }

  goToURL(){
    this.router.navigateByUrl('/login')
  }

}

