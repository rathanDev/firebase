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

  users: Observable<{}>;

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
    this.storeService.createUser(
      this.form.value.firstName,
      this.form.value.lastName,
      this.form.value.birthYear
    );
  }

  listUsers() {
    this.users = this.storeService.read();

    this.users.subscribe(
      res => {
        console.log('users', res);
      },
      error => {
        console.error('Err', error);
      }
    );
  }


}
