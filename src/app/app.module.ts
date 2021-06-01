import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HttpClientModule } from '@angular/common/http';
import { covidapiService } from './Service/covidapi.service';
import { OverAllCasesComponent } from './OverAllCases/over-all-cases.component';
import { FormsModule } from '@angular/forms';

@NgModule({
  declarations: [
    AppComponent,
    OverAllCasesComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule
    
    
  ],
  providers: [covidapiService],
  bootstrap: [AppComponent]
})
export class AppModule { }
