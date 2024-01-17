import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {DetailComponent} from "./detail/detail.component";
import {AppComponent} from "./app.component";
import { AuthGuard } from './_helpers/auth.guard';
import { HomeComponent } from '@app/home/home.component';
const accountModule = () => import('./account/account.module').then(x => x.AccountModule);

const routes: Routes = [
           { path: '', component: HomeComponent,  canActivate: [AuthGuard]},
           { path: 'detail', component: DetailComponent, canActivate: [AuthGuard] },
           { path: 'account', loadChildren: accountModule },
           { path: '**', redirectTo: '' }
      ];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
