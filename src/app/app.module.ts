import { BrowserModule } from '@angular/platform-browser';
import { NgModule, APP_INITIALIZER } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { 
  MatSliderModule,MatToolbarModule, MatIconModule,
  MatSidenavModule,MatListModule, MatInputModule, MatButtonModule, MatMenuModule} from '@angular/material';
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
import { NgxWebstorageModule } from 'ngx-webstorage';
import { OverlayModule } from '@angular/cdk/overlay';
import { TranslateModule } from '../app/pipes/translate.module'
import {TranslatePipe} from './pipes/translate.pipe';
import { TranslateService } from './services/translate.service';

export function setupTranslateFactory(
  service: TranslateService): Function {
  return () => service.use('en-US');
}

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
    OverlayModule,
    TranslateModule,

    //MAT IMPORTS
    MatSliderModule,
    MatToolbarModule,
    MatIconModule,
    MatSidenavModule,
    MatListModule,
    MatInputModule,
    MatButtonModule,
    MatMenuModule,

    //for Root
    NgxWebstorageModule.forRoot(),
  ],
  providers: [
    TranslateService, {
      provide: APP_INITIALIZER,
      useFactory: setupTranslateFactory,
      deps: [TranslateService],
      multi: true
    }
  ],
  exports:[
    TranslatePipe
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
