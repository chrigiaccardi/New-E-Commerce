import { Component, OnInit } from '@angular/core';
import { intCarrello, ItemCarrello } from '../../../models/item-carrello';
import { MatCardModule } from '@angular/material/card';
import { MatButtonModule } from "@angular/material/button";
import { RouterLink } from "@angular/router";


@Component({
  selector: 'app-carrello',
  imports: [MatCardModule, MatButtonModule, RouterLink],
  templateUrl: './carrello.html',
  styleUrl: './carrello.css',
})
export class Carrello implements OnInit{
  carrello: intCarrello = {
    items: [{
      prodotto: 'https://www.hoka.com/it/it/modelli-trail-selezionati/',
      nome: 'Hooka Running',
      prezzo: 103.95,
      quantità: 1,
      id: 1
}]
  };
  dataSource: Array<ItemCarrello> = [];
  ngOnInit(): void{
    this.dataSource = this.carrello.items
  }
}

