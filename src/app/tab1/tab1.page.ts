// /app/tab1/tab1.page.ts

import { Component, OnInit } from '@angular/core';
import { WeatherService } from '../services/weather.service';
import { Weather } from '../services/weather.service'; // Ubah import sesuai lokasi interface

@Component({
  selector: 'app-tab1',
  templateUrl: 'tab1.page.html',
  styleUrls: ['tab1.page.scss']
})
export class Tab1Page implements OnInit {
  weather: Weather = {
    weather: [],
    main: {
      temp: 0
    },
    name: ''
  };
  temp: number = 0;
  city: string = 'Sleman';
  errorMessage: string = '';

  constructor(private weatherService: WeatherService) {}

  ngOnInit(): void {
    this.weatherService.getData().subscribe(
      result => {
        this.weather = result;
        this.temp = result.main.temp;
        this.city = result.name;
        console.log(this.weather);
      },
      error => {
        this.errorMessage = error.message;
      }
    );
  }
}
