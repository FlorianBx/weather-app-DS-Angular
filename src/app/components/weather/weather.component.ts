import { Component, OnInit } from '@angular/core';
import { WeatherService } from '../../services/weather.service';

@Component({
  selector: 'app-weather',
  standalone: true,
  imports: [],
  templateUrl: './weather.component.html',
  styleUrl: './weather.component.css'
})
export class WeatherComponent implements OnInit {
  city = 'paris';
  weather: any;

  constructor(private weatherService: WeatherService) {}

  ngOnInit(): void {
    this.serchWeather();
    console.log(this.weather);
  }

  serchWeather() {
    this.weatherService.getWeather(this.city).subscribe((datas: any) => {
      this.weather = datas;
    });
  }
}
