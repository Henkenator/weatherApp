import {Component, OnInit, AfterViewInit, Input, OnChanges} from '@angular/core';

const Highcharts = require('highcharts');

@Component({
  selector: 'app-weather-chart',
  templateUrl:'./weather-chart.component.html',
  styleUrls: ['./weather-chart.component.css']
})
export class WeatherChartComponent implements AfterViewInit, OnChanges {

  @Input()
  data:Array<any> = [];

  constructor() {
  }

  ngOnChanges(){
    if (this.data.length > 0){
      let values = [];
      let time = [];
      for (let i=0; i<45; i++){
        values.push(this.data[i].measurement);
        time.push(this.data[i].time.substring(11,13));
      }
    Highcharts.chart('chart', {
      title: {
        text: this.data[0].name + ' in ' + this.data[0].unit
      },
      yAxis: {
        title: {
          text: this.data[0].name,
        }
      },
      xAxis: {
        categories: time
      },
      /*legend: {
        layout: 'vertical',
        align: 'right',
        verticalAlign: 'middle'
      },*/
      series: [
        {
          name: this.data[0].name,
          data: values
        }
        ]
    })
    }
  }

  ngAfterViewInit(){
    Highcharts.chart('chart', {
      title: {
        text: ''
      },
      series: [
       ]
    })
  }

}
