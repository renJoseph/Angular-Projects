import { MetaLocation } from './meta-location.model';
import { WeatherInfo } from './weather-info.model';
import { WeatherSource } from './weather-source.model';

export interface LocationWeather {
    consolidated_weather: WeatherInfo[];
    time: Date;
    sun_rise: Date;
    sun_set: Date;
    timezone_name: string;
    parent: MetaLocation;
    sources: WeatherSource[];
    title: string;
    location_type: string;
    woeid: number;
    latt_long: string;
    timezone: string;
}
