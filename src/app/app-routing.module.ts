import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { RLNavComponent } from './rlnav/rlnav.component';
import { LoggedNavComponent } from './logged-nav/logged-nav.component';
import { RlComponent } from './rl/rl.component';
import { LoggedComponent } from './logged/logged.component';
import { HomeComponent } from './home/home.component';
import { CartsComponent } from './carts/carts.component';
import { ProductsComponent } from './products/products.component';
import { CategoriesComponent } from './categories/categories.component';
import { BrandsComponent } from './brands/brands.component';
import { LoginComponent } from './login/login.component';
import { RegisterComponent } from './register/register.component';
import { NotFoundComponent } from './not-found/not-found.component';
import { authGuardGuard } from './auth-guard.guard';
import { CanActivateFn} from '@angular/router';
import { auth2Guard } from './auth2.guard';
import { DetailsComponent } from './details/details.component';
import { ShippingComponent } from './shipping/shipping.component';
import { AllordersComponent } from './allorders/allorders.component';


const routes: Routes = [
  
  //blank = logged
  
  {path:'', 
  canActivate:[authGuardGuard],
  component:LoggedComponent, 
  children:[
    {path:'', redirectTo:'home', pathMatch:'full'},
    {path:'home', component:HomeComponent},
    {path:'cart', component:CartsComponent},
    {path:'products', component:ProductsComponent},
    {path:'categories', component:CategoriesComponent},
    {path:'allorders', component:AllordersComponent},
    {path:'shipping/:id', component:ShippingComponent},
    {path:'brands', component:BrandsComponent},
    {path:'details/:id', component:DetailsComponent},
    {path:'not', component:NotFoundComponent},
  ]},
  //auth = rl
  {path:'',
  canActivate:[auth2Guard]
  , component:RlComponent, 
  children:[
    {path:'login', component:LoginComponent},
    {path:'register', component:RegisterComponent},
    {path:'not', component:NotFoundComponent}
  ]},
  {path:'**' , redirectTo:'not', pathMatch:'full'}


];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
