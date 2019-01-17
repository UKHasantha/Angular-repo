import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {UserDTO} from '../dtos/user-dto';
import {Observable} from 'rxjs';
import {ItemDTO} from '../dtos/item-dto';

export const MAIN_URL = 'http://localhost:8084';
const URL = '/api/v1/users';

@Injectable()
export class UserService {
  constructor(private http: HttpClient) {}

  saveUser(user: UserDTO): Observable<boolean> {
    return this.http.post<boolean>(MAIN_URL + URL, user);
  }
  searchUser(id: string): Observable <UserDTO> {
    return this.http.get<UserDTO>(MAIN_URL + URL + '/' + id);
  }
  getAllUsers(): Observable<Array<UserDTO>> {
    return this.http.get<Array<UserDTO>>(MAIN_URL + URL);
  }

}
