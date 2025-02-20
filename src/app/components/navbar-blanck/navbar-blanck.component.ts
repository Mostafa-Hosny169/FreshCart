import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { CartService } from 'src/app/services/cart.service';
import { WishlistService } from 'src/app/services/wishlist.service';

@Component({
  selector: 'app-navbar-blanck',
  templateUrl: './navbar-blanck.component.html',
  styleUrls: ['./navbar-blanck.component.scss']
})
export class NavbarBlanckComponent implements OnInit {
  constructor(private _Router:Router , private _CartService:CartService , private _WishlistService:WishlistService){}

  cartCount!:number
  hreartCount!:number
  ngOnInit(): void {
      this._CartService.cartNumber.subscribe({
        next:(data)=>{
          this.cartCount = data;
        }
      })

      this._CartService.getCartData().subscribe({
        next:(response)=>{
          this.cartCount =  response.numOfCartItems ;
        }
      })

      this._WishlistService.heartNumber.subscribe({
        next:(data)=>{
          this.hreartCount = data ;
        }
      })

      this._WishlistService.getWishlistData().subscribe({
        next:(response)=>{          
          this.hreartCount =response.count;
        }
      })
  }

  signOut():void{
    localStorage.removeItem('_token');
    this._Router.navigate(['/login'])
  }
}
