import { Component, EventEmitter, OnDestroy, OnInit, Output } from '@angular/core';
import { MatExpansionModule } from '@angular/material/expansion';
import { MatListModule } from '@angular/material/list';
import { storeService } from '../../../../../../services/store/store-service';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-filters',
  imports: [MatExpansionModule, MatListModule],
  templateUrl: './filters.html',
  styleUrl: './filters.css',
})
  
export class Filters implements OnInit, OnDestroy{
  categorie: Array<string> | undefined;
  sottoscrizioneCategorie: Subscription | undefined;

  @Output() showCategorie = new EventEmitter<string>();

  constructor(private storeService: storeService) { }
  
  ngOnInit(): void {
    this.sottoscrizioneCategorie = this.storeService.richiamoCategorie().subscribe((risposta) => {this.categorie = risposta})
  }

  ngOnDestroy(): void {
    if (this.sottoscrizioneCategorie) {
      this.sottoscrizioneCategorie.unsubscribe();
    }
  }

  onShowCategorie(categoria: string): void{
    this.showCategorie.emit(categoria) 
  }
}
