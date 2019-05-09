import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Event } from "./event.model";

@Injectable({
  providedIn: 'root'
})
export class EventService {


  constructor(private http: HttpClient) { }

  getEvents() {
      return this.http.get('/api/events');
  };

  saveEvent(event: Event) {
      return this.http.post('/api/events/save', event);
  };

  deleteEvent(event: Event) {
      return this.http.post('/api/events/delete', event);
  };

  getEventCount() {
      return this.http.get('/api/events/getEventCount');
  }
}
