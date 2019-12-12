import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './General/home/home.component';
import { InfoComponent } from './General/info/info.component';
import { ProductsComponent } from './General/products/products.component';
import { RecsComponent } from './General/recs/recs.component';
import { RegisterComponent } from './Account/register/register.component';
import { LoginComponent } from './Account/login/login.component';
import { ProfileComponent } from './Account/profile/profile.component';
import { SavedComponent } from './Account/saved/saved.component';
import { NavbarComponent } from './Additions/navbar/navbar.component';
import { SearchfiltersComponent } from './Additions/searchfilters/searchfilters.component';
import { SmallnavComponent } from './Additions/smallnav/smallnav.component';

const routes: Routes = [
  {
    path: '',
    component: HomeComponent,
    children: [
      {
        path: 'information',
        component: InfoComponent
      }, {
        path: 'products',
        component: ProductsComponent,
        children: [
          {
            path: '',
            component: SearchfiltersComponent
          }
        ]
      },{
        path: 'recommendations',
        component: RecsComponent
      }
    ]
  },{
    path: 'register',
    component: RegisterComponent
  }, {
    path: 'login',
    component: LoginComponent
  }, {
    path: 'profile',
    component: ProfileComponent
  }, {
    path: 'saved',
    component: SavedComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
