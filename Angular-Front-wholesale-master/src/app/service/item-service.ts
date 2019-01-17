import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {ItemDTO} from '../dtos/item-dto';
import {Observable} from 'rxjs';

export const MAIN_URL = 'http://localhost:8084';
const URL = '/api/v1/items';

@Injectable()
export class ItemService {
  constructor(private http: HttpClient) {}

  saveItem(item: ItemDTO): Observable<boolean> {
    return this.http.post<boolean>(MAIN_URL + URL, item);
  }
  searchItem(code: string): Observable<ItemDTO> {
    return this.http.get<ItemDTO>(MAIN_URL + URL + '/' + code);
  }
  getAllItems(): Observable<Array<ItemDTO>> {
    return this.http.get<Array<ItemDTO>>(MAIN_URL + URL);
  }
  deleteItem(id: string): Observable<boolean> {
    return this.http.delete<boolean>(MAIN_URL + URL + id);
  }
}
