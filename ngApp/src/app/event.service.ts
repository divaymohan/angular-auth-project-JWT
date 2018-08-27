import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
@Injectable()
export class EventService {
  private _eventUrl = "http://localhost:3000/api/events";
  private _specialEventUrl = "http://localhost:3000/api/events";



  constructor(private http: HttpClient) { }

  getEvent(){
    return this.http.get<any>(this._eventUrl)
  }
  getSpecialEvent(){
    return this.http.get<any>(this._specialEventUrl)
  }

}
