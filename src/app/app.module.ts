import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './components/home/home.component';
import { ProductsComponent } from './components/products/products.component';
import { BrandsComponent } from './components/brands/brands.component';
import { CategoriesComponent } from './components/categories/categories.component';
import { LoginComponent } from './components/login/login.component';
import { RegesterComponent } from './components/regester/regester.component';
import { FooterComponent } from './components/footer/footer.component';
import { NavbarAuthComponent } from './components/navbar-auth/navbar-auth.component';
import { NavbarBlanckComponent } from './components/navbar-blanck/navbar-blanck.component';
import { NotfoundComponent } from './components/notfound/notfound.component';
import { CartComponent } from './components/cart/cart.component';
import { AuthLayoutComponent } from './layouts/auth-layout/auth-layout.component';
import { BlankLayoutComponent } from './layouts/blank-layout/blank-layout.component';
import { WishListComponent } from './components/wish-list/wish-list.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import{HttpClientModule} from '@angular/common/http';
import { CuttextPipe } from './pips/cuttext.pipe';
import { DelatilsproductComponent } from './components/delatilsproduct/delatilsproduct.component'
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { CarouselModule } from 'ngx-owl-carousel-o';
import { ToastrModule } from 'ngx-toastr';
import { SearchPipe } from './pips/search.pipe';
import { NgxPaginationModule } from 'ngx-pagination';
import { SpecificbrandComponent } from './components/specificbrand/specificbrand.component';
import { SubcategoryComponent } from './components/subcategory/subcategory.component';
@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    ProductsComponent,
    BrandsComponent,
    CategoriesComponent,
    LoginComponent,
    RegesterComponent,
    FooterComponent,
    NavbarAuthComponent,
    NavbarBlanckComponent,
    NotfoundComponent,
    CartComponent,
    AuthLayoutComponent,
    BlankLayoutComponent,
    WishListComponent,
    CuttextPipe,
    DelatilsproductComponent,
    SearchPipe,
    SpecificbrandComponent,
    SubcategoryComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ReactiveFormsModule,
    HttpClientModule,
    BrowserAnimationsModule,
    CarouselModule,
    NgxPaginationModule,
    FormsModule,
    ToastrModule.forRoot({
      timeOut: 1000,
    }),
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
