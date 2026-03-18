import { Component, Input } from '@angular/core';
import { MatCard } from "@angular/material/card";
import { CurrencyPipe, NgClass } from '@angular/common';
import { MatIcon } from "@angular/material/icon";

@Component({
  selector: 'app-box-prodotto',
  imports: [MatCard, CurrencyPipe, MatIcon, NgClass],
  templateUrl: './box-prodotto.html',
  styleUrl: './box-prodotto.css',
})
export class BoxProdotto {
  @Input() modTuttoSchermo = false
}
