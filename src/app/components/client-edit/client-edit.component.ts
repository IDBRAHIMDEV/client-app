import { Client } from './../../models/client';
import { ClientService } from './../../services/client.service';
import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-client-edit',
  templateUrl: './client-edit.component.html',
  styleUrls: ['./client-edit.component.css']
})
export class ClientEditComponent implements OnInit {

  clientForm = new FormGroup({
    firstName: new FormControl('', [Validators.required, Validators.minLength(3)]),
    lastName: new FormControl('', [Validators.required]),
    phone: new FormControl('', [Validators.required]),
    email: new FormControl('', [Validators.required, Validators.email]),
    balance: new FormControl(0, [Validators.required]),
    address: new FormControl('')
  });
  
  constructor(private router: Router, private route: ActivatedRoute, private clientService: ClientService) { }

  myId: string = '';
  ngOnInit() {
    //let id = this.route.snapshot.params.id;
     this.route.params.subscribe(params => {
       this.myId = params.id;
        this.clientService.getOne(params.id).subscribe((client: Client) => {
          this.clientForm.patchValue(client)
        })
     })
  }

  updateClient() {

    let updateMyClient: Client = {
      ...this.clientForm.value,
      id: this.myId
    } 

    this.clientService.update(updateMyClient)
        .then(() => this.router.navigate(['/']))
        .catch((err) => console.error(err))
  }

}
