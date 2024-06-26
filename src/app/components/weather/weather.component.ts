import { Component, OnChanges, SimpleChanges, Input } from '@angular/core';
import { WeatherService } from '../../services/weather.service';
import { KelvinToCelciusPipe } from '../../pipes/kelvin-to-celcius.pipe';
import { Weather } from '../../models/weather.model';

@Component({
  selector: 'app-weather',
  standalone: true,
  imports: [KelvinToCelciusPipe],
  templateUrl: './weather.component.html',
  styleUrl: './weather.component.css',
})
export class WeatherComponent implements OnChanges {
  @Input() city: string;
  errorMessage: string | null = null;
  weather: Weather;

  constructor(private weatherService: WeatherService) {}

  ngOnChanges(changes: SimpleChanges): void {
    if (changes['city']) {
      this.serchWeather();
    }
  }

  serchWeather() {
    this.weatherService.getWeather(this.city ? this.city : 'paris').subscribe(
      (datas: any) => {
        this.weather = datas;
      }
    );
  }
}
