import { Component } from '@angular/core';
import { UserService } from 'src/app/services/user.service';

@Component({
  selector: 'app-user-picker',
  templateUrl: './user-picker.component.html',
  styleUrls: ['./user-picker.component.scss']
})
export class UserPickerComponent {

  constructor(
    private userService: UserService
  ){}

  selectedUserName = this.userService.selectedUser.displayName

  users = this.userService.getUserNames()

  updateSelectedUser() {
    this.userService.setSelectedUser(this.selectedUserName)
  }



}
