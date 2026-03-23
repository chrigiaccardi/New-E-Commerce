import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { intCarrello, ItemCarrello } from '../../models/item-carrello';
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
  }

   sommaTotale(items: Array<ItemCarrello>):number{
    return items.map((item) =>
      item.prezzo * item.quantita).reduce((prev, current) =>
        prev + current, 0)
   }
  
  pulisciCarrello():void {
    this.carrello.next({ items: [] });
    this._snackBar.open('Il Carrello è stato SVUOTATO', 'Ok', {duration: 3000})
  }

  rimuoviArticolo(item: ItemCarrello, update = true):Array<ItemCarrello> {
    const elementiFiltrati = this.carrello.value.items.filter((_item: ItemCarrello) => _item.id !== item.id);

    if (update) {
    this.carrello.next({ items: elementiFiltrati });
    this._snackBar.open('Articolo eliminato dal Carrello', 'Ok', { duration: 3000 })
    }

    return elementiFiltrati;
  };

  rimuoviQuantita(item: ItemCarrello):void {
    let rimozioneItem: ItemCarrello | undefined;

    let elementiFiltrati = this.carrello.value.items.map((_item:ItemCarrello) => {
      if (_item.id === item.id) {
        _item.quantita --;
        if (_item.quantita === 0) {
          rimozioneItem = _item
        };
      };
      console.log(_item) 
      return _item
    });

    if (rimozioneItem) {
      elementiFiltrati = this.rimuoviArticolo(rimozioneItem, false);
    };

    this.carrello.next({ items: elementiFiltrati });
    this._snackBar.open('1 Articolo Rimosso dal Carrello', 'Ok', { duration: 3000 });
  }

  
}
