import { Routes } from '@angular/router';
import { Home } from './components/pages/home/home';
import { Carrello } from './components/pages/carrello/carrello';

export const routes: Routes = [
    {path:'', component: Home},
    {path:'carrello', component: Carrello},
];
