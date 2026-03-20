import { Component, Input } from '@angular/core';
import { CurrencyPipe } from '@angular/common';

import { MatToolbarModule } from '@angular/material/toolbar';
import { RouterLink } from "@angular/router";
import { MatIconModule } from '@angular/material/icon';
import { MatBadgeModule } from '@angular/material/badge';
import { MatButtonModule } from '@angular/material/button';
import { MatMenuModule } from '@angular/material/menu';

import { intCarrello } from '../../models/item-carrello';


@Component({
  selector: 'app-header',
  imports: [MatToolbarModule, RouterLink, MatIconModule, MatBadgeModule, MatButtonModule, MatMenuModule, CurrencyPipe],
  templateUrl: './header.html',
  styleUrl: './header.css',
})
export class Header {
  private _carrello: intCarrello = { items: [] };
  quantitaItems = 0;
  
  @Input()
  get carrello(): intCarrello{
    return this._carrello
  }
  set carrello(carrello: intCarrello) {
    this._carrello = carrello
    this.quantitaItems = carrello.items.map((item) => item.quantita).reduce((prev,current) => prev + current,0)
  }
  
}
