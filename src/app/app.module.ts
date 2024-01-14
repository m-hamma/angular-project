import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HttpClientModule } from '@angular/common/http';
import { PaysComponent } from './pays/pays.component';
import { HeroesComponent } from './heroes/heroes.component';

import { DetailComponent } from './detail/detail.component';
import { PaysDirective } from './directives/exemple/pays.directive';
import { CountryService } from './country.service';
@NgModule({
  declarations: [
    AppComponent,
    PaysDirective,
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    AppRoutingModule,
    HttpClientModule,
    HeroesComponent,
    DetailComponent,
    PaysComponent,
  ],
  providers: [CountryService],
  bootstrap: [AppComponent]
})
export class AppModule { }
