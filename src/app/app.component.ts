import { RestService } from './service/restService.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  title = 'My chart !';
  restService: RestService;
  constructor(restService: RestService) {
    this.restService = restService;
  }

  // lineChart
  public lineChartData: Array<any> = [
    {
      data: this.getRandomArray(),
      label: 'Series A'
    }
  ];
  public lineChartLabels: Array<any> = new Array<any>();
  public lineChartOptions: any = {
    responsive: true
  };
  public lineChartColors: Array<any> = [
    {
      // grey
      backgroundColor: 'rgba(125, 34, 189, 0.4)', // 'rgba(148,159,177,0.2)',
      borderColor: 'rgba(148,159,177,1)',
      pointBackgroundColor: 'rgba(148,159,177,1)',
      pointBorderColor: '#fff',
      pointHoverBackgroundColor: '#fff',
      pointHoverBorderColor: 'rgba(148,159,177,0.8)'
    }
  ];
  public lineChartLegend = true;
  public lineChartType = 'line';

  ngOnInit() {
    this.calcLabelGrid();
  }

  public calcLabelGrid() {
    this.lineChartLabels = new Array<any>();
    // only one series
    for (let i in this.getFirstSeries()) {
      if (i) {
        this.lineChartLabels.push(i);
      }
    }
    this.lineChartLabels.splice(0, 1);
    console.log('lineChartLabels');
    console.log(this.lineChartLabels);
  }

  public randomize(): void {
    console.log('lineChartData: ' + this.getFirstSeries());

    this.getFirstSeries().splice(0, 1);
    this.getFirstSeries().push(Math.floor(Math.random() * 1000));

    this.refreshFromData(this.getFirstSeries());
  }

  private refreshFromData(data: any) {
    this.lineChartData = [
      {
        data: data,
        label: 'Series A'
      }
    ];
  }

  public getData() {
    console.log('res: ');
    this.restService
      .getCoinRatesByCoinList('USD,ETH2,ETH3,ETH4,ETH5,ETH6')
      .subscribe((res: any) => {
        console.log(res);
        const dataByCodeFromServer: Array<number> = new Array<number>();
        const numberArray: Array<number> = res.USD;
        for (const key in numberArray) {
          if (key) {
            dataByCodeFromServer.push(numberArray[key]);
          }
        }

        console.log(dataByCodeFromServer);

        this.refreshFromData(dataByCodeFromServer);
      });
  }

  private getRandomArray(): Array<number> {
    const tempArray: Array<number> = new Array<number>();
    for (let i = 0; i <= 20; i++) {
      tempArray.push(Math.floor(Math.random() * 1000));
    }
    return tempArray;
  }

  private getFirstSeries() {
    return this.lineChartData[0].data;
  }

  // events
  public chartClicked(e: any): void {
    console.log(e);
  }

  public chartHovered(e: any): void {
    console.log(e);
  }
}
