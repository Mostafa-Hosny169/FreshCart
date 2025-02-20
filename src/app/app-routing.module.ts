import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './components/home/home.component';
import { ProductsComponent } from './components/products/products.component';
import { CategoriesComponent } from './components/categories/categories.component';
import { BrandsComponent } from './components/brands/brands.component';
import { CartComponent } from './components/cart/cart.component';
import { LoginComponent } from './components/login/login.component';
import { registerLocaleData } from '@angular/common';
import { RegesterComponent } from './components/regester/regester.component';
import { NotfoundComponent } from './components/notfound/notfound.component';
import { BlankLayoutComponent } from './layouts/blank-layout/blank-layout.component';
import { AuthLayoutComponent } from './layouts/auth-layout/auth-layout.component';
import { WishListComponent } from './components/wish-list/wish-list.component';
import { authGuard } from './auth.guard';
import { DelatilsproductComponent } from './components/delatilsproduct/delatilsproduct.component';
import { blankGuard } from './blank.guard';
import { SpecificbrandComponent } from './components/specificbrand/specificbrand.component';
import { SubcategoryComponent } from './components/subcategory/subcategory.component';

const routes: Routes = [

  {path:'' , canActivate:[authGuard] , component:BlankLayoutComponent , children:[
    {path:'' , redirectTo:'home' , pathMatch:'full'},
  {path:'home' , component:HomeComponent},
  {path:'details/:id' , component:DelatilsproductComponent},
  {path:'products' , component:ProductsComponent},
  {path:'categories' , component:CategoriesComponent},
  {path:'subcategories/:id' , component:SubcategoryComponent},
  {path:'brands' , component:BrandsComponent},
  {path:'specificbrand/:id' , component:SpecificbrandComponent},
  {path:'cart' , component:CartComponent},
  {path:'wishlist' , component:WishListComponent},
  ]}, 

  {path:'' , canActivate:[blankGuard] , component:AuthLayoutComponent , children:[
    {path:'login' , component:LoginComponent},
    {path:'regester' , component:RegesterComponent},
  ]},

  {path:'**' , component:NotfoundComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
exports: [RouterModule]
})
export class AppRoutingModule { }
