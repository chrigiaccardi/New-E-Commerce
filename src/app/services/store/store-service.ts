import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { IntProdotto } from '../../models/int-prodotto';

const STORE_BASE_URL = 'https://fakestoreapi.com'

@Injectable({
  providedIn: 'any',
})
export class storeService {
  constructor(private http: HttpClient) { }

  richiamoProdotti(nProdotti = '12', ordinamento= 'desc', categoria?: string):Observable<Array<IntProdotto>> {
    return this.http.get<Array<IntProdotto>>(`${STORE_BASE_URL}/products${categoria ? '/category/' + categoria: ''}?sort=${ordinamento}&limit=${nProdotti}`)
  }
  
  richiamoCategorie():Observable<Array<string>> {
    return this.http.get<Array<string>>(`${STORE_BASE_URL}/products/categories`)
  }
}


