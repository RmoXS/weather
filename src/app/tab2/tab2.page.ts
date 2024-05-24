import { Component, OnInit } from '@angular/core';
import { WeatherService, Forecast} from '../services/weather.service';
import { DatePipe } from '@angular/common';

@Component({
  selector: 'app-tab2',
  templateUrl: 'tab2.page.html',
  styleUrls: ['tab2.page.scss'],
  providers: [DatePipe]
})
export class Tab2Page implements OnInit{
  forecast: Forecast = {
    list: []
  };
  city: string = 'Sleman';

  constructor(private weatherService: WeatherService, private datePipe: DatePipe ) {}

  ngOnInit(): void {
    this.weatherService.getDatalist().subscribe(
      result => {
        this.forecast = result;
        console.log(this.forecast);
      }
    )
  }

  formatDate (dateString: string): string {
    return this.datePipe.transform(dateString, "dd MMM - hh a")!;
  }
}
