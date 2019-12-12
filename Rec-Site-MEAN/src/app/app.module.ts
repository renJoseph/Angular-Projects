import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './General/home/home.component';
import { RecsComponent } from './General/recs/recs.component';
import { InfoComponent } from './General/info/info.component';
import { ProductsComponent } from './General/products/products.component';
import { RegisterComponent } from './Account/register/register.component';
import { LoginComponent } from './Account/login/login.component';
import { ProfileComponent } from './Account/profile/profile.component';
import { SavedComponent } from './Account/saved/saved.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatMenuModule } from '@angular/material'
import { MatToolbarModule } from '@angular/material';
import { NavbarComponent } from './Additions/navbar/navbar.component';
import { SmallnavComponent } from './Additions/smallnav/smallnav.component';
import { SearchfiltersComponent } from './Additions/searchfilters/searchfilters.component'

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    RecsComponent,
    InfoComponent,
    ProductsComponent,
    RegisterComponent,
    LoginComponent,
    ProfileComponent,
    SavedComponent,
    NavbarComponent,
    SmallnavComponent,
    SearchfiltersComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatMenuModule,
    MatToolbarModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
