import {UserDTO} from './user-dto';

export class Orders {
  oID: string;
  date: string;
  totalPrice: number;
  user: UserDTO;

  constructor(oID: string, date: string, totalPrice: number, user: UserDTO) {
    this.oID = oID;
    this.date = date;
    this.totalPrice = totalPrice;
    this.user = user;
  }
}
