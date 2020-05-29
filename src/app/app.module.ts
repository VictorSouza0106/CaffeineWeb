import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { 
  MatSliderModule,MatToolbarModule, MatIconModule,
  MatSidenavModule,MatListModule} from '@angular/material';
import { from } from 'rxjs';
import { HomeComponent } from './pages/home/home.component';
import { MDBBootstrapModule } from 'angular-bootstrap-md';
import { CardsCarroselComponent } from './components/cards-carrosel/cards-carrosel.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    CardsCarroselComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MDBBootstrapModule,
    //MAT IMPORTS
    MatSliderModule,
    MatToolbarModule,
    MatIconModule,
    MatSidenavModule,
    MatListModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
