import { Component } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { AuthService } from 'src/app/services/auth.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent {
  errMsg!:string ;
  isLoading:boolean = false;

  constructor(private _AuthService:AuthService , private _Router:Router){}

  loginForm:FormGroup = new FormGroup({

    email : new FormControl('' , [
      Validators.required,
      Validators.email
     ]),
    password : new FormControl('' , [
      Validators.required,
      Validators.pattern(/^[a-zA-Z][a-zA-Z0-9]{3,8}$/)
    ]) 

  })

  handleForm(){
    const isValid = this.loginForm.valid;
    const userData = this.loginForm.value;

    if(isValid){
    this.isLoading=true ;
    this._AuthService.loginForm(userData).subscribe({ 

      next:(response)=>{
        if(response.message=='success'){
          localStorage.setItem('_token' , response.token);
          this._Router.navigate(['/home']);
        }
        this.isLoading=false ;
      },

      error:(err)=>{
        this.errMsg = err.error.message;
        this.isLoading=false ;
      },

    })
  }
 }
 
}
