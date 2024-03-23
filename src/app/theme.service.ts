import { Injectable, OnInit } from '@angular/core';
import  * as $ from 'jquery';

@Injectable({
  providedIn: 'root',
})
export class ThemeService  {
   darkMode:any;
   
   constructor(){
    if(localStorage.getItem("isDarkModev") !== null){
      this.darkMode = localStorage.getItem("isDarkModev");      
    }


    
   }

  isDarkMode() {
    return this.darkMode;
  }

  setDarkMode(isDarkModev: any) {
    // this.darkMode = isDarkModev;
   

    if (isDarkModev) {
      document.body.classList.add('dark-theme');
      document.body.classList.add('text-light');
    //   document.getElementById("nav")?.classList.add('dark-theme');
    //   document.getElementById("nav")?.classList.remove('bg-light');
    //  $('#btn').addClass('bg-dark').removeClass('bg-light');
    localStorage.setItem("isDarkModev","true")
    console.log(localStorage.getItem("isDarkModev"));
    

      
    } else {
      document.body.classList.remove('dark-theme');
      document.body.classList.remove('text-light');

      // document.getElementById("nav")?.classList.remove('dark-theme');
      // document.getElementById("nav")?.classList.add('bg-light');
      // $('#btn').removeClass('bg-dark').addClass('bg-light');
      localStorage.setItem("isDarkModev","false")
      console.log(localStorage.getItem("isDarkModev"));



    }
  }
  

}