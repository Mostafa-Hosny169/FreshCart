import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class WishlistService {

  constructor(private _HttpClient:HttpClient) { }

  heartNumber:BehaviorSubject<number> = new BehaviorSubject(0);
  myHeader:any = {token:localStorage.getItem('_token')}; 
  baseUrl:string = `https://ecommerce.routemisr.com/api/v1/`

  AddToWishlist(id:string):Observable<any>{
    return this._HttpClient.post(this.baseUrl+`wishlist`,{productId: id} , {headers:this.myHeader})
  }

  removeFromWishlist(id:string):Observable<any>{
    return this._HttpClient.delete(this.baseUrl+`wishlist/${id}` , {headers:this.myHeader})
  }

  getWishlistData():Observable<any>{
    return this._HttpClient.get(this.baseUrl+`wishlist` , {headers:this.myHeader})
  }
}
