import { Component,Output, EventEmitter } from '@angular/core';
import { Hero } from '../interfaces/hero';
import {HEROES} from '../mock-heroes';
import {DetailComponent} from '../detail/detail.component';
import {PaysComponent} from '../pays/pays.component';
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
    NgFor,
    DetailComponent,
    PaysComponent,

  ],
})
export class HeroesComponent {
constructor(private router: Router) {}
  heroes = HEROES;
  selected:any;
  result: number = 0;

  selectedHero?: Hero;
  onSelect(hero: Hero): void {
    this.selectedHero = hero;
    this.selectedHero.selected = !this.selectedHero.selected;
    //this.router.navigateByUrl("/detail");
  }
  multiplicate(val: number) {
    this.result = val * 2;
  }
}
