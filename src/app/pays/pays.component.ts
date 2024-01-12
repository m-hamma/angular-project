import { Component, Input } from '@angular/core';
import {PaysDirective} from "../directives/exemple/pays.directive";
import { Pays } from '../interfaces/hero';
import {FormsModule} from '@angular/forms';
import { CountryService } from '../country.service';
import { Country } from '../interfaces/country';
import {
    /* . . . */
    NgFor, NgIf
    /* . . . */
  } from '@angular/common';
@Component({
standalone: true,
  selector: 'app-pays',
  templateUrl: './pays.component.html',
  styleUrls: ['./pays.component.scss'],
   imports: [
   NgFor,
   NgIf,
        FormsModule,
      ],
})
export class PaysComponent {
 @Input() pays: Pays;

 constructor(private service: CountryService) {this.setCountries();}
countries:Country[];

setCountries() {
    this.countries=this.service.getCountries();
  }
   onSelect(country: Country): void {
      this.pays.name = country.name;
    }
}
