import { Client } from './../models/client';
import { Injectable } from '@angular/core';
import { AngularFirestore, AngularFirestoreCollection } from '@angular/fire/firestore';

@Injectable({
  providedIn: 'root'
})
export class ClientService {

  clientCollection: AngularFirestoreCollection;
  constructor(private afs: AngularFirestore) {
    this.clientCollection = afs.collection('clients');
  }

  getClients() {
    return this.clientCollection.valueChanges();
  }

  persistClient(client: Client) {
    return this.clientCollection.add(client);
  }
}
