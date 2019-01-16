import {Component, OnInit, ViewChild} from '@angular/core';
import {UserDTO} from '../dtos/user-dto';
import {NgForm} from '@angular/forms';
import {UserService} from '../service/user-service';

@Component({
  selector: 'app-users',
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.scss']
})
export class UsersComponent implements OnInit {
  selectedUser: UserDTO = new UserDTO();
  @ViewChild('frmUser') frmUser: NgForm;

  constructor(private userService: UserService) { }

  ngOnInit() {
  }

  saveUser(): void {
    this.userService.saveUser(this.selectedUser).subscribe(
      (result) => {
          if (result) {
            alert('User have been successfully added..');
          } else {
            alert('User not added..');
          }
      }
    );
  }
}
