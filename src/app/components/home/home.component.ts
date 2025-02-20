import { Component, OnInit } from '@angular/core';
import { OwlOptions } from 'ngx-owl-carousel-o';
import { ApiDataService } from 'src/app/services/api-data.service';
import { CartService } from './../../services/cart.service';
import { ToastrService } from 'ngx-toastr';
import { WishlistService } from 'src/app/services/wishlist.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {
  constructor(
    private _ApiDataService:ApiDataService ,
    private _CartService:CartService,
    private _ToastrService:ToastrService,
    private _WishlistService:WishlistService 
     ){}

  term:string = '';

  homeData:any[] = [];
  categoryData!:any[];
  wishListItms:(string|number)[] =[];
  
  ngOnInit(): void {
      this._ApiDataService.getAllProducts().subscribe({
        next:(response)=>{
          this.homeData = response.data;    
        }
      })

      this._ApiDataService.getCategoriesData().subscribe({
        next:(response)=>{
          this.categoryData = response.data;        
        }
      })

      this._WishlistService.getWishlistData().subscribe({
        next:(response)=>{
          const wishlistArr = response.data.map( (item:any)=>item._id )
          this.wishListItms = wishlistArr ;
          console.log(this.wishListItms);  
        }
      })
  }

 
  categorySlider: OwlOptions = {
    loop: true,
    mouseDrag: true,
    touchDrag: true,
    pullDrag: false,
    dots: false,
    navSpeed: 500,
    navText: ['', ''],
    responsive: {
      0: {
        items: 2
      },
      740: {
        items: 4
      },
      940: {
        items: 6
      }
    },
    nav: true
  }

  mainSlider: OwlOptions = {
    loop: true,
    mouseDrag: false,
    touchDrag: false,
    pullDrag: false,
    dots: false,
    navSpeed: 500,
    navText: ['', ''],
    autoplay:true,
    autoplayTimeout:3000,
    autoplaySpeed:1000,
    responsive: {
      0: {
        items: 1
      },
    },
    nav: true
  }

  addProduct(id:string):void{
    this._CartService.addToCart(id).subscribe({
      next:(response)=>{
        this._CartService.cartNumber.next(response.numOfCartItems)
        this._ToastrService.success(response.message)
      }
    })
  }

  addWishlist(id:string):void{
    this._WishlistService.AddToWishlist(id).subscribe({
      next:(response)=>{
        this.wishListItms = response.data;
        this._WishlistService.heartNumber.next( response.data.length);
        this._ToastrService.success(response.message);
        console.log(response.data.length);
        
      }
    })
  }

  removeWishlist(id:string):void{
    this._WishlistService.removeFromWishlist(id).subscribe({
      next:(response)=>{
        this.wishListItms = response.data;
        this._WishlistService.heartNumber.next( response.data.length);
        this._ToastrService.success(response.message);
        console.log(this.wishListItms);    
      }
    })
  }
}
