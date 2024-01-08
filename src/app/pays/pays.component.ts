import { Component, Input } from '@angular/core';
import {PaysDirective} from "../directives/exemple/pays.directive";
import { Pays } from '../interfaces/hero';
import {FormsModule} from '@angular/forms';
import {
    /* . . . */
    NgIf
    /* . . . */
  } from '@angular/common';
@Component({
standalone: true,
  selector: 'app-pays',
  templateUrl: './pays.component.html',
  styleUrls: ['./pays.component.scss'],
   imports: [NgIf,
        FormsModule,
      ],
})
export class PaysComponent {
 @Input() pays: Pays;
}
