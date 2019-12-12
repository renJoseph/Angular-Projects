import { Component, OnInit } from '@angular/core';
import { WeatherService } from '../weather.service';
import { Router, ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-location-search',
  templateUrl: './location-search.component.html',
  styleUrls: ['./location-search.component.css']
})
export class LocationSearchComponent implements OnInit {

  public inputText = 'London';

  constructor(
    private weather: WeatherService,
    private aR: ActivatedRoute,
    private rotuer: Router
  ) {  }

  ngOnInit() {
  }

  locKeys = [];
  allLocationData;

  // searchForLocation(){
  //   this.weather.getLocationSearch(this.inputText).subscribe((data: any) => {
  //     console.log(data)
  //   })
  // }

  searchForLocation() {
    this.weather.getLocationSearch(this.inputText).subscribe((loc: any) => {
      // this.allLocationData = data;
      // this.locKeys = Object.keys(data.results[0]);
      this.rotuer.navigate(['location/' + loc[0].woeid])
    });
  }

}
