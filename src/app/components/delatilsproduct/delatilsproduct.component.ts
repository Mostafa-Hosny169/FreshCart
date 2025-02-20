import { Component, OnInit, Renderer2 } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { OwlOptions } from 'ngx-owl-carousel-o';
import { ToastrService } from 'ngx-toastr';
import { ApiDataService } from 'src/app/services/api-data.service';
import { CartService } from 'src/app/services/cart.service';
import { WishlistService } from 'src/app/services/wishlist.service';

@Component({
  selector: 'app-delatilsproduct',
  templateUrl: './delatilsproduct.component.html',
  styleUrls: ['./delatilsproduct.component.scss']
})
export class DelatilsproductComponent implements OnInit {
  constructor(
    private _ActivatedRoute:ActivatedRoute ,
    private _ApiDataService:ApiDataService ,
    private _CartService:CartService ,
    private _Renderer2:Renderer2 ,
    private _ToastrService:ToastrService,
    private _WishlistService:WishlistService
     ){}

  
  proudctDetalisID:any ;
  proudctDetalisData:any={} ;
  wishListItms:string[] =[] ;

  ngOnInit(): void {
      this._ActivatedRoute.paramMap.subscribe({
        next:(params)=>{
          this.proudctDetalisID = params.get('id'); 
        }
      })

      this._ApiDataService.getProductsDetails(this.proudctDetalisID).subscribe({
        next:(response)=>{
          this.proudctDetalisData = response.data;    
        }
      })

      this._WishlistService.getWishlistData().subscribe({
        next:(response)=>{
          const wishlistArr = response.data.map( (item:any)=>item._id )
          this.wishListItms = wishlistArr ;  
        }
      })
  }

  productDetialSlider: OwlOptions = {
    loop: true,
    mouseDrag: true,
    touchDrag: true,
    pullDrag: false,
    dots: true,
    navSpeed: 500,
    navText: ['', ''],
    responsive: {
      0: {
        items: 1
      },
      400: {
        items: 1
      },
      740: {
        items: 1
      },
      940: {
        items: 1
      }
    },
    // nav: true
  }

  addProduct(element:HTMLButtonElement):void{
    this._Renderer2.setAttribute(element , 'disabled' , 'true');

    this._CartService.addToCart(this.proudctDetalisID).subscribe({

      next:(response)=>{  
        this._CartService.cartNumber.next(response.numOfCartItems);
        this._Renderer2.removeAttribute(element , 'disabled');
        this._ToastrService.success(response.message)
      },

      error:()=>{
        this._Renderer2.removeAttribute(element , 'disabled');
      }

    })
  }

  addWishlist(id:string):void{
    this._WishlistService.AddToWishlist(id).subscribe({
      next:(response)=>{
        this.wishListItms = response.data;
        this._WishlistService.heartNumber.next( response.data.length);
        this._ToastrService.success(response.message);   
      }
    })
  }

  removeWishlist(id:string):void{
    this._WishlistService.removeFromWishlist(id).subscribe({
      next:(response)=>{
        this.wishListItms = response.data;
        this._WishlistService.heartNumber.next( response.data.length);
        this._ToastrService.success(response.message);    
      }
    })
  }
}
