import { Component, Input, Output, EventEmitter  } from '@angular/core';
import { Hero } from '../interfaces/hero';
import {FormsModule} from '@angular/forms';
import {
    /* . . . */
    NgFor, NgIf, UpperCasePipe
    /* . . . */
  } from '@angular/common';
@Component({
standalone: true,
  selector: 'app-detail',
  templateUrl: './detail.component.html',
  styleUrls: ['./detail.component.scss'],
  imports: [
      FormsModule,
      UpperCasePipe,
    ],
})
export class DetailComponent {
  @Input() selectedHero: Hero;
  n: number = 0;
  @Output() numberChange: EventEmitter<number> = new EventEmitter();
  up() {
    this.n++;
    this.numberChange.emit(this.n);
  }
}
