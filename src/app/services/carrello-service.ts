import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { intCarrello, ItemCarrello } from '../models/item-carrello';
import { MatSnackBar } from '@angular/material/snack-bar';

@Injectable({
  providedIn: 'root',
})
export class CarrelloService {
  carrello = new BehaviorSubject<intCarrello>({ items: [] })

  constructor(private _snackBar: MatSnackBar) { }
  
  aggiungiAlCarrello(item: ItemCarrello): void {
    const items = [...this.carrello.value.items];
    const itemNelCarrello = items.find((_item) => _item.id === item.id);
    if (itemNelCarrello) {
      itemNelCarrello.quantita += 1;
    } else {
      items.push(item)
    }
    this.carrello.next({ items });
    this._snackBar.open(' 1 Articolo Aggiunto al Carrello', 'Ok', { duration: 3000 });
    console.log(this.carrello.value)
  }
}
