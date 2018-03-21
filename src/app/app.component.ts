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
      data: [10, 55, 11, 81, 56, 55, 40, 88, 22, 11, 55, 22, 99, 33, 2],
      label: 'Series A'
    }
    // { data: [28, 48, 40, 19, 86, 27, 90], label: 'Series B' },
    //{ data: [18, 48, 77, 9, 100, 27, 40], label: 'Series C' }
  ];
  public lineChartLabels: Array<any> = new Array<any>();
  public lineChartOptions: any = {
    responsive: true
  };
  public lineChartColors: Array<any> = [
    {
      // grey
      backgroundColor: 'rgba(148,159,177,0.2)',
      borderColor: 'rgba(148,159,177,1)',
      pointBackgroundColor: 'rgba(148,159,177,1)',
      pointBorderColor: '#fff',
      pointHoverBackgroundColor: '#fff',
      pointHoverBorderColor: 'rgba(148,159,177,0.8)'
    },
    {
      // dark grey
      backgroundColor: 'rgba(77,83,96,0.2)',
      borderColor: 'rgba(77,83,96,1)',
      pointBackgroundColor: 'rgba(77,83,96,1)',
      pointBorderColor: '#fff',
      pointHoverBackgroundColor: '#fff',
      pointHoverBorderColor: 'rgba(77,83,96,1)'
    },
    {
      // grey
      backgroundColor: 'rgba(148,159,177,0.2)',
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
    for (let i = 1; i <= this.lineChartData[0].data.length; i++) {
      this.lineChartLabels.push(i);
    }
    console.log('lineChartLabels');
    console.log(this.lineChartLabels);
  }

  public randomize(): void {
    console.log('lineChartData: ' + this.lineChartData[0].data);

    this.getFirstSeries().splice(0, 1);
    this.getFirstSeries().push(Math.floor(Math.random() * 100));

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
    this.restService.getCoinRatesByCoinList('USD,ETH2,ETH3,ETH4,ETH5,ETH6').subscribe((res: any) => {
      console.log(res);
      let dataFromServer: Array<number> = new Array<number>();
      dataFromServer.push(res[0].value);
      dataFromServer.push(res[1].value);
      dataFromServer.push(res[2].value);
      dataFromServer.push(res[3].value);
      dataFromServer.push(res[4].value);
      dataFromServer.push(res[5].value);
      dataFromServer.push(1);
      dataFromServer.push(1);
      dataFromServer.push(1);
      dataFromServer.push(1);
      dataFromServer.push(1);
      dataFromServer.push(50);
      dataFromServer.push(1);
      dataFromServer.push(50);
      dataFromServer.push(1);

      this.refreshFromData(dataFromServer);
    });
    console.log('getData');
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
