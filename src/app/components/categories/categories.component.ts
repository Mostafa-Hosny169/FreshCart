import { Component, OnInit } from '@angular/core';
import { ApiDataService } from 'src/app/services/api-data.service';

@Component({
  selector: 'app-categories',
  templateUrl: './categories.component.html',
  styleUrls: ['./categories.component.scss']
})
export class CategoriesComponent implements OnInit {
  constructor(private _ApiDataService:ApiDataService){}

  categoriesData:any[] = [] ;

  ngOnInit(): void {
      this._ApiDataService.getCategor().subscribe({
        next:(response)=>{
          this.categoriesData = response.data;
        }
      })
  }
}
