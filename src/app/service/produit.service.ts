import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Produit } from '../Models/produit.model';


@Injectable({
  providedIn: 'root'
})

export class ProduitService {
  readonly API_URL = 'http://localhost:8080';

  constructor(private httpClient: HttpClient) { }

  getAllProduits() {
    return this.httpClient.get(`${this.API_URL}/Produit`)
  }
  SaveProduit(Produit: any) {
    return this.httpClient.post(`${this.API_URL}/saveProduit`, Produit)
  }
  updateProduit(Produit: any) {
    return this.httpClient.put(`${this.API_URL}/updateProduit`, Produit)
  }
  deleteProduit(idProduit: any) {
    return this.httpClient.delete(`${this.API_URL}/deleteProduit/${idProduit}`)
  }
  
    }
