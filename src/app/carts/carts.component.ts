import { Component, OnInit } from '@angular/core';
import { CartService } from '../cart.service';


@Component({
  selector: 'app-carts',
  templateUrl: './carts.component.html',
  styleUrls: ['./carts.component.css']
})
export class CartsComponent implements OnInit{
  constructor(private _CartService:CartService, ){}
  cartProducts:any;
  cartDetails:any;
  cartId:any;

  ngOnInit(): void {
    this._CartService.getCart().subscribe({
      next:(response)=>{
        this.cartProducts = response.data.products
        this.cartDetails = response.data
        console.log(response.data.products);
       this.cartId = response.data._id

        
      }
    })
    
  }
  removeItem(id:string){
    this._CartService.removeItem(id).subscribe({
      next:(response)=>{
        console.log(response);
        this.cartProducts = response.data.products
        this.cartDetails = response.data
        
      }
    })

  }

  countChange(id:string, count:number){
    if(count > 0){
      this._CartService.updateCart(id,count).subscribe({
        next:(response)=>{
          console.log(response.data);
          this.cartProducts = response.data.products
          
          this.cartDetails = response.data
        }
      })
    }

  }

 


}
