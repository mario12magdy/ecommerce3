import { Component, OnInit } from '@angular/core';
import { ThemeService } from '../theme.service';
import { AuthService } from '../auth.service';
import { Router } from '@angular/router';
import { CartService } from '../cart.service';

@Component({
  selector: 'app-logged-nav',
  templateUrl: './logged-nav.component.html',
  styleUrls: ['./logged-nav.component.css']
})
export class LoggedNavComponent implements OnInit{
  cartItemsNum:number = 0;
  isDarkMode: any;

  constructor(private themeService: ThemeService, private _AuthService:AuthService, private _Router:Router, private _CartService:CartService) {
    this.isDarkMode =localStorage.getItem("isDarkMode");

    this.isDarkMode = this.themeService.isDarkMode();
    _CartService.numberOfCartItems.subscribe({
      next:(x)=>{
        this.cartItemsNum =x;
        console.log( this.cartItemsNum );
        
       
        

      }
    })
  }
  signOut():void{
    this._AuthService.signOut()
  }
  
  links:string[]=["home", "products","categories","brands"]



  toggleTheme(){
    this.isDarkMode = !this.isDarkMode;
    this.themeService.setDarkMode(this.isDarkMode);
  }
  ngOnInit(): void {
  
    this.themeService.setDarkMode(this.isDarkMode);
  }
  
}
