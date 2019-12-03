import { Client } from './../../models/client';
import { ClientService } from './../../services/client.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-client-list',
  templateUrl: './client-list.component.html',
  styleUrls: ['./client-list.component.css']
})
export class ClientListComponent implements OnInit {

  myClients: Client[] = [];
  constructor(private clientService: ClientService) { }

  ngOnInit() {
    this.retreiveClientsList();
  }

  retreiveClientsList() {
    this.clientService.getClients()
                      .subscribe((clients: Client[]) => {
                          this.myClients = clients;
                          console.log(clients)
                      })
  }

}
