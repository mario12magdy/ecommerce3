import { Component, OnDestroy, OnInit } from '@angular/core';
import { ApiDataService } from '../api-data.service';
import { Products } from '../products';
import { OwlOptions } from 'ngx-owl-carousel-o';
import { CartService } from '../cart.service';
import { ToastrService } from 'ngx-toastr';
import { ActivatedRoute } from '@angular/router';
import { ThemeService } from '../theme.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit{
  products:Products[] =[]
  categories:any[] =[]

  constructor(private _ApiDataService:ApiDataService , private _CartService:CartService, private _ToastrService:ToastrService, private _ThemeService:ThemeService){}
  loading:boolean = true;
  darkmode:boolean =this._ThemeService.darkMode

  customOptions: OwlOptions = {
    loop: true,
    mouseDrag: true,
    touchDrag: true,
    pullDrag: false,
    dots: true,
    autoplay:true,
    // slideTransition:"7s",
    navSpeed: 700,
    navText: ['', ''],
    responsive: {
      0: {
        items: 1
      },
      400: {
        items: 2
      },
      740: {
        items: 3
      },
      940: {
        items: 4
      }
    },
    nav: false
  }
  customOptions2: OwlOptions = {
    loop: true,
    mouseDrag: true,
    touchDrag: true,
    pullDrag: false,
    dots: true,
    autoplay:true,
    // slideTransition:"7s",
    navSpeed: 700,
    navText: ['', ''],
    items:1,
    nav: false
  }

  ngOnInit(): void {
    this.loading = true;

    this._ApiDataService.getAllProducts().subscribe({
      next:(response)=>{
        // console.log(response)
        this.products = response.data;
       
        this.loading = false;

      }
    }),
    this._ApiDataService.getCategries().subscribe({
      next:(response)=>{
        this.categories = response.data;
      }
    })

  }
  cartItemsNum:number =0;
 
  addToCart(id:string):void{
    this._CartService.addToCart(id).subscribe({
      next:(response)=>{
        this._CartService.numberOfCartItems.next(response.numOfCartItems)
        console.log(response);
        this._ToastrService.success(response.message)

      }
    })


  }


}
