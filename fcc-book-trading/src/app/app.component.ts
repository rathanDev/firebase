import {Component} from '@angular/core';
// import { AngularFireDatabase, FirebaseListObservable } from 'angularfire2/database';
import {AngularFireDatabase, AngularFireList} from 'angularfire2/database';
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
  public books: Book[];

  constructor(db: AngularFireDatabase) {
    this.books$ = db.list('/books').valueChanges();
  }

}


class Book {
  constructor(public title) {
  }
}
