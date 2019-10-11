import {Component, OnInit} from '@angular/core';
import {FormBuilder, FormGroup} from '@angular/forms';
import {StoreService} from '../store.service';
import {Observable} from 'rxjs';

@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.scss']
})
export class UserComponent implements OnInit {

  form: FormGroup;
  loading = false;
  users: Observable<{}>;
  createUserResult = '';

  constructor(private formBuilder: FormBuilder,
              private storeService: StoreService) {
  }

  ngOnInit() {
    this.createForm();
    this.listUsers();
  }

  createForm() {
    this.form = this.formBuilder.group({
      firstName: [''],
      lastName: [''],
      birthYear: ['']
    });
  }

  createUser() {

    this.loading = true;
    this.createUserResult = '';

    this.storeService.createUser(
      this.form.value.firstName,
      this.form.value.lastName,
      this.form.value.birthYear
    ).then(
      res => {
        console.log('res', res);
        this.createUserResult = res.id;
      },
      err => {
        console.log('err', err);
        this.createUserResult = err;
      }
    ).catch(
      err => {
        console.error('Err', err);
        this.createUserResult = err;
      }
    ).finally(() => {
      console.log('finally');
      this.loading = false;
    });

    // this.store
    //   .collection('users')
    //   .add(user)
    //   .then(res => {
    //     console.log('res', res);
    //   }, err => {
    //     console.log('err', err);
    //   });

  }

  listUsers() {
    this.users = this.storeService.listUsers();

    // this.users.subscribe(
    //   res => {
    //     console.log('users', res);
    //   },
    //   error => {
    //     console.error('Err', error);
    //   }
    // );
  }


}
