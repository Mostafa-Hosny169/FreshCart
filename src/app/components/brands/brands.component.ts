import { Component, OnInit } from '@angular/core';
import { ApiDataService } from 'src/app/services/api-data.service';

@Component({
  selector: 'app-brands',
  templateUrl: './brands.component.html',
  styleUrls: ['./brands.component.scss']
})
export class BrandsComponent implements OnInit {
  constructor(private _ApiDataService:ApiDataService){}

  brandsData:any[]=[];

  ngOnInit(): void {
      this._ApiDataService.getBrandsData().subscribe({
        next:(Response)=>{
          this.brandsData = Response.data;
          console.log(this.brandsData)
        }
      })

  }
}
