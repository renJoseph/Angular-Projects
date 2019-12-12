import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LocationSearchComponent } from './search-page/location-search.component';
import { WeatherForDayComponent } from './day-summary/weather-for-day.component';
import { WeatherSummaryComponent } from './location-summary/weather-summary.component';

const routes: Routes = [
  {
    path: '',
    component: LocationSearchComponent
  },
  {
    path: 'location/:woeid',
    component: WeatherSummaryComponent
  },
  {
    path: 'location/:woeid/:date',
    component: WeatherForDayComponent
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})

export class AppRoutingModule { }