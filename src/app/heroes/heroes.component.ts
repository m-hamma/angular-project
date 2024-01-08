import { Component } from '@angular/core';
import { Hero } from '../interfaces/hero';
import {HEROES} from '../mock-heroes';
import {DetailComponent} from '../detail/detail.component';
import {FormsModule} from '@angular/forms';
import { Router } from '@angular/router';

import {
    /* . . . */
    NgFor, NgIf, UpperCasePipe
    /* . . . */
  } from '@angular/common';


@Component({
  standalone: true,
  selector: 'app-heroes',
  templateUrl: './heroes.component.html',
  styleUrls: ['./heroes.component.scss'],
  imports: [
    NgIf,
    NgFor,DetailComponent,

  ],
})
export class HeroesComponent {
constructor(private router: Router) {}
  heroes = HEROES;
  selected:any;

  selectedHero?: Hero;
  onSelect(hero: Hero): void {
    this.selectedHero = hero;
    this.selectedHero.selected = !this.selectedHero.selected;
    //this.router.navigateByUrl("/detail");
  }

}
