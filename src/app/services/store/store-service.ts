import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { IntProdotto } from '../../models/int-prodotto';

const STORE_BASE_URL = 'https://fakestoreapi.com'

@Injectable({
  providedIn: 'root',
})
export class Store {
  constructor(private http: HttpClient) { }

  richiamoProdotti(nProdotti = '12', ordinamento= 'desc'):Observable<Array<IntProdotto>> {
    return this.http.get<Array<IntProdotto>>(`${STORE_BASE_URL}/products?sort=${ordinamento}&limit=${nProdotti}`)
  }
  
}
