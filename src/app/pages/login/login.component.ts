import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { MatDialog } from '@angular/material';
import { Router } from '@angular/router';
import { IUser } from './login.interface';
import { TermsDialogComponent } from './terms-dialog/terms-dialog';
import { SessionStorageService } from 'ngx-webstorage';
import { TawkService } from 'src/app/services/tawk.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

  public REGISTER_TYPE = 'register';
  public LOGIN_TYPE = 'login';

  public form: FormGroup;
  public formType: string = this.LOGIN_TYPE;

  hasUser: boolean = true;

  constructor(
    public formBuilder:FormBuilder,
    private dialog: MatDialog,
    public tawkService:TawkService,
    public sessionStorage: SessionStorageService,
    public router: Router,
  ) { }

  ngOnInit() {
    this.initForm();{

    }
  }

  private initForm(){
    this.form = this.formBuilder.group({
      nickname: null,
      email: [null, Validators.required],
      password: [null, Validators.required],
      confirmPassword: null,
      terms: [null, Validators.required],
    })
  }

  public save(){
    if(this.hasUser){
      this.sessionStorage.store('logged-user', this.form.get('email').value);
    }
    else {
      this.sessionStorage.store('logged-user', this.form.get('nickname').value);
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

  public changeFormType(){
    if(this.formType == this.LOGIN_TYPE)
      this.formType = this.REGISTER_TYPE;
    else
      this.formType = this.LOGIN_TYPE;
  }

  public openTerms(){
    const dialogRef = this.dialog.open(TermsDialogComponent);
  }
}
