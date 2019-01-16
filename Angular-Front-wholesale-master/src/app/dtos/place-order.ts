import {ItemDTO} from './item-dto';
import {Orders} from './orders';
import {OrdersDetails} from './orders-details';

export class PlaceOrder {
  itemsDTO: ItemDTO;
  orderDTO: Orders;
  orderDetailsDTOS: Array <OrdersDetails> [];
}
