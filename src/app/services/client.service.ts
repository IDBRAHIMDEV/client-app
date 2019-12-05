import { AuthService } from './auth.service';
import { Client } from './../models/client';
import { Injectable } from '@angular/core';
import { AngularFirestore, AngularFirestoreCollection } from '@angular/fire/firestore';
import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class ClientService {

  clientCollection: AngularFirestoreCollection;
  constructor(private afs: AngularFirestore, private authService: AuthService) {}

  getClients(userId: string) {

    return this.afs.collection('clients', ref => ref.where('userId', '==', userId))
               .snapshotChanges().pipe(
                  map(actions => actions.map(a => {
                    const data = a.payload.doc.data() as Client;
                    const id = a.payload.doc.id;
                    return { id, ...data };
                  }))
                );
  }

  persistClient(client: Client) {
    return this.clientCollection.add(client);
  }

  getOne(id: string) {
    return this.clientCollection.doc(id).valueChanges();
  }

  update(client: Client) {
    return this.clientCollection.doc(client.id).update(client);
  }
}
