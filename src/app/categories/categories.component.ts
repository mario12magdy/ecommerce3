import { Component, OnInit } from '@angular/core';
import { ApiDataService } from '../api-data.service';

@Component({
  selector: 'app-categories',
  templateUrl: './categories.component.html',
  styleUrls: ['./categories.component.css']
})
export class CategoriesComponent implements OnInit{
  constructor(private _ApiDataService:ApiDataService){}
  categories:any;
  ngOnInit(): void {
    this._ApiDataService.getCategries().subscribe({
      next:(response)=>{
        this.categories =response.data
        console.log(this.categories);
        

      }
    })
  }
}
