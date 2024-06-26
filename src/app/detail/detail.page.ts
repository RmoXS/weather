import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { DatePipe } from '@angular/common';

@Component({
  selector: 'app-detail',
  templateUrl: './detail.page.html',
  styleUrls: ['./detail.page.scss'],
  providers: [DatePipe]
})
export class DetailPage implements OnInit {
  weather: any;

  constructor(private route: ActivatedRoute, private router: Router, private datePipe: DatePipe) {
    this.route.queryParams.subscribe(params => {
      if (params && params['special']) {
        this.weather = JSON.parse(params['special']);
        console.log(this.weather);
      }
    })
   }

  ngOnInit() {
  }

  formatDate (dateString: string): string {
    return this.datePipe.transform(dateString, "dd MMM yyyy - hh:mm")!;
  }

  save () {
    localStorage.setItem('fav', JSON.stringify(this.weather))
  }

}
