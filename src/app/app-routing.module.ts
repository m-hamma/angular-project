import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {DetailComponent} from "./detail/detail.component";
import {AppComponent} from "./app.component";

const routes: Routes = [
          { path: '', component: AppComponent, },
          { path: 'detail', component: DetailComponent },
      ];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
