import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { PaysComponent } from './pays/pays.component';
import { HeroesComponent } from './heroes/heroes.component';
import { FormsModule } from '@angular/forms';
import { DetailComponent } from './detail/detail.component';
import { PaysDirective } from './directives/exemple/pays.directive';

@NgModule({
  declarations: [
    AppComponent,
    PaysDirective,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HeroesComponent,
    DetailComponent,
    PaysComponent,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
