import { Component, inject, OnDestroy, OnInit } from '@angular/core';
import { MatSidenavModule } from '@angular/material/sidenav';
import { ProductHeader } from './componentsHome/product-header/product-header/product-header';
import { Filters } from "./componentsHome/product-header/filters/filters";
import { MatGridListModule } from '@angular/material/grid-list';
import { BoxProdotto } from './componentsHome/box-prodotto/box-prodotto';
import { CarrelloService } from '../../../services/carrello/carrello-service';
import { IntProdotto } from '../../../models/int-prodotto';
import { Subscription } from 'rxjs';
import { storeService } from '../../../services/store/store-service';

const ALTEZZA_RIGHE: {[id: number]:number} = {1: 400, 3: 335, 4: 350}

@Component({
  selector: 'app-home',
  imports: [MatSidenavModule, ProductHeader, Filters, MatGridListModule, BoxProdotto],
  templateUrl: './home.html',
  styleUrl: './home.css',
})
export class Home implements OnInit, OnDestroy{
  colonne: number = 3;
  altezzaRighe = ALTEZZA_RIGHE[this.colonne]
  categoria: string | undefined;
  prodotti: Array<IntProdotto> | undefined;
  ordinamento = 'desc';
  nProdotti = '12'
  sottoscrizioneProdotti: Subscription | undefined;

  constructor(private carrelloService: CarrelloService, private storeService: storeService) { }
  
  prendiProdotti():void {
    this.sottoscrizioneProdotti =  this.storeService.richiamoProdotti(this.nProdotti, this.ordinamento, this.categoria).subscribe((_prodotti) => {
    this.prodotti = _prodotti} )
}

  ngOnInit(): void {
    this.prendiProdotti();
  }

  ngOnDestroy(): void {
    if (this.sottoscrizioneProdotti) {
      this.sottoscrizioneProdotti.unsubscribe();
    }  
  }

  onConteggioColonneCambia(nCol: number):void {
    this.colonne = nCol;
    this.altezzaRighe = ALTEZZA_RIGHE[this.colonne]

  }
  
  onShowCategoria(cat:string):void {
    this.categoria = cat;
    this.prendiProdotti();
  }

  aggiungiAlCarrello(prodotto: IntProdotto):void {
    this.carrelloService.aggiungiAlCarrello({
      prodotto: prodotto.image,
      nome: prodotto.title,
      prezzo: prodotto.price,
      quantita: 1,
      id: prodotto.id
    })
  }

  onCambioVisualProdotti(conteggioItem:number):void {
    this.nProdotti = conteggioItem.toString();
    this.prendiProdotti();
  }

  onCambioOrdinamento(ordine: string):void {
    this.ordinamento = ordine;
    this.prendiProdotti();
  }
}
