import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { Router } from '@angular/router';
import { SessionStorageService } from 'ngx-webstorage';
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
    public sessionStorage: SessionStorageService,
    public router: Router,
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

  save(){
    if(this.hasUser){
      this.sessionStorage.store('logged-user', this.loginForm.get('email').value);
    }
    else {
      this.sessionStorage.store('logged-user', this.registerform.get('nickname').value);
    }

    this.router.navigateByUrl('home');
  }

  register(){
    if(this.hasUser){
      this.hasUser = false;
    }
    else {
      this.hasUser = true;
    }

  }


}
