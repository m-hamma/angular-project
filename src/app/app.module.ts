import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { PaysComponent } from './pays/pays.component';
import { HeroesComponent } from './heroes/heroes.component';

import { DetailComponent } from './detail/detail.component';
import { PaysDirective } from './directives/exemple/pays.directive';
import { CountryService } from './country.service';
import { HomeComponent } from './home/home.component';
import { JwtInterceptor, ErrorInterceptor } from '@app/_helpers';
import {AlertComponent} from './account/alert';
// used to create fake backend
import { fakeBackendProvider } from '@app/_helpers/fake-backend';
import { CartComponent } from './cart/cart.component';
import { AgeComponent } from './age/age.component';
import { PhysiqueComponent } from './physique/physique.component';
import { HistoireComponent } from './histoire/histoire.component';
@NgModule({
  declarations: [
    AppComponent,
    PaysDirective,
    HomeComponent,
    CartComponent,
    AgeComponent,
    PhysiqueComponent,
    HistoireComponent,
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    AppRoutingModule,
    HttpClientModule,
    HeroesComponent,
    DetailComponent,
    PaysComponent,
    AlertComponent
  ],
  providers: [CountryService,
            { provide: HTTP_INTERCEPTORS, useClass: JwtInterceptor, multi: true },
            { provide: HTTP_INTERCEPTORS, useClass: ErrorInterceptor, multi: true },

            // provider used to create fake backend
            fakeBackendProvider
        ],
  bootstrap: [AppComponent]
})
export class AppModule { }
