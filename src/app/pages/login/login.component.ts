import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { MatDialog } from '@angular/material';
import { Router } from '@angular/router';
import { IUser } from './login.interface';
import { TermsDialogComponent } from './terms-dialog/terms-dialog';



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

  constructor(
    public formBuilder:FormBuilder,
    private router: Router,
    private dialog: MatDialog,
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

    const data: IUser = {
      id: null,
      nickname: this.form.get('nickname').value,
      email: this.form.get('email').value,
      pass: this.form.get('password').value,
    }

    this.formType == this.LOGIN_TYPE ? this.doLogin(data) : this.doRegister(data);
  }

  private doLogin(data: any){
    console.log("LOGIN");
    this.router.navigateByUrl('home');
  }
  
  private doRegister(data: any){
    console.log("REGISTER");
    this.router.navigateByUrl('home');
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
