import {Component, OnInit} from '@angular/core';
import {FormBuilder, FormGroup} from '@angular/forms';
import {StoreService} from '../store.service';

@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.scss']
})
export class UserComponent implements OnInit {

  form: FormGroup;

  constructor(private formBuilder: FormBuilder,
              private storeService: StoreService) {
  }

  ngOnInit() {
    this.createForm();
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


}
