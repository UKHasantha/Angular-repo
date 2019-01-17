import { Component, OnInit } from '@angular/core';
import {PlaceOrderService} from '../service/place-order-service';
import {Orders} from '../dtos/orders';

@Component({
  selector: 'app-orders',
  templateUrl: './orders.component.html',
  styleUrls: ['./orders.component.scss']
})
export class OrdersComponent implements OnInit {
  orders: Array<Orders> = [];
  constructor(private placeOrderService: PlaceOrderService) { }

  ngOnInit() {
    this.loadAllArders();
  }
  loadAllArders(): void {
    this.placeOrderService.getAllOrders().subscribe(
      (result) => {
        this.orders = result;
        console.log(this.orders);
      }
    );
  }
}
