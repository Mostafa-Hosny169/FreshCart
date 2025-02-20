import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class CartService {

  constructor(private _HttpClient:HttpClient) { }
  
  cartNumber:BehaviorSubject<number> = new BehaviorSubject(0);

  myHeaders:any = {token:localStorage.getItem('_token')} 
  addToCart(id:string):Observable<any>{
    return this._HttpClient.post(`https://ecommerce.routemisr.com/api/v1/cart` ,
      {productId:id}, 
      {headers:this.myHeaders}
      )
  }

  getCartData():Observable<any>{
    return this._HttpClient.get(`https://ecommerce.routemisr.com/api/v1/cart` ,
     {headers:this.myHeaders}
     )
  }

  removeCartItem(id:string):Observable<any>{
    return this._HttpClient.delete(`https://ecommerce.routemisr.com/api/v1/cart/${id}` , {headers:this.myHeaders})
  }

  updateCartItem(id:string , countOfItem:number):Observable<any>{
    return this._HttpClient.put(
      `https://ecommerce.routemisr.com/api/v1/cart/${id}`,
      {count: countOfItem},
      {headers:this.myHeaders}
    )
  }

  clearUserCart():Observable<any>{
    return this._HttpClient.delete(`https://ecommerce.routemisr.com/api/v1/cart` , {headers:this.myHeaders})
  }
}
