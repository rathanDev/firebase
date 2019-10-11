import {Injectable} from '@angular/core';

// import { AngularFireDatabase, FirebaseListObservable } from 'angularfire2/database';
import {AngularFireDatabase, AngularFireList} from 'angularfire2/database';
import {AngularFirestore} from '@angular/fire/firestore';
import {Observable} from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class StoreService {

  db: AngularFireDatabase;
  store: AngularFirestore;

  // public books$$: AngularFireList<Book[]>;
  // public books$: Observable<{}>;
  // public anys: {};

  constructor(db: AngularFireDatabase,
              store: AngularFirestore) {

    // this.books$ = db.list('/users').valueChanges();
    // this.books$ = db.list('/oct10project').valueChanges();

  }

  createUser(firstName: string,
             lastName: string,
             birthYear: string) {

    const user = {
      first: firstName,
      last: lastName,
      born: birthYear
    };

    console.log('user', user);

    this.store
      .collection('users')
      .add(user)
      .then(res => {
        console.log('res', res);
      }, err => {
        console.log('err', err);
      });
  }

  read() {
    this.store
      .collection('users')
      .valueChanges()
      .subscribe(res => {
        console.log('Res', res);
      }, err => {
        console.error('Err', err);
      });
  }

}
