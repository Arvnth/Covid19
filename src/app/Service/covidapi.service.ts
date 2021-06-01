import { Injectable } from '@angular/core';
import { Observable, throwError } from 'rxjs';
import { HttpClient, HttpParams } from '@angular/common/http';
import { catchError, map } from 'rxjs/operators';



@Injectable()
export class covidapiService {
    constructor(private httpclient: HttpClient) { }

    getcovidbyparameters() {
        let params1 = new HttpParams().set('disableRedirect', "true");
        return this.httpclient.get("https://api.apify.com/v2/key-value-stores/toDWvRj1JpTXiM8FF/records/LATEST", { params: params1 })
            .pipe(map((data: any) => {
                return data;
            }), catchError(error => {
                return throwError('Something went wrong!');
            }))
    }


    // getcovidbyparameters()
    // {
    //     let url = "https://api.apify.com/v2/key-value-stores/toDWvRj1JpTXiM8FF/records/LATEST";
    //     return this.httpclient.get(url);
    // }
}