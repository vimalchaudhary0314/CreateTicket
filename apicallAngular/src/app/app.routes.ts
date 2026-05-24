import { Routes } from '@angular/router';
import { BookDetails } from './book-details/book-details';
import { Header } from './header/header';
import { Rxjxbasic } from './rxjxbasic/rxjxbasic';
import { Counter } from './counter/counter';

export const routes: Routes = [
     {path:'',component:Counter},
     {path:'BookDetails',component:BookDetails}
     
     
];
