import { Component, OnInit } from '@angular/core';
import { intCarrello, ItemCarrello } from '../../../models/item-carrello';
import { MatCardModule } from '@angular/material/card';
import { MatButtonModule } from "@angular/material/button";
import { RouterLink } from "@angular/router";
import { MatTableModule } from '@angular/material/table';
import { CurrencyPipe } from '@angular/common';


@Component({
  selector: 'app-carrello',
  imports: [MatCardModule, MatButtonModule, RouterLink, MatTableModule, CurrencyPipe],
  templateUrl: './carrello.html',
  styleUrl: './carrello.css',
})
export class Carrello implements OnInit{
  carrello: intCarrello = {
    items: [
      {
      prodotto: 'https://www.hoka.com/it/it/modelli-trail-selezionati/',
      nome: 'Hooka Running',
      prezzo: 103.95,
      quantita: 1,
      id: 1
      }
    ]
  };

  dataSource: Array<ItemCarrello> = [];

  colonneTabella: Array<string> = ['prodotto','nome','prezzo', 'quantita', 'totale','azione']
  
  ngOnInit(): void{
    this.dataSource = this.carrello.items
  }

  sommaTotale(items: Array<ItemCarrello>):number{
    return items.map((item) =>
      item.prezzo * item.quantita).reduce((prev, current) =>
        prev + current, 0)
  }
}

