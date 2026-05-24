import { Routes } from '@angular/router';
import { HomeComponent } from './home-component/home-component';
import { LoginComponent } from './login-component/login-component';
import { Product } from './product/product';
import { Profile } from './profile/profile';
import { PageNotfound } from './page-notfound/page-notfound';
import { Passvalue } from './passvalue/passvalue';
import { User } from './user/user';
import { UserDetails } from './user-details/user-details';

export const routes: Routes = [
  { path: '', redirectTo: 'profile', pathMatch: 'full' }, // optional but better
  { path: 'profile', component: Profile },                // ✅ ADD THIS

  { path: 'home', component: HomeComponent },
  { path: 'pipes', component: LoginComponent },
  { path: 'product', component: Product },
  { path: 'passvalue', component: Passvalue },
   { path: 'user', component: User },
    { path: 'userDetails/:id', component: UserDetails },

  { path: '**', component: PageNotfound }
];