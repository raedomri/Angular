import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Publicite } from '../Models/publicite.model';


@Injectable({
  providedIn: 'root'
})

export class PubliciteService {
  getAllPublicite() {
      throw new Error('Method not implemented.');
  }
  readonly API_URL = 'http://localhost:8080';

  constructor(private httpClient: HttpClient) { }

  getAllPublicte() {
    return this.httpClient.get(`${this.API_URL}/Publicite`)
  }
  SavePublicite(Publicite: any) {
    return this.httpClient.post(`${this.API_URL}/savePublicite`, Publicite)
  }
  updatePublicite(Publicite: any) {
    return this.httpClient.put(`${this.API_URL}/updatePublicite`, Publicite)
  }
  deletePublicite(idPublicite: any) {
    return this.httpClient.delete(`${this.API_URL}/deletePublicite/${idPublicite}`)
  }
    }