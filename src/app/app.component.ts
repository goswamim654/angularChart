import { Component } from '@angular/core';
import { DataService } from './data.service';
import { FormControl} from '@angular/forms';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  providers: [DataService]
})
export class AppComponent {
  searchControl = new FormControl();
  chartLabel = [];
  chartData = [];
  chartHidden = false;
  fileNames = [];
  constructor(private dataService: DataService) {
    this.dataService.getFileName()
        .subscribe(data=> {
          for( let i in data) {
            this.fileNames.push(data[i]);
          }
        });
        console.log(this.fileNames);
  }
  ngOnInit() {
  }

  onChangeFile(fileName) {
    this.chartHidden = false;
    this.chartLabel.length = 0;
    this.chartData.length = 0;
    this.dataService.getDataSets(fileName.value)
        .subscribe(data=> {
          for (var i in data) {
             this.chartLabel.push(data[i].label);
             this.chartData.push(data[i].value);
          }
          this.chartHidden = true;
        });
      console.log(this.chartLabel);
      console.log(this.chartData);
  }


  // lineChart
  public lineChartData:Array<any> = [
    {data: this.chartData, label: 'Unit'}
  ];
  public lineChartLabels:Array<any> = this.chartLabel;
  public lineChartOptions:any = {
    responsive: true
  };
  public lineChartColors:Array<any> = [
    { // grey
      backgroundColor: 'rgba(148,159,177,0.2)',
      borderColor: 'rgba(148,159,177,1)',
      pointBackgroundColor: 'rgba(148,159,177,1)',
      pointBorderColor: '#fff',
      pointHoverBackgroundColor: '#fff',
      pointHoverBorderColor: 'rgba(148,159,177,0.8)'
    },
    { // dark grey
      backgroundColor: 'rgba(77,83,96,0.2)',
      borderColor: 'rgba(77,83,96,1)',
      pointBackgroundColor: 'rgba(77,83,96,1)',
      pointBorderColor: '#fff',
      pointHoverBackgroundColor: '#fff',
      pointHoverBorderColor: 'rgba(77,83,96,1)'
    },
    { // grey
      backgroundColor: 'rgba(148,159,177,0.2)',
      borderColor: 'rgba(148,159,177,1)',
      pointBackgroundColor: 'rgba(148,159,177,1)',
      pointBorderColor: '#fff',
      pointHoverBackgroundColor: '#fff',
      pointHoverBorderColor: 'rgba(148,159,177,0.8)'
    }
  ];
  public lineChartLegend:boolean = true;
  public lineChartType:string = 'bar';
 
 changeChartType(type) {
   this.lineChartType = type.value;
  }
 
  // events
  public chartClicked(e:any):void {
    console.log(e);
  }
 
  public chartHovered(e:any):void {
    console.log(e);
  }
}


