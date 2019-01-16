import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { MainComponent } from './main/main.component';
import { PlaceOrderComponent } from './place-order/place-order.component';
import { OrdersComponent } from './orders/orders.component';
import { ItemsComponent } from './items/items.component';
import { UsersComponent } from './users/users.component';
import { LoginComponent } from './login/login.component';
import {FormsModule} from '@angular/forms';
import {UserService} from './service/user-service';
import {HttpClientModule} from '@angular/common/http';
import {ItemService} from './service/item-service';
import {PlaceOrderService} from './service/place-order-service';
import {AuthService} from './service/auth-service';

@NgModule({
  declarations: [
    AppComponent,
    MainComponent,
    PlaceOrderComponent,
    OrdersComponent,
    ItemsComponent,
    UsersComponent,
    LoginComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule
  ],
  providers: [
    UserService,
    ItemService,
    PlaceOrderService,
    AuthService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
