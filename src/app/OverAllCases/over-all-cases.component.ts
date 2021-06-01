import { Component, OnInit } from '@angular/core';
import { covidapiService } from '../Service/covidapi.service';
import { OverAllCovid } from '../JsonComments/OverAllCovid';



@Component({
  selector: 'app-over-all-cases',
  templateUrl: './over-all-cases.component.html',
  styleUrls: ['./over-all-cases.component.css']
})
export class OverAllCasesComponent implements OnInit {
  listoverallData: OverAllCovid;
  activeCases = 0;
  activeCasesNew = 0;
  recovered = 0;
  recoveredNew = 0;
  deaths = 0;
  deathsNew = 0;
  previousDayTests = 0;
  totalCases = 0;
  lastUpdatedAt = "";
  constructor(private _covidapiService: covidapiService) {
    
   }
  ngOnInit(){
    debugger;
      this._covidapiService.getcovidbyparameters()
    .subscribe((data: any) => {
      
        this.activeCases = data.activeCases;
        this.activeCasesNew = data.activeCasesNew;
        this.recovered = data.recovered;
        this.recoveredNew = data.recoveredNew;
        this.deaths = data.deaths;
        this.deathsNew = data.deathsNew;
        this.previousDayTests = data.previousDayTests;
        this.totalCases = data.totalCases;
        this.lastUpdatedAt = data.lastUpdatedAtApify;
    }
    );
    
  }

}
