import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { HttpClient, HttpClientModule } from '@angular/common/http';
import { SearchResultsComponent } from './search-results/search-results.component';
import { routingModule } from './routing.module';
import { ResultInfoComponent } from './result-info/result-info.component';

@NgModule({
  declarations: [
    AppComponent,
    SearchResultsComponent,
    ResultInfoComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    routingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
