import { Component, OnInit } from '@angular/core';
import { WeatherService } from '../weather.service';
import { ActivatedRoute, Router } from '@angular/router';
import { LocationWeather } from '../models/weather.model';
import { WeatherInfo } from '../models/weather-info.model';

@Component({
  selector: 'app-weather-summary',
  templateUrl: './weather-summary.component.html',
  styleUrls: ['./weather-summary.component.css']
})
export class WeatherSummaryComponent implements OnInit {

  public weatherData: LocationWeather;
  public today: WeatherInfo;

  constructor(
    private weather: WeatherService,
    private aR: ActivatedRoute,
    private rotuer: Router
  ) {
  }

  ngOnInit() {
    let woeid = this.aR.snapshot.params.woeid;
    this.weather.getLocationInfo(woeid).subscribe((data) => {
      this.weatherData = data;
      this.today = data.consolidated_weather[0];
      console.log(this.weatherData)
    })
  }

}
