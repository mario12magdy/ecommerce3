import { Component, OnInit } from '@angular/core';
import { ApiDataService } from '../api-data.service';

@Component({
  selector: 'app-brands',
  templateUrl: './brands.component.html',
  styleUrls: ['./brands.component.css']
})
export class BrandsComponent implements OnInit {
  constructor(private _ApiDataService:ApiDataService){}
  brands:any;
  ngOnInit(): void {
    this._ApiDataService.getbrands().subscribe({
      next:(response)=>{
        this.brands =response.data
        console.log(this.brands);
        

      }
    })
  }
}
