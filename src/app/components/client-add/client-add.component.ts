import { ClientService } from './../../services/client.service';
import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-client-add',
  templateUrl: './client-add.component.html',
  styleUrls: ['./client-add.component.css']
})
export class ClientAddComponent implements OnInit {

  clientForm = new FormGroup({
    firstName: new FormControl(''),
    lastName: new FormControl(''),
    phone: new FormControl(''),
    email: new FormControl(''),
    balance: new FormControl(0),
    address: new FormControl('')
  })

  constructor(private clientService: ClientService, private router: Router) { }

  ngOnInit() {
  }

  saveClient() {
    this.clientService.persistClient(this.clientForm.value)
        .then((res) => {
          this.router.navigate(['/clients'])
        })
        .catch((err) => console.error(err))
  }

}
