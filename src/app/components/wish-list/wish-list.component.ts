import { Component, OnInit } from '@angular/core';
import { WishlistService } from 'src/app/services/wishlist.service';
import { CartService } from './../../services/cart.service';
import { ToastrService } from 'ngx-toastr';
import { Router } from '@angular/router';

@Component({
  selector: 'app-wish-list',
  templateUrl: './wish-list.component.html',
  styleUrls: ['./wish-list.component.scss']
})
export class WishListComponent implements OnInit{

constructor(
  private _WishlistService:WishlistService ,
   private _CartService:CartService,
   private _ToastrService:ToastrService,
   private _Router:Router
   ){}

  wishlistData:any[]=[];
  wishListItms:string[] =[] ;


  ngOnInit(): void {
    this._WishlistService.getWishlistData().subscribe({
      next:(response)=>{
         this.wishlistData = response.data;
         const wishlistArr = response.data.map( (item:any)=>item._id )
        this.wishListItms = wishlistArr ;
        console.log(this.wishlistData);  
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

  removeWishlist(id:string):void{
    this._WishlistService.removeFromWishlist(id).subscribe({
      next:(response)=>{
        this.wishListItms = response.data;
        this._WishlistService.heartNumber.next( response.data.length);
        const newWishlist = this.wishlistData.filter( (item)=> this.wishListItms.includes(item._id) );
        this.wishlistData = newWishlist;
        this._ToastrService.success(response.message);


        console.log('old' , this.wishlistData);
        console.log('new' , newWishlist);
            
      }
    })
  }

  toHome():void{
    this._Router.navigate(['/home'])
  }

}
