import { Component } from '@angular/core';
import {TemperatureService} from "./temperature.service";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {

  private measurements:Array<any> = [];

  constructor(private temperatureService: TemperatureService){

  }
  fetchData(col:number){
    this.temperatureService.getData(col)
      .subscribe(
        data => {
          this.measurements = data;
        }
      );
  }

  fetchTemp(){
    this.fetchData(1);
  }

  fetchPressure(){
    this.fetchData(0);
  }

  fetchWind(){
    this.fetchData(4);
  }


}
