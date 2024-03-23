import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { AuthService } from '../auth.service';
import { ActivatedRoute, Router } from '@angular/router';
import { CartService } from '../cart.service';

@Component({
  selector: 'app-shipping',
  templateUrl: './shipping.component.html',
  styleUrls: ['./shipping.component.css']
})
export class ShippingComponent implements OnInit {

  loading: boolean = false
  errorMsg: string = '';

  cartId: any = '';
  constructor(private _AuthService: AuthService, private _Router: Router, private _FormBuilder: FormBuilder, private _ActivatedRoute: ActivatedRoute, private _CartService: CartService) { }


  shippingForm: FormGroup = this._FormBuilder.group({
    details: [null, [Validators.required]],

    phone: [null, [Validators.required, Validators.pattern(/^01[0125][0-9]{8}$/)]],

    city: [null, [Validators.required]],


  })

  ngOnInit(): void {
    this._ActivatedRoute.paramMap.subscribe({
      next: (params) => {
        console.log(params.get('id'));
        this.cartId = params.get('id')


      }
    })

  }


  handleForm() {
    if(this.shippingForm.valid){
      this._CartService.onlineCheckOut(this.cartId, this.shippingForm.value).subscribe({
        next: (response) => {
          console.log(response);
          //response.session.url
          window.open(response.session.url, "_self")
  
  
        }
      })
  
      
    }
  }

}

