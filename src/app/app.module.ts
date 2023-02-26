import { AppRoutingModule } from './app-routing/app-routing.module';
import { LoginComponent } from './Components/login/login.component';
import { BrowseShoppingComponent } from './Components/browse-shopping/browse-shopping.component';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import {HttpClientModule, HTTP_INTERCEPTORS} from '@angular/common/http';
import {MatCardModule} from '@angular/material/card';
import {MatButtonModule} from '@angular/material/button';
import {MatIconModule} from '@angular/material/icon';

import { AppComponent } from './app.component';
import { ECOMHomeNavComponent } from './Components/ecom-home-nav/ecom-home-nav.component';
import { InfoCardComponent } from './Components/info-card/info-card.component';
import { HomeComponent } from './Components/home/home.component';
import { OrderSuccessComponent } from './Components/order-success/order-success.component';
import { ProfileComponent } from './Components/profile/profile.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { OrderHistoryComponentComponent } from './Components/order-history-component/order-history-component.component';
import { RegisterNewUserComponent } from './Components/register-new-user/register-new-user.component';
import { CarouselTemplateComponent } from './Components/carousel-template/carousel-template.component';
import { BuyingDetailsComponent } from './Components/buying-details/buying-details.component';
import { CommonModule } from '@angular/common';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {MatSnackBarModule} from '@angular/material/snack-bar';
import { AuthInterceptor, authInterceptorProviders } from './Services/auth.interceptor';
import { ShoppingBucketComponent } from './Components/shopping-bucket/shopping-bucket.component';

@NgModule({
  declarations: [
    AppComponent,
    ECOMHomeNavComponent,
    InfoCardComponent,
    HomeComponent,
    BrowseShoppingComponent,
    LoginComponent,
    OrderSuccessComponent,
    ProfileComponent,
    OrderHistoryComponentComponent,
    RegisterNewUserComponent,
    CarouselTemplateComponent,
    BuyingDetailsComponent,
    ShoppingBucketComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    CommonModule,
    MatSnackBarModule,
    NgbModule,
    HttpClientModule,
    BrowserAnimationsModule,
    MatCardModule,
    MatButtonModule,
    MatIconModule
  ],
  providers: [
    authInterceptorProviders
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
