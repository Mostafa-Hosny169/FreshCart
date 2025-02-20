import { Component, OnInit, Renderer2 } from '@angular/core';
import { Router } from '@angular/router';
import { CartService } from 'src/app/services/cart.service';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.scss']
})
export class CartComponent implements OnInit {
  constructor(private _CartService:CartService , private _Router:Router , private _Renderer2:Renderer2){}

  cartProducts:any = null;
  ngOnInit(): void {
      this._CartService.getCartData().subscribe({
        next:(response)=>{
          if(response.numOfCartItems != 0){
              this.cartProducts = response.data;  
              console.log(response.numOfCartItems);
          }
        }
      })
  }

  removeItem(id:string , element:HTMLButtonElement):void{
    this._Renderer2.setAttribute(element , 'disabled' , 'true');

    this._CartService.removeCartItem(id).subscribe({
      next:(response)=>{
        this._Renderer2.removeAttribute(element , 'disabled');
        this._CartService.cartNumber.next(response.numOfCartItems);
        this.cartProducts = response.data
        if(response.numOfCartItems == 0){
          this.cartProducts = null ;
        }  
      },

      error:(err)=>{
        this._Renderer2.removeAttribute(element , 'disabled');
      }

    })
  }

  updateItem(id:string , countOfItem:number , element:HTMLButtonElement ):void{

    if(countOfItem >= 1){
      this._Renderer2.setAttribute(element , 'disabled' , 'true');
      this._CartService.updateCartItem(id , countOfItem).subscribe({
        next:(response)=>{
          this.cartProducts = response.data;
          this._Renderer2.removeAttribute(element , 'disabled');
        },
  
        error:(err)=>{
          this._Renderer2.removeAttribute(element , 'disabled');
        }   
      })
    }
    
  }

  clearCart():void{  
    this._CartService.clearUserCart().subscribe({
      next:(response)=>{ 
        if(response.message == 'success'){
          this.cartProducts = null;
          this._CartService.cartNumber.next(0);
        }
      },
    })
  }

  toHome():void{
    this._Router.navigate(['/home'])
  }

}
