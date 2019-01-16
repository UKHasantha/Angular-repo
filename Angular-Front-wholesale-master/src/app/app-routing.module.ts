import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {MainComponent} from "./main/main.component";
import {ItemsComponent} from "./items/items.component";
import {PlaceOrderComponent} from "./place-order/place-order.component";
import {UsersComponent} from "./users/users.component";
import {OrdersComponent} from "./orders/orders.component";

const routes: Routes = [{
  path: 'main',
  component: MainComponent
},
    {
      path: 'items',
      component: ItemsComponent
    },
    {
      path: 'place-order',
      component: PlaceOrderComponent
    },
    {
      path: 'users',
      component: UsersComponent
    },
    {
      path: 'orders',
      component: OrdersComponent
    },
    {
      path: '',
      pathMatch: 'full',
      redirectTo:'/main'
    },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
