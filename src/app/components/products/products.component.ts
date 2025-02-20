import { Component, OnInit } from '@angular/core';
import { ToastrService } from 'ngx-toastr';
import { ApiDataService } from 'src/app/services/api-data.service';
import { CartService } from 'src/app/services/cart.service';
import { ProductService } from 'src/app/services/product.service';
import { WishlistService } from 'src/app/services/wishlist.service';

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.scss']
})
export class ProductsComponent implements OnInit {

  constructor(
    private _ProductService:ProductService,
    // private _ApiDataService:ProductService ,
    private _CartService:CartService,
    private _ToastrService:ToastrService,
    private _WishlistService:WishlistService 
     ){}

     pageSize!:number ;
     currentPag!:number ;
     total!:number ;

     term:string = '';

     homeData:any[] = [];
     wishListItms:(string|number)[] =[];

  ngOnInit(): void {
    this._ProductService.getAllProducts().subscribe({
      next:(response)=>{
        this.homeData = response.data;  
        this.pageSize = response.metadata.limit;
        this.currentPag = response.metadata.currentPage;
        this.total = response.results;  
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

  addProduct(id:string):void{
    this._CartService.addToCart(id).subscribe({
      next:(response)=>{
        this._CartService.cartNumber.next(response.numOfCartItems)
        this._ToastrService.success(response.message)
        console.log(response);
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

  pageChanged(event:any):void{
    this._ProductService.getAllProducts(event).subscribe({
      next:(response)=>{
        this.homeData = response.data;  
        this.pageSize = response.metadata.limit;
        this.currentPag = response.metadata.currentPage;
        this.total = response.results;  
      }
    })
  }
     
}
