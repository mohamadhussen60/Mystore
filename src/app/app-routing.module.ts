import { NgModule } from '@angular/core';
import { RouterModule, Routes ,ParamMap } from '@angular/router';
import { CartComponent } from './components/cart/cart.component';
import { ConfirmationComponent } from './components/confirmation/confirmation.component';
import { ProductItemDetailComponent } from './components/product-item-detail/product-item-detail.component';
import { ProductListComponent } from './components/product-list/product-list.component';





const routes: Routes = [
  {path :"",component:ProductListComponent},
  {path :"MyCart",component:CartComponent},
  {path :"confirmation",component:ConfirmationComponent},
  {path :"ProductDetail/:id",component:ProductItemDetailComponent},
  {path :"Confirmation",component:ConfirmationComponent},

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
