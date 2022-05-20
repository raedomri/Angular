import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Events } from '../Models/events.model';


@Injectable({
  providedIn: 'root'
})

export class EventsService {
  readonly API_URL = 'http://localhost:8080';

  constructor(private httpClient: HttpClient) { }

  getAllEvents() {
    return this.httpClient.get(`${this.API_URL}/Events`)
  }
  saveEvents(Events: any) {
    return this.httpClient.post(`${this.API_URL}/saveEvents`, Events)
  }
  updateEvents(Events: any) {
    return this.httpClient.put(`${this.API_URL}/updateEvents`, Events)
  }
  deleteEvents(idEvents: any) {
    return this.httpClient.delete(`${this.API_URL}/deleteEvents/${idEvents}`)
  }
    }