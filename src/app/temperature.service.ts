import { Injectable } from '@angular/core';
import { Http, Response } from "@angular/http";
import 'rxjs/Rx';
//import {IWeatherData} from "../src/app/iweather-data";


export interface IWeatherData {
  time: string;
  measurement: string;
  name:string;
  unit:string;
}


@Injectable()
export class TemperatureService {

  private weatherUrl = 'http://opendata-download-metfcst.smhi.se/api/category/pmp2g/version/2/geotype/point/lon/16.158/lat/58.5812/data.json';  // URL to web API
  private weatherData;

  constructor(private http: Http) { }

  getData(col:number) {
    return this.http.get(this.weatherUrl)
      .map((response: Response) => {
        this.weatherData = response.json();
        return this.extractDataType(this.weatherData.timeSeries, col)
      })
  }

  extractDataType(data:any,col:number){
    let measurements: Array<IWeatherData> = [];

    for (let i=0; i<data.length; i++){
      measurements.push({time:data[i].validTime, measurement:data[i].parameters[col].values[0], name:data[i].parameters[col].name, unit:data[i].parameters[col].unit});
    }
    return measurements;
  }


}
