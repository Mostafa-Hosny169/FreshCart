import { Component } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { AuthService } from 'src/app/services/auth.service';

@Component({
  selector: 'app-regester',
  templateUrl: './regester.component.html',
  styleUrls: ['./regester.component.scss']
})
export class RegesterComponent  {
  errMsg!:string;
  isLoading:boolean = false;
  constructor(private _AuthService:AuthService ,private _Router:Router){}

  registerForm:FormGroup = new FormGroup({
    name : new FormControl('' , [
      Validators.required,
      Validators.minLength(3),
      Validators.maxLength(10)
    ]), 

    email : new FormControl('' , [
      Validators.required,
      Validators.email
    ]), 

    password : new FormControl('' , [
      Validators.required,
      Validators.pattern(/^[a-zA-Z][a-zA-Z0-9]{5,8}$/)
    ]), 

    rePassword : new FormControl('' , [
      Validators.required,
      Validators.pattern(/^[a-zA-Z][a-zA-Z0-9]{5,8}$/)
    ]
    ), 

    phone : new FormControl('' , [
      Validators.required,
      Validators.pattern(/^\+?[0-9]{7,14}$/)
    ]), 

  });

  handleForm(){
  this.isLoading = true ;
  const isValid = this.registerForm.valid;
  const userData = this.registerForm.value;

    if(isValid){
      this._AuthService.registerForm(userData).subscribe({

        next:(response)=>{
          if(response.message == 'success'){
            this._Router.navigate( ['/login'] );
            this.isLoading = false ;
          }
        },
  
        error:(err)=>{
          this.errMsg = err.error.message ;
          console.log(this.errMsg);
          
          this.isLoading = false ;
        }
  
       })
    }
     
  }     

}


