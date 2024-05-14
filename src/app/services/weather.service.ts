import { Injectable, inject } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from '../../environments/environment';

const API_KEY = environment.apiKey;
const API_URL = environment.apiUrl;

@Injectable({
  providedIn: 'root'
})
export class WeatherService {
  private http = inject(HttpClient);

  constructor() { }

  getWeather(city: string) {
    console.log(city);
    console.log('get request initiated');
    return this.http.get(`${API_URL}${city}&appid=${API_KEY}`);
  }
}
