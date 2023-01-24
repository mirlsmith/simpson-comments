import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable, of } from 'rxjs';
import { USERS } from '../data/user';
import { User } from '../models/user';
import { UtilService } from './util.service';

const STORAGE_KEY = 'usersDB'
@Injectable({
  providedIn: 'root'
})
export class UserService {

  constructor(
    private utilService: UtilService
  ) { }

  private _selectedUser$ = new BehaviorSubject<User>(USERS[0])
  public selectedUser$ = this._selectedUser$.asObservable()

  private usersDB: User[] = this.loadUsers()


  getUserNames(){
    return this.usersDB.map(user => user.displayName)
  }

  get selectedUser() {
    return this._selectedUser$.value
  }

  setSelectedUser(userName: string) {
    const user = this.usersDB.find(user => user.displayName === userName)
    if (user) {
      this._selectedUser$.next(user)
      return of(user)
    }
    return of()
  }

  loadUsers() {
    let users = this.utilService.loadFromStorage(STORAGE_KEY)
    if (!users) {
      users = USERS
      this.utilService.saveToStorage(STORAGE_KEY, users)
    }
    return users    
  }


}
