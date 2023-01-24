import { Component } from '@angular/core';
import { USERS } from 'src/app/data/user';

@Component({
  selector: 'app-user-picker',
  templateUrl: './user-picker.component.html',
  styleUrls: ['./user-picker.component.scss']
})
export class UserPickerComponent {
  selectedUser = ''

  users = USERS.map(user => user.displayName)

}
