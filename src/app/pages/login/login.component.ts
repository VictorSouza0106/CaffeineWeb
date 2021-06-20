import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { TawkService } from 'src/app/services/tawk.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

  registerform:FormGroup;
  loginForm:FormGroup;

  hasUser:boolean = true;

  constructor(
    public formBuilder:FormBuilder,
    public tawkService:TawkService,
  ) { }

  ngOnInit() {

    this.tawkService.SetChatVisibility(true);

    this.loginForm = this.formBuilder.group({
      email:[],
      password:[],
    })

    this.registerform = this.formBuilder.group({
      nickname: [],
      email:[],
      password:[],
      comfirmPassword:[]
    })
  }

  register(){
    if(this.hasUser)
    this.hasUser = false;
    else
    this.hasUser = true;
  }


}
