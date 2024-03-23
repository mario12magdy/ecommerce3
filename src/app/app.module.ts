import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { RLNavComponent } from './rlnav/rlnav.component';
import { LoggedNavComponent } from './logged-nav/logged-nav.component';
import { RegisterComponent } from './register/register.component';
import { LoginComponent } from './login/login.component';
import { FooterComponent } from './footer/footer.component';
import { NotFoundComponent } from './not-found/not-found.component';
import { HomeComponent } from './home/home.component';
import { CartsComponent } from './carts/carts.component';
import { ProductsComponent } from './products/products.component';
import { CategoriesComponent } from './categories/categories.component';
import { BrandsComponent } from './brands/brands.component';
import { ProductInfoComponent } from './product-info/product-info.component';
import { ThemeToggleComponent } from './theme-toggle/theme-toggle.component';
import { LoggedComponent } from './logged/logged.component';
import { RlComponent } from './rl/rl.component';
import { ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { DetailsComponent } from './details/details.component';
import { LoadingComponent } from './loading/loading.component';
import { CarouselModule } from 'ngx-owl-carousel-o';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { SearchPipe } from './search.pipe';
import { ToastrModule } from 'ngx-toastr';
import { ShippingComponent } from './shipping/shipping.component';
import { AllordersComponent } from './allorders/allorders.component';


@NgModule({
  declarations: [
    AppComponent,
    RLNavComponent,
    LoggedNavComponent,
    RegisterComponent,
    LoginComponent,
    FooterComponent,
    NotFoundComponent,
    HomeComponent,
    CartsComponent,
    ProductsComponent,
    CategoriesComponent,
    BrandsComponent,
    ProductInfoComponent,
    ThemeToggleComponent,
    LoggedComponent,
    RlComponent,
    DetailsComponent,
    LoadingComponent,
    SearchPipe,
    ShippingComponent,
    AllordersComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ReactiveFormsModule,
    HttpClientModule,
    CarouselModule,
    BrowserAnimationsModule,
    CarouselModule,
    ToastrModule.forRoot(),
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
