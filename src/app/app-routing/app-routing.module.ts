import { BuyingDetailsComponent } from './../Components/buying-details/buying-details.component';
import { OrderHistoryComponentComponent } from './../Components/order-history-component/order-history-component.component';
import { RouterModule, Routes } from '@angular/router';
import { NgModule } from '@angular/core';
import { HomeComponent } from '../Components/home/home.component';
import { BrowseShoppingComponent } from '../Components/browse-shopping/browse-shopping.component';
import { ShoppingBucketComponent } from '../Components/shopping-bucket/shopping-bucket.component';
import { LoginComponent } from '../Components/login/login.component';
import { OrderSuccessComponent } from '../Components/order-success/order-success.component';
import { ProfileComponent } from '../Components/profile/profile.component';
import { RegisterNewUserComponent } from '../Components/register-new-user/register-new-user.component';

const routes: Routes = [
  {path:"",component:HomeComponent},
  {path:"Browse",component:BrowseShoppingComponent},
  {path:"Bucket",component:ShoppingBucketComponent},
  {path:"login",component:LoginComponent},
  {path:"OrderSuccess",component:OrderSuccessComponent},
  {path:"profile",component:ProfileComponent},
  {path:"OrderHistory",component:OrderHistoryComponentComponent},
  {path:"Register",component:RegisterNewUserComponent},
  {path:"BuyingDetails",component:BuyingDetailsComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
