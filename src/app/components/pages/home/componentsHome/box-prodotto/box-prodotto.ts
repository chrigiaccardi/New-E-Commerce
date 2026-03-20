import { Component, EventEmitter, Input, Output } from '@angular/core';
import { MatCard } from "@angular/material/card";
import { CurrencyPipe, NgClass } from '@angular/common';
import { MatIcon } from "@angular/material/icon";
import { IntProdotto } from '../../../../../models/int-prodotto';

@Component({
  selector: 'app-box-prodotto',
  imports: [MatCard, CurrencyPipe, MatIcon, NgClass],
  templateUrl: './box-prodotto.html',
  styleUrl: './box-prodotto.css',
})
export class BoxProdotto {
  @Input() modTuttoSchermo = false

  prodotto: IntProdotto | undefined = {
       id: 1,
    titolo: 'Adidas Run',
    prezzo: 99.99,
    categoria: 'Scarpe',
    descrizione: 'Scarpe per la corsa di tutti i giorni',
    immagine: 'https://assets.adidas.com/images/w_600,f_auto,q_auto/e138c7d37c9e4115ad18d7628079a77d_faec/Scarpe_Adizero_Adios_Pro_4_Bianco_JR1094_db01_00_standard.jpg'
  }

  @Output() addCarrello = new EventEmitter();

  aggiungiAlCarrello(): void{
    this.addCarrello.emit(this.prodotto)
  }
}
