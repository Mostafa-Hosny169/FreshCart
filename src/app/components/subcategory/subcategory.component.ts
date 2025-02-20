import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ApiDataService } from 'src/app/services/api-data.service';


@Component({
  selector: 'app-subcategory',
  templateUrl: './subcategory.component.html',
  styleUrls: ['./subcategory.component.scss']
})
export class SubcategoryComponent implements OnInit {
  constructor(private _ApiDataService:ApiDataService ,private _ActivatedRoute:ActivatedRoute){}

  subCategoryId!:(string|null);
  subCategories:any[]=[];
  specCategories:any={};

  ngOnInit(): void {

      this._ActivatedRoute.paramMap.subscribe({
        next:(param)=>{
          this.subCategoryId = param.get('id');
        }
      })

      this._ApiDataService.getSpecCategory(this.subCategoryId).subscribe({
        next:(response)=>{
          this.specCategories=response.data; 
          console.log( this.specCategories);
          
        }
      })

      this._ApiDataService.getSubCategories(this.subCategoryId).subscribe({
        next:(response)=>{
          this.subCategories = response.data;
          console.log(this.subCategories);   
        }
      })
      
  }
}
