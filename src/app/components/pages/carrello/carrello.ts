import { Component, OnInit } from '@angular/core';
import { intCarrello, ItemCarrello } from '../../../models/item-carrello';
import { CurrencyPipe } from '@angular/common';
import { RouterLink } from "@angular/router";
import { HttpClient } from '@angular/common/http';

import { MatCardModule } from '@angular/material/card';
import { MatButtonModule } from "@angular/material/button";
import { MatTableModule } from '@angular/material/table';
import { MatIconModule } from '@angular/material/icon';

import { CarrelloService } from '../../../services/carrello/carrello-service';

import {loadStripe} from '@stripe/stripe-js'



@Component({
  selector: 'app-carrello',
  imports: [MatCardModule, MatButtonModule, RouterLink, MatTableModule, CurrencyPipe, MatIconModule],
  templateUrl: './carrello.html',
  styleUrl: './carrello.css',
})
  

export class Carrello implements OnInit{
constructor(private carrelloService: CarrelloService, private http: HttpClient){}

  carrello: intCarrello = {
    items: [
      {
      prodotto: 'https://dms.deckers.com/hoka/image/upload/t_product-medium-wp/v1750106472/1168723-SWRD_1.png?_s=RAABAB0',
      nome: 'Hooka Running',
      prezzo: 103.95,
      quantita: 2,
      id: 1
      },
      {
      prodotto: 'https://dms.deckers.com/hoka/image/upload/t_product-medium-wp/v1750106472/1168723-SWRD_1.png?_s=RAABAB0',
      nome: 'Hooka Running',
      prezzo: 103.95,
      quantita: 1,
      id: 2
      },
      {
      prodotto: 'https://dms.deckers.com/hoka/image/upload/t_product-medium-wp/v1750106472/1168723-SWRD_1.png?_s=RAABAB0',
      nome: 'Hooka Running',
      prezzo: 103.95,
      quantita: 1,
      id: 3
      },
    ]
  };

  dataSource: Array<ItemCarrello> = [];

  colonneTabella: Array<string> = ['prodotto','nome','prezzo', 'quantita', 'totale','azione']
  
  ngOnInit(): void{
    this.carrelloService.carrello.subscribe((_carrello: intCarrello) => {
      this.carrello = _carrello;
      this.dataSource = this.carrello.items;
    })
  }

   sommaTotale(items: Array<ItemCarrello>):number{
    return this.carrelloService.sommaTotale(items)
   }
  
  pulisciCarrello():void {
    return this.carrelloService.pulisciCarrello();
  }

  rimuoviArticoloDalCarrello(item: ItemCarrello):void {
    this.carrelloService.rimuoviArticolo(item);
  }

  quantitaPiu1(item:ItemCarrello): void{
    this.carrelloService.aggiungiAlCarrello(item)
  }

  quantitaMeno1(item: ItemCarrello): void{
    this.carrelloService.rimuoviQuantita(item);
  }
  onCheckout(): void {
    this.http.post(`http://localhost:4242/checkout`, {
      items: this.carrello.items
    }).subscribe(async (risultato: any) => {
      let stripe = await loadStripe('pk_test_51TEkcPQSXh2A1ak0YvBS07pS5ZIivdUVWBT5fEh0UrLH811pEs5Qsaz7rpYqezf0uC6rMYJdVwCzooXI0JE1cWIU00MLY5f2fn');
      stripe?.redirectToCheckout({ sessionId: risultato.id });
    })
  }
}

