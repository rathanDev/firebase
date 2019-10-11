import {Component, OnInit} from '@angular/core';
import {Observable} from 'rxjs';
import {FormBuilder, FormGroup} from '@angular/forms';
import {StoreService} from './store.service';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {

  title = 'Firebase CRUD experiment';

  constructor() {


    const data = {
      type: 'coffee1',
      price: 3
    };

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

  }

  ngOnInit() {



  }



}


class Book {
  constructor(public title) {
  }
}
