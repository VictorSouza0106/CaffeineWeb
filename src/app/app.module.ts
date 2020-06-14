import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { 
  MatSliderModule,MatToolbarModule, MatIconModule,
  MatSidenavModule,MatListModule, MatInputModule, MatButtonModule} from '@angular/material';
import { from } from 'rxjs';
import { HomeComponent } from './pages/home/home.component';
import { MDBBootstrapModule } from 'angular-bootstrap-md';
import { CardsCarroselComponent } from './components/cards-carrosel/cards-carrosel.component';
import { FooterComponent } from './components/footer/footer.component';
import { LoginComponent } from './pages/login/login.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { SearchComponent } from './pages/search/search.component';
import { TagCloudModule } from 'angular-tag-cloud-module';
import { PlyrModule } from 'ngx-plyr';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    CardsCarroselComponent,
    FooterComponent,
    LoginComponent,
    SearchComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MDBBootstrapModule,
    FormsModule,
    ReactiveFormsModule,
    TagCloudModule,
    PlyrModule,

    //MAT IMPORTS
    MatSliderModule,
    MatToolbarModule,
    MatIconModule,
    MatSidenavModule,
    MatListModule,
    MatInputModule,
    MatButtonModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
