import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import { of } from 'rxjs/observable/of';
import { Country } from '../country';

const COUNTRIES = [
  new Country(1, 'India', 'New Delhi', 'INR'),
  new Country(2, 'China', 'Beijing', 'RMB')
];
let countryList$ = of(COUNTRIES);

@Injectable()
export class CountryService { 
	getCountries(): Observable<Country[]> {
	    return countryList$;
	}
}