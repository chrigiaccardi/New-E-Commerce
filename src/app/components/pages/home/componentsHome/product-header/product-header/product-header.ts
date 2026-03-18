import { Component, EventEmitter, Output } from '@angular/core';
import {MatCardModule} from '@angular/material/card';
import { MatButton } from "@angular/material/button";
import { MatMenuModule } from "@angular/material/menu";
import { MatIcon } from "@angular/material/icon";


@Component({
  selector: 'app-product-header',
  imports: [MatCardModule, MatButton, MatMenuModule, MatIcon],
  templateUrl: './product-header.html',
  styleUrl: './product-header.css',
})
export class ProductHeader {
  @Output() conteggioColonne = new EventEmitter<number>();
  ordine: string = '';
  conteggioItem: number = 12

  aggiornaColonne(nCol: number) {
    this.conteggioColonne.emit(nCol)
  }
  
  aggiornaOrdine(ordine: string): void {
    this.ordine = ordine
  }

  aggiornaNItems(count: number):void {
    this.conteggioItem = count
  }
}
