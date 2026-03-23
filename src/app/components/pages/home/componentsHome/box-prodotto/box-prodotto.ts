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

  @Input() prodotto: IntProdotto | undefined;

  @Output() addCarrello = new EventEmitter();

  aggiungiAlCarrello(): void{
    this.addCarrello.emit(this.prodotto)
  }
}
