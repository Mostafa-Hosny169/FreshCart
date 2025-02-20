import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ApiDataService } from 'src/app/services/api-data.service';

@Component({
  selector: 'app-specificbrand',
  templateUrl: './specificbrand.component.html',
  styleUrls: ['./specificbrand.component.scss']
})
export class SpecificbrandComponent implements OnInit {
  constructor(private _ApiDataService:ApiDataService , private _ActivatedRoute:ActivatedRoute){}

  brandId!:any ;
  specBrandData:any={};

  ngOnInit(): void {
      this._ActivatedRoute.paramMap.subscribe({
        next:(param)=>{
          this.brandId = param.get('id');
        }
      })

      this._ApiDataService.getBrandDetails(this.brandId).subscribe({
        next:(response)=>{
          this.specBrandData = response.data;
        }
      })
  }
}
