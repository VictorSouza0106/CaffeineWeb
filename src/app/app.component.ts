import { Component, OnInit, ViewChild } from '@angular/core';
import { MatDrawer } from '@angular/material';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  title = 'caffeineWebPanel';

  @ViewChild('drawer', {static: false}) drawer: MatDrawer;

  toggleDrawer() {
    if (this.drawer.opened)
        this.drawer.close();
    else
        this.drawer.open();
}

ngOnInit(){
  
}

}

