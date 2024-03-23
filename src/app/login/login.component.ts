import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { Component } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { AuthService } from '../auth.service';
import { Router } from '@angular/router';
import { ThemeService } from '../theme.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {
  loading:boolean = false
  errorMsg:string ='';
  constructor(private _ThemeService:ThemeService, private _AuthService:AuthService , private _Router:Router, private _FormBuilder:FormBuilder) {}
    isDark = this._ThemeService.darkMode
    
  // loginForm: FormGroup = new FormGroup({
    
  //   email: new FormControl('', [Validators.required, Validators.email]),
  //   password: new FormControl('', [Validators.required, Validators.pattern(/^[A-Z][a-z0-9]{6,20}$/), Validators.minLength(6)]),
    
  // });
 loginForm:FormGroup = this._FormBuilder.group({
  email:[null, [Validators.required, Validators.email]],
  password:[null , [Validators.required, Validators.pattern(/^[A-Z][a-z0-9]{6,20}$/), Validators.minLength(6)]]
 })

  handleForm():void {
    
    
    
      if(this.loginForm.valid){
        this.loading = true
        this._AuthService.setLogin(this.loginForm.value).subscribe({
          next: (response) => {
            console.log(response)
            this.loading = false
            if(response.message == 'success'){
              this._Router.navigate(['/home'])
              localStorage.setItem('eToken',response.token)
  
  
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
        // console.log(this.isDark);
        this.loginForm.markAllAsTouched()
      }
    

  }
}
