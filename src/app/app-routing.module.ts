import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './pages/home/home.component';
import { LoginComponent } from './pages/login/login.component';
import { SearchComponent } from './pages/search/search.component';
import { LicenseComponent } from './pages/license/license.component';


const routes: Routes = [
  {
    path:'',
    redirectTo:'home',
    pathMatch:'prefix'
  },
  {
    path:'home',
    component:HomeComponent,
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
];

@NgModule({
  imports: [RouterModule.forRoot(routes, { relativeLinkResolution: 'legacy' })],
  exports: [RouterModule]
})
export class AppRoutingModule { }
