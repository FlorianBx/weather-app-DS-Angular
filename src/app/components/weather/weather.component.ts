import { Component, OnInit } from '@angular/core';
import { WeatherService } from '../../services/weather.service';
import { Weather } from '../../models/weather.model';

@Component({
  selector: 'app-weather',
  standalone: true,
  imports: [],
  templateUrl: './weather.component.html',
  styleUrl: './weather.component.css',
})
export class WeatherComponent implements OnInit {
  city = 'paris';
  weather: Weather;

  constructor(private weatherService: WeatherService) {}

  ngOnInit(): void {
    this.serchWeather();
  }

  serchWeather() {
    this.weatherService.getWeather(this.city).subscribe((datas: any) => {
      this.weather = datas;
      console.log(this.weather);
    });
  }

  convertKelvinToCelsius(tempInKelvin: number) {
    return Math.floor(tempInKelvin - 273.15);
  }
}
