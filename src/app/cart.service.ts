import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class CartService {
  numberOfCartItems = new BehaviorSubject(0);

  constructor(private _HttpClient:HttpClient) { 
    this.getLoggedUserCart().subscribe({
      next:(response)=>{
        this.numberOfCartItems.next(response.numOfCartItems)
        console.log(response);
      }
    })
   }

   getLoggedUserCart():Observable<any>{
    return this._HttpClient.get(`https://ecommerce.routemisr.com/api/v1/cart`,
    
    {headers:this.headers}

    )

   }

  headers:any = {token : localStorage.getItem('eToken')}

  addToCart(productID:string):Observable<any>{
    return this._HttpClient.post(`https://ecommerce.routemisr.com/api/v1/cart`,
    {"productId": productID},
    {headers:this.headers}
    )

  }
  getCart():Observable<any>{
    return this._HttpClient.get(`https://ecommerce.routemisr.com/api/v1/cart`,
    {headers:this.headers}
    )

  }

  removeItem(id:string):Observable<any>{
    return this._HttpClient.delete(`https://ecommerce.routemisr.com/api/v1/cart/${id}`,
    {headers: this.headers}
    )
  }
  updateCart(productID:string, newCount:number):Observable<any>{
    return this._HttpClient.put(`https://ecommerce.routemisr.com/api/v1/cart/${productID}`,
    {count:newCount},
    {headers:this.headers}
    )

  }

  onlineCheckOut(cartID:string, shippingInfo:any):Observable<any>{
    return this._HttpClient.post(`https://ecommerce.routemisr.com/api/v1/orders/checkout-session/${cartID}?url=http://localhost:4200`,
    {"shippingInfo": shippingInfo},
    {headers:this.headers}
    )

  }
}
