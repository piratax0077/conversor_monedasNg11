import { Injectable } from '@angular/core';
import { HttpClient, HttpErrorResponse } from "@angular/common/http";
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class IndicadoresService {

  url: string = 'https://mindicador.cl/api';

  constructor(protected http: HttpClient) { }

  getIndicadores(): Observable<any>{
    return this.http.get(this.url);
  }
}
