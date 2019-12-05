import { AuthService } from './../../services/auth.service';
import { ClientService } from './../../services/client.service';
import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-client-add',
  templateUrl: './client-add.component.html',
  styleUrls: ['./client-add.component.css']
})
export class ClientAddComponent implements OnInit {

  clientForm = new FormGroup({
    firstName: new FormControl('', [Validators.required, Validators.minLength(3)]),
    lastName: new FormControl('', [Validators.required]),
    phone: new FormControl('', [Validators.required]),
    email: new FormControl('', [Validators.required, Validators.email]),
    balance: new FormControl(0, [Validators.required]),
    address: new FormControl('')
  });

  constructor(
    private authService: AuthService,
    private clientService: ClientService, 
    private router: Router) { }

  ngOnInit() {
  }

  saveClient() {

    if(this.clientForm.invalid) {
      return false;
    }

    this.authService.authenticatedUser().subscribe(user => {
      let client = {
        ...this.clientForm.value,
        userId: user.uid
      }
  
      this.clientService.persistClient(client)
          .then((res) => {
            this.router.navigate(['/clients'])
          })
          .catch((err) => console.error(err))
    })
    
  }

}
