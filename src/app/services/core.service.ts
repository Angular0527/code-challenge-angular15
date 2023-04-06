import { environment } from './../../environments/environment';
import { Injectable } from '@angular/core';
import { HttpClientModule, HttpHeaders } from '@angular/common/http';
import { HttpClient } from '@angular/common/http';

import { Observable } from 'rxjs';
/* import {
  Http,
  URLSearchParams,
  Headers,
  Response,
  RequestOptions,
  ResponseContentType
} from '@angular/http'; */

@Injectable({
  providedIn: 'root'
})
export class CoreService {
  private loggedInStatus = false;
  private loginAccessWS = 'login/loginAccess';
  public api = environment.apiUrlJava;

  constructor(
    private http: HttpClient,
    //private router: Router,
    //private util: UtilsService,
    //private jwtHelper: JwtHelperService
  ) { }

  public sendDataCore(metodo:any, params:any): Observable<Object> {
    const headers = new HttpHeaders();
    headers.append('Content-Type', 'application/json');
    const options = {
      headers: headers,
      params: params
    };
    return this.http.get(this.api + metodo, options);
    // .map((response: Response) => response.json());
  }

  public sendDataCorePost(metodo:any, params:any): Observable<Object> {
    const headers = new HttpHeaders();
    headers.append('Content-Type', 'application/json');
    const options = { headers: headers };
    return this.http.post(this.api + metodo, params, options);
    // .map((response: Response) => response.json());
  }

  public consumePostExterno(url:any, metodo:any, params:any): Observable<Object> {
    const headers = new HttpHeaders();
    headers.append('Content-Type', 'application/json');
    const options = { headers: headers, withCredentials: true };
    return this.http.post(url + metodo, params, options);
  }

  public consumeGetExterno(url:any, metodo:any, params:any): Observable<Object> {
    const headers = new HttpHeaders();
    headers.append('Content-Type', 'application/json');
    const options = {
      headers: headers,
      params: params,
      withCredentials: true
    };
    return this.http.get(url + metodo, options);
  }



  public consumirWSGet(metodo:any, params:any, callback:any, mostrar?:any) {
    this.sendDataCore(metodo, params).subscribe(
      datos => {
        
        if (mostrar === 'ocultar' || mostrar === undefined) {
          
        }
        callback(datos);
      },
      error => {
        
        if (error.status === 401) {
          sessionStorage.removeItem('access_token');
          sessionStorage.removeItem('user');
          window.location.reload();
        } else {
          callback(null);
        }
      }
    );
  }

}
