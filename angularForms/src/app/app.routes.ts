import { Routes } from '@angular/router';
import { ReactiveForms } from './reactive-forms/reactive-forms';
import { Header } from './header/header';
import { GroupForm } from './group-form/group-form';

export const routes: Routes = [
    {path:'reactive-form',component:ReactiveForms},
    {path:'groupForm',component:GroupForm},
    { path: '', redirectTo: 'reactive-form', pathMatch: 'full' }
];
