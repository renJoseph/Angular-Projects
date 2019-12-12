import { Component, OnInit } from '@angular/core';
import { WeatherService } from '../weather.service';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-weather-for-day',
  templateUrl: './weather-for-day.component.html',
  styleUrls: ['./weather-for-day.component.css']
})
export class WeatherForDayComponent implements OnInit {

  public locationDaySummary;

  constructor(
    private weather: WeatherService,
    private aR: ActivatedRoute,
    private rotuer: Router
    ) {
  }

  ngOnInit() {
    const url = decodeURIComponent(this.aR.snapshot.params.apiUrl)
    this.weather.getLocDayInfo(url, '2013/4/27').subscribe((data) => {
      this.locationDaySummary = data;
    })
  }

}
