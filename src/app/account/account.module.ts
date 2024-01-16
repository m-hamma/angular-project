import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LoginComponent } from './login/login.component';
import { LayoutComponent } from './layout/layout.component';
import {AccountRoutingModule} from './account-routing.module';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';

// used to create fake backend
import { RegisterComponent } from './register/register.component';

@NgModule({
  declarations: [
    LoginComponent,
    LayoutComponent,
    RegisterComponent,
  ],
  imports: [
    CommonModule,FormsModule, ReactiveFormsModule,HttpClientModule,
    AccountRoutingModule
  ]

})
export class AccountModule { }
