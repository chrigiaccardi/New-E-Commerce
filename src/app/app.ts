import { Component, OnInit, signal } from '@angular/core';
import { Header } from "./components/header/header";
import { RouterOutlet } from '@angular/router';
import { intCarrello } from './models/item-carrello';
import { CarrelloService } from './services/carrello/carrello-service';

@Component({
  selector: 'app-root',
  imports: [Header, RouterOutlet],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App implements OnInit{
  protected readonly title = signal('Real-E-Commerce');
  carrello: intCarrello = { items: [] };

  constructor(private carrelloService: CarrelloService){}

  ngOnInit(): void {
    this.carrelloService.carrello.subscribe((_carrello) => this.carrello = _carrello)
  }
}
