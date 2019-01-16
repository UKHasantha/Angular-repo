import {Orders} from './orders';
import {ItemDTO} from './item-dto';
import {PlaceOrderDetailsPK} from './place-order-details-pk';

export class OrdersDetails {
  quantity: number;
  unitprice: number;
  order: Orders;
  item: ItemDTO;
  orderdetailspk: PlaceOrderDetailsPK;
}
