import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { MetaLocation } from './models/meta-location.model';
import { Observable } from 'rxjs';
import { LocationWeather } from './models/weather.model';

@Injectable({
  providedIn: 'root'
})
export class WeatherService {

  constructor(private http: HttpClient) { }

  public getLocationSearch(inputText: string): Observable<MetaLocation[]> {
    return this.http.get<MetaLocation[]>('https://www.metaweather.com/api/location/search/?query=' + inputText)
    // query e.g /api/location/search/?query=london
    }

  getLocationInfo(woeid): Observable<LocationWeather> {
    return this.http.get<LocationWeather>('https://www.metaweather.com/api/location/' + woeid)
    // woeid e.g /api/location/44418/ (for London)
  }
  getLocDayInfo(woeid, date) {
    return this.http.get('https://www.metaweather.com/api/location/' + woeid + '/' + date)
    // woeid/date e.g /api/location/44418/2013/4/27/ - London on a 27th Apr 2013
  }

}

