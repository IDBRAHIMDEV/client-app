import { AuthService } from './../../services/auth.service';
import { Client } from './../../models/client';
import { ClientService } from './../../services/client.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-client-list',
  templateUrl: './client-list.component.html',
  styleUrls: ['./client-list.component.css']
})
export class ClientListComponent implements OnInit {

  total: number = 0;

  myClients: Client[] = [];
  constructor(private clientService: ClientService, private authService: AuthService) { }

  ngOnInit() {
    this.retreiveClientsList();
  }

  retreiveClientsList() {

    this.authService.authenticatedUser().subscribe(user => {
       this.clientService.getClients(user.uid)
                      .subscribe((clients: Client[]) => {
                          this.myClients = clients;
                          this.totalBalance();
                          console.log(clients)
                      })
    }) 

   
  }

  totalBalance() {
    this.total = this.myClients.reduce((accum, client) => {
      return accum + +client.balance
    }, 0)
  }

}
