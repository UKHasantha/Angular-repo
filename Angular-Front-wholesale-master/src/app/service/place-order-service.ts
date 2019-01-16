import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {PlaceOrder} from '../dtos/place-order';
import {Observable} from 'rxjs';
import {MAIN_URL} from './item-service';

const URL = '/api/v1/placeorder';

@Injectable()
export class PlaceOrderService {
  constructor(private http: HttpClient) {}

  placeOrder(placeorders: PlaceOrder): Observable<boolean> {
    return this.http.post<boolean>(MAIN_URL + URL, placeorders);
  }
}

