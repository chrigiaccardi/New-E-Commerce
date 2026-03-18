import { Component, EventEmitter, Output } from '@angular/core';
import { MatExpansionModule } from '@angular/material/expansion';
import { MatListModule } from '@angular/material/list';

@Component({
  selector: 'app-filters',
  imports: [MatExpansionModule, MatListModule],
  templateUrl: './filters.html',
  styleUrl: './filters.css',
})
  
export class Filters {
  categorie = ['Scarpe', 'Caschi', 'Abbigliamento'];
  @Output() showCategorie = new EventEmitter<string>();

  onShowCategorie(categoria: string): void{
    this.showCategorie.emit(categoria) 
  }
}
