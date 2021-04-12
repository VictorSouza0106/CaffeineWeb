import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './pages/home/home.component';
import { LoginComponent } from './pages/login/login.component';
import { SearchComponent } from './pages/search/search.component';
import { LicenseComponent } from './pages/license/license.component';
import { BeatrizComponent } from './pages/beatriz/beatriz.component';


const routes: Routes = [
  {
    path:'',
    component:BeatrizComponent,
  },
  {
    path:'login',
    component:LoginComponent,
  },
  {
    path:'search',
    component:SearchComponent,
  },
  {
    path:'licenses',
    component:LicenseComponent
  },
  {
    path:'beatriz',
    component:BeatrizComponent,
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes, { relativeLinkResolution: 'legacy' })],
  exports: [RouterModule]
})
export class AppRoutingModule { }
