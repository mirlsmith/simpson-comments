import { Injectable } from '@angular/core'
import { BehaviorSubject, Observable, of } from 'rxjs'
import { COMMENTS } from '../data/comment'
import { Comment } from '../models/comment'
import { UtilService } from './util.service'

const STORAGE_KEY = 'commentsDB'
@Injectable({
  providedIn: 'root',
})
export class CommentService {
  constructor(private utilService: UtilService) {}

  private _comments$ = new BehaviorSubject<Comment[]>([])
  public comments$ = this._comments$.asObservable()

  private commentsDB: Comment[] = this.loadComments()

  query() {
    const comments = this.commentsDB
      .filter((comment) => !comment.parentCommentId)
      .sort((a: Comment, b: Comment) => {
        const dateA = new Date(a.createdAt).getTime()
        const dateB = new Date(b.createdAt).getTime()
        return dateA - dateB
      })
    this._comments$.next(comments)
  }

  save(comment: Comment): Observable<Comment> {
    comment.createdAt = Date()
    return comment.id ? this._edit(comment) : this._add(comment)
  }

  private _add(comment: Comment) {
    comment.id = this.utilService.makeId(5)
    this.commentsDB.push(comment)
    this.query()
    this.utilService.saveToStorage(STORAGE_KEY, this.commentsDB)
    return of(comment)
  }

  private _edit(comment: Comment) {
    const comments = this.commentsDB
    const commentIdx = comments.findIndex((cmnt) => cmnt.id === comment.id)
    comments.splice(commentIdx, 1, comment)
    this._comments$.next(comments)
    this.query()
    this.utilService.saveToStorage(STORAGE_KEY, comments)
    return of(comment)
  }

  loadComments() {
    let comments = this.utilService.loadFromStorage(STORAGE_KEY)
    if (!comments) {
      comments = COMMENTS
      this.utilService.saveToStorage(STORAGE_KEY, comments)
    }
    return comments
  }

  getReplies(commentId: number) {
    return this.commentsDB.filter(
      (comment) => comment.parentCommentId === commentId
    )
  }

  getById(commentId: number): Observable<Comment> {
    const comment = this.commentsDB.find((comment) => comment.id === commentId)
    return comment ? of({ ...comment }) : of()
  }

  remove(commentId: number) {
    const comments = this.commentsDB
    const replies = this.getReplies(commentId)
    if (replies.length)
      replies.forEach((cmnt) => {
        if (cmnt.deletedAt) return
        this.remove(cmnt.id)
      })
    const commentIdx = comments.findIndex(
      (comment) => comment.id === commentId
    )
    comments[commentIdx].deletedAt = new Date()
    this.query()
    this.utilService.saveToStorage(STORAGE_KEY, comments)
  }

  getEmptyComment(): Comment {
    return {
      id: 0,
      parentCommentId: null,
      ownerId: 0,
      txt: '',
      createdAt: '',
      deletedAt: null,
    }
  }
}
