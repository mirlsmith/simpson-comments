import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { COMMENTS } from '../data/comment';
import { Comment } from '../models/comment';
import { UtilService } from './util.service';

const STORAGE_KEY = 'commentsDB'
@Injectable({
  providedIn: 'root'
})
export class CommentService {

  constructor(
    private utilService:UtilService
  ) { }

  private _comments$ = new BehaviorSubject<Comment[]>([])
  public comments$ = this._comments$.asObservable()

  private commentsDB: Comment[] = this.loadComments()


  query(){
    this._comments$.next(this.commentsDB)
  }

  loadComments() {
    let comments = this.utilService.loadFromStorage(STORAGE_KEY)
    if (!comments) {
      comments = COMMENTS
      this.utilService.saveToStorage(STORAGE_KEY, comments)
    }
    return comments    
  }
}
