import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { Component } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { AuthService } from '../auth.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent {
  loading:boolean = false
  errorMsg:string ='';
  constructor(private _AuthService:AuthService , private _Router:Router, private _FormBuilder:FormBuilder ) {}
  registerForm:FormGroup = this._FormBuilder.group({
    name:[null, [Validators.required, Validators.minLength(3), Validators.maxLength(20)]],
    email:[null , [Validators.required, Validators.email]],
    password:[null, [Validators.required, Validators.pattern(/^[A-Z][a-z0-9]{6,20}$/), Validators.minLength(6)]],
    rePassword:[null, [Validators.required, Validators.pattern(/^[A-Z][a-z0-9]{6,20}$/), Validators.minLength(6)]],
    phone:[null, [Validators.required, Validators.pattern(/^01[0125][0-9]{8}$/)]]

  })
  // registerForm: FormGroup = new FormGroup({
  //   name: new FormControl('', [Validators.required, Validators.minLength(3), Validators.maxLength(20)]),
  //   email: new FormControl('', [Validators.required, Validators.email]),
  //   password: new FormControl('', [Validators.required, Validators.pattern(/^[A-Z][a-z0-9]{6,20}$/), Validators.minLength(6)]),
  //   rePassword: new FormControl('', [Validators.required, Validators.pattern(/^[A-Z][a-z0-9]{6,20}$/), Validators.minLength(6)]),
  //   phone: new FormControl('', [Validators.required, Validators.pattern(/^01[0125][0-9]{8}$/)]),
  // });

  handleForm():void {
      if(this.registerForm.valid){
        this.loading = true
        this._AuthService.setRegister(this.registerForm.value).subscribe({
          next: (response) => {
            console.log(response)
            this.loading = false
            if(response.message == 'success'){
              this._Router.navigate(['/login'])
  
  
            }
          },
          error: (err:HttpErrorResponse) => {
         
            this.errorMsg = err.error.message;
            console.log(this.errorMsg);
            
            this.loading = false
  
          }
        })
  

      }
      else{

        this.registerForm.markAllAsTouched()
        
      }
    

  }
}
