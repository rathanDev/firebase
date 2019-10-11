import {Component} from '@angular/core';
// import { AngularFireDatabase, FirebaseListObservable } from 'angularfire2/database';
import {AngularFireDatabase, AngularFireList} from 'angularfire2/database';
import {AngularFirestore} from '@angular/fire/firestore';
import {Observable} from 'rxjs';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {

  title = 'fcc-book-trading';

  public books$$: AngularFireList<Book[]>;
  public books$: Observable<{}>;
  public anys: {};

  constructor(db: AngularFireDatabase, store: AngularFirestore) {
    this.books$ = db.list('/users').valueChanges();
    // this.books$ = db.list('/oct10project').valueChanges();

    const data = {
      type: 'coffee1',
      price: 3
    };

    // store
    //   .collection('users')
    //   .add(data)
    //   .then(res => {
    //     console.log('res', res);
    //   }, err => {
    //     console.log('err', err);
    //   });

/*    store
      .collection('users')
      .snapshotChanges()
      .subscribe(
        (res) => {
          console.log('res', res);
          this.anys = res;
        },
        err => {
          console.log('err', err);
        }
      );*/

    store
      .collection('users')
      .valueChanges()
      .subscribe(res => {
        console.log('Res', res);
        this.anys = res;
      }, err => {
        console.error('Err', err);
      });

  }

}


class Book {
  constructor(public title) {
  }
}
