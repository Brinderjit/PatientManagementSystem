import 'rxjs/Rx';
import {Observable} from 'rxjs/Observable';
import {Injectable} from '@angular/core';
import {Http, Headers, Request, RequestMethod, Response} from '@angular/http';
import { HttpClient } from '@angular/common/http';
@Injectable()
export class PatientService {
 private _baseURL = 'http://localhost:3000/api/patient/vitalsigns';
  constructor(private _http: Http,private _httpclient:HttpClient) { }
createSigns(signs: any): Observable<any> {
        return this._httpclient
            .post(this._baseURL, signs)
            .map(res => res)
            .catch(this.handleError);
    }
    createAlerts(alert: any): Observable<any> {
        return this._httpclient
            .post('http://localhost:3000/api/patient/alert', alert)
            .map(res => res)
            .catch(this.handleError);
    }
     listSigns(): Observable<any> {
        return this._httpclient
            .get(this._baseURL)
            .map(res => res)
            .catch(this.handleError);
    }
     listUsers(): Observable<any> {
        return this._httpclient
            .get("http://localhost:3000/api/patient")
            .map(res => res)
            .catch(this.handleError);
    }
     checksymptoms(info:any): Observable<any> {
        return this._httpclient
            .post("http://localhost:3000/api/patient/checksymptoms",info)
            .map(res => res)
            .catch(this.handleError);
    }
     private handleError(error: Response) {
        return Observable.throw(error || 'Server error');
    }
}
