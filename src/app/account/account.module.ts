import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LoginComponent } from './login/login.component';
import { LayoutComponent } from './layout/layout.component';
import {AccountRoutingModule} from './account-routing.module';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { JwtInterceptor, ErrorInterceptor } from '@app/_helpers';

// used to create fake backend
import { fakeBackendProvider } from '@app/_helpers';
import { RegisterComponent } from './register/register.component';

@NgModule({
  declarations: [
    LoginComponent,
    LayoutComponent,
    RegisterComponent
  ],
  imports: [
    CommonModule,FormsModule, ReactiveFormsModule,HttpClientModule,
    AccountRoutingModule
  ],
   providers: [
          { provide: HTTP_INTERCEPTORS, useClass: JwtInterceptor, multi: true },
          { provide: HTTP_INTERCEPTORS, useClass: ErrorInterceptor, multi: true },

          // provider used to create fake backend
          fakeBackendProvider
      ],

})
export class AccountModule { }
