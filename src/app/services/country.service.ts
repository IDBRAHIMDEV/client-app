import { Country } from './../models/country';
import { AngularFirestore } from '@angular/fire/firestore';
import { Injectable } from '@angular/core';
import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class CountryService {

  constructor(private afs: AngularFirestore) { }


  getAll() {
    return this.afs.collection('countries').snapshotChanges().pipe(
      map(actions => actions.map(a => {
        const data = a.payload.doc.data() as Country;
        const id = a.payload.doc.id;
        return { id, ...data };
      }))
    );
  }
}
