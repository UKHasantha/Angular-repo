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
  selectedItems: Array<OrdersDetails> = [];
  fulltotal = 0;
  searchedItems: ItemDTO = new ItemDTO();
  searchedUsers: UserDTO = new UserDTO();
  orderDetail_PKDTO: PlaceOrderDetailsPK ;
  orderDetail: OrdersDetails;
  items: any = [];
  placeOrder: PlaceOrder;
  order: Orders;
  total = 0;
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
  selectDetails(): void {
    const ordersDate = this.element.nativeElement.querySelector('#orderDate').value;
    const qty = this.element.nativeElement.querySelector('#qty').value;
    const orderId = this.element.nativeElement.querySelector('#orderId').value;

    this.total = qty * this.searchedItems.unitPrice;
    this.fulltotal = this.fulltotal + this.total;
    const price = this.fulltotal;
    console.log(price);

    this.order = new Orders(orderId, ordersDate, this.total, this.searchedUsers);
    console.log(this.order.totalPrice);
    this.orderDetail_PKDTO = new PlaceOrderDetailsPK();
    this.orderDetail = new OrdersDetails();
    this.orderDetail.quantity = qty;
    this.orderDetail.unitprice = this.searchedItems.unitPrice;
    this.orderDetail.item = this.searchedItems;
    this.orderDetail.order = this.order;
    this.orderDetail.orderdetailspk = this.orderDetail_PKDTO;

    this.selectedItems.push(this.orderDetail);

    console.log(this.selectedItems);

  }

  searchUser(event: any): void {
    this.userService.searchUser(event.target.value).subscribe(
      (result) => {
        this.searchedUsers = result;
        console.log(this.searchedUsers);
      }
    );
  }
  searchItems(event: any): void {
    this.itemService.searchItem(event.target.value).subscribe(
      (result) => {
        this.searchedItems = result;
        console.log(this.searchedItems);
      }
    );
  }
}
