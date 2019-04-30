import { Injectable } from '@angular/core';
import { HttpClient, HttpResponse } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ActsService {
  private cachedData: any;
  private url = '../../assets/agenda/agenda.json';
  constructor(private http: HttpClient) {}

  public getActs(): Observable<any> {
      return this.http.get(this.url);
  }
}
