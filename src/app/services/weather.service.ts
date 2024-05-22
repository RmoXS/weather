import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})

export class WeatherService {

  url = 'https://api.openweathermap.org/data/2.5/weather';
  key = 'b5342501d5a39c7c50b1458790e757dc';
  city = 'Sleman';

  constructor(private http: HttpClient) { }

  getData(): Observable<any> {
    return this.http.get(`${this.url}?q=${this.city}&appid=${this.key}&units=metric`);
  }
}

export interface Weather {
  weather: Array<{
    description: string;
    icon: string;
    main: string;
  }>;
  main: {
    temp: number;
  };
  name: string;
}

