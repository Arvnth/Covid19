import { Component } from '@angular/core';
import { covidapiService } from './Service/covidapi.service';
import { StateCases } from './JsonComments/StateCases';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})

export class AppComponent {
  accordianPanel = false;
  
  constructor(private _covidapiService: covidapiService
    ) {
      
  }
  listStateData: StateCases[];
  ngOnInit() {
    this._covidapiService.getcovidbyparameters()
      .subscribe((data: any) => {
        this.listStateData =  data.regionData;
      }
      );
  }
//  $scope.negativeValue=function(myValue){
//    var neg = parseInt(myValue);

//  }


}

