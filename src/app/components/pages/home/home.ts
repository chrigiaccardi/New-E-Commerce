import { Component } from '@angular/core';
import { MatSidenavModule } from '@angular/material/sidenav';
import { ProductHeader } from './componentsHome/product-header/product-header/product-header';
import { Filters } from "./componentsHome/product-header/filters/filters";
import { MatGridListModule } from '@angular/material/grid-list';
import { BoxProdotto } from './componentsHome/box-prodotto/box-prodotto';

const ALTEZZA_RIGHE: {[id: number]:number} = {1: 400, 3: 335, 4: 350}

@Component({
  selector: 'app-home',
  imports: [MatSidenavModule, ProductHeader, Filters, MatGridListModule, BoxProdotto],
  templateUrl: './home.html',
  styleUrl: './home.css',
})
export class Home {
  colonne: number = 3;
  altezzaRighe = ALTEZZA_RIGHE[this.colonne]
  categoria: string | undefined;

  onConteggioColonneCambia(nCol: number):void {
    this.colonne = nCol;
    this.altezzaRighe = ALTEZZA_RIGHE[this.colonne]

  }
  onShowCategoria(cat:string):void {
    this.categoria = cat;
  }
}
