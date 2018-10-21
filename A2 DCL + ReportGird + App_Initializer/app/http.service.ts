import { Injectable, Injector } from '@angular/core';
import { HttpClient, HttpHeaderResponse, HttpRequest, HttpResponse } from '@angular/common/http';
import { Router } from '@angular/router';
import { Observable, forkJoin, throwError } from 'rxjs';
import { tap, catchError, timeout } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class HttpService {

  constructor(private injector: Injector, private http: HttpClient) { }

  public get(url, methodName?) {
    return this.http.get(url + methodName);
  }
  
  
}
