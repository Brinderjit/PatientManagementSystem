import 'rxjs/Rx';
import {Observable} from 'rxjs/Observable';
import {Injectable} from '@angular/core';
import {Http, Headers, Request, RequestMethod, Response} from '@angular/http';
import { HttpClient } from '@angular/common/http';

@Injectable()
export class NurseService {
 private _baseURL = 'http://localhost:3000/api/nurse/vitalsigns';
  constructor(private _http: Http,private _httpclient:HttpClient) { }
 createSigns(course: any): Observable<any> {
        return this._httpclient
            .post(this._baseURL, course)
            .map(res => res)
            .catch(this.handleError);
    }
    createdailytip(tip: any): Observable<any> {
      console.log(tip);
        return this._httpclient
            .post('http://localhost:3000/api/nurse/dailytip', tip)
            .map(res => res)
            .catch(this.handleError);
    }
     listSigns(): Observable<any> {
        return this._httpclient
            .get("http://localhost:3000/api/nurse/vitalsigns")
            .map(res => res)
            .catch(this.handleError);
    }
    getdailytip(): Observable<any> {
        return this._httpclient
            .get('http://localhost:3000/api/nurse/dailytip')
            .map(res => res)
            .catch(this.handleError);
    }
     getAlerts(): Observable<any> {
        return this._httpclient
            .get('http://localhost:3000/api/nurse/alerts')
            .map(res => res)
            .catch(this.handleError);
    }
   
     private handleError(error: Response) {
        return Observable.throw(error || 'Server error');
    }
}
