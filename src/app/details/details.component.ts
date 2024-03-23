import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ApiDataService } from '../api-data.service';
import { Products } from '../products';
import { Product } from '../product';
import { OwlOptions } from 'ngx-owl-carousel-o';
import { CartService } from '../cart.service';

@Component({
  selector: 'app-details',
  templateUrl: './details.component.html',
  styleUrls: ['./details.component.css']
})
export class DetailsComponent implements OnInit{

  
  constructor(private _ActivatedRoute:ActivatedRoute ,private _ApiDataService:ApiDataService, private _CartService:CartService){}
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

  productDetails:Product ={} as Product;
   productId:any;

  ngOnInit(): void {
    this._ActivatedRoute.paramMap.subscribe({
      next:(params)=>{
       this.productId =  params.get("id");

      this._ApiDataService.getProductDetails(this.productId).subscribe({
        next:(response)=>{
          
          this.productDetails = response.data
          console.log(this.productDetails);
          

        }
      })


      }
    })
  }

  addToCart():void{
    this._CartService.addToCart(this.productId).subscribe({
      next:(response)=>{
        console.log(response);
      }
    })
  }
}
