import {Component, ElementRef, OnInit, ViewChild} from '@angular/core';
import {UserDTO} from '../dtos/user-dto';
import {OrdersDetails} from '../dtos/orders-details';
import {ItemDTO} from '../dtos/item-dto';
import {PlaceOrderDetailsPK} from '../dtos/place-order-details-pk';
import {PlaceOrder} from '../dtos/place-order';
import {Orders} from '../dtos/orders';
import {NgForm} from '@angular/forms';
import {PlaceOrderService} from '../service/place-order-service';
import {UserService} from '../service/user-service';
import {ItemService} from '../service/item-service';

@Component({
  selector: 'app-place-order',
  templateUrl: './place-order.component.html',
  styleUrls: ['./place-order.component.scss']
})
export class PlaceOrderComponent implements OnInit {

  users: Array<UserDTO> = [];
  selectedItems: Array<OrdersDetails> [];
  // fulltotal: number = 0;
  searchedItems: ItemDTO = new ItemDTO();
  searchedUsers: UserDTO = new UserDTO();
  orderDetail_PKDTO: PlaceOrderDetailsPK ;
  orderDetail: OrdersDetails;
  item: any = [];
  placeOrder: PlaceOrder;
  order: Orders;
  // total: number = 0;
  @ViewChild('frmPlace') frmPlace: NgForm ;

  constructor(private placeOrderService: PlaceOrderService,
              private userService: UserService,
              private itemService: ItemService,
              private element: ElementRef) { }

  ngOnInit() {
  }
  addOrder(): void {
    this.placeOrder = new PlaceOrder();
    this.placeOrder.itemsDTO = this.searchedItems;
    this.placeOrder.orderDTO = this.order;
    this.placeOrder.orderDetailsDTOS = this.selectedItems;

    this.placeOrderService.placeOrder(this.placeOrder).subscribe(
      (result) => {
        if (result) {
          alert('order has been saved successfully');
        } else {
          alert('order not saved..');
        }
      }
      );
  }
}
