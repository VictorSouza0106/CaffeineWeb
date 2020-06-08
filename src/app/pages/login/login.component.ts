import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

  form:FormGroup;

  constructor(
    public formBuilder:FormBuilder,
  ) { }

  ngOnInit() {
    this.form = this.formBuilder.group({
      nickname: [],
      password:[],
      comfirmPassword:[]
    }
    )
  }


}
