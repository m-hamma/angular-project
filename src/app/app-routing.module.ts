import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {DetailComponent} from "./detail/detail.component";
import {AppComponent} from "./app.component";
import { AuthGuard } from './_helpers/auth.guard';
import { HomeComponent } from '@app/home/home.component';
import { CartComponent } from '@app/cart/cart.component';

const accountModule = () => import('./account/account.module').then(x => x.AccountModule);
const usersModule = () => import('./users/users.module').then(x => x.UsersModule);

const routes: Routes = [
           { path: '', component: HomeComponent,  canActivate: [AuthGuard]},
           { path: 'cart', component: CartComponent,  canActivate: [AuthGuard]},
           { path: 'detail', component: DetailComponent, canActivate: [AuthGuard] },
           { path: 'users', loadChildren: usersModule, canActivate: [AuthGuard] },
           { path: 'account', loadChildren: accountModule },
           { path: '**', redirectTo: '' }
      ];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
