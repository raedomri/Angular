import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Categorie } from '../Models/categorie.model';


@Injectable({
  providedIn: 'root'
})

export class CategorieService {
  readonly API_URL = 'http://localhost:8080';

  constructor(private httpClient: HttpClient) { }

  getAllCategorie() {
    return this.httpClient.get(`${this.API_URL}/Categorie`)
  }
  SaveCategorie(Categorie: any) {
    return this.httpClient.post(`${this.API_URL}/saveCategorie`, Categorie
    )
  }
  updateCategorie(Categorie: any) {
    return this.httpClient.put(`${this.API_URL}/updateCategorie`, Categorie)
  }
  deleteCategorie(idCategorie: any) {
    return this.httpClient.delete(`${this.API_URL}/deleteCategorie/${idCategorie}`)
  }
    }
