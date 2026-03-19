import { Component, OnInit } from '@angular/core';
import { intCarrello, ItemCarrello } from '../../../models/item-carrello';
import { CurrencyPipe } from '@angular/common';
import { RouterLink } from "@angular/router";

import { MatCardModule } from '@angular/material/card';
import { MatButtonModule } from "@angular/material/button";
import { MatTableModule } from '@angular/material/table';
import { MatIconModule } from '@angular/material/icon';


@Component({
  selector: 'app-carrello',
  imports: [MatCardModule, MatButtonModule, RouterLink, MatTableModule, CurrencyPipe, MatIconModule],
  templateUrl: './carrello.html',
  styleUrl: './carrello.css',
})
export class Carrello implements OnInit{
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
    this.dataSource = this.carrello.items
  }

  sommaTotale(items: Array<ItemCarrello>):number{
    return items.map((item) =>
      item.prezzo * item.quantita).reduce((prev, current) =>
        prev + current, 0)
  }
}

