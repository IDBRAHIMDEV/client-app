import { Country } from './../../models/country';
import { CountryService } from './../../services/country.service';
import { AuthService } from './../../services/auth.service';
import { FormGroup, Validators, FormControl } from '@angular/forms';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {

  registerForm = new FormGroup({
    firstName: new FormControl(null),
    lastName: new FormControl(null),
    gender: new FormControl('male'),
    country: new FormControl(null),
    email: new FormControl(null, [Validators.required, Validators.email]),
    password: new FormControl(null, [Validators.required])
  });

  countries: Country[] = [];

  constructor(private authService: AuthService, private countryService: CountryService) { }

  ngOnInit() {
     this.countryService.getAll().subscribe(countries => this.countries = countries)
  }

  register() {

    if(this.registerForm.invalid) {
      return false;
    }

    this.authService.createAccount(this.registerForm.value)
        .then((res) => console.log('success', res))
        .catch((err) => console.error('error', err))
  }

}
