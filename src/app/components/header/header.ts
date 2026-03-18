import { Component } from '@angular/core';
import { CurrencyPipe } from '@angular/common';

import { MatToolbarModule } from '@angular/material/toolbar';
import { RouterLink } from "@angular/router";
import { MatIconModule } from '@angular/material/icon';
import { MatBadgeModule } from '@angular/material/badge';
import { MatButtonModule } from '@angular/material/button';
import {MatMenuModule} from '@angular/material/menu';


@Component({
  selector: 'app-header',
  imports: [MatToolbarModule, RouterLink, MatIconModule, MatBadgeModule, MatButtonModule, MatMenuModule, CurrencyPipe],
  templateUrl: './header.html',
  styleUrl: './header.css',
})
export class Header {

}
