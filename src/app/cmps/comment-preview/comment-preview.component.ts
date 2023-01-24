import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { Observable, Subscription } from 'rxjs';
import { Comment } from 'src/app/models/comment';
import { User } from 'src/app/models/user';
import { UserService } from 'src/app/services/user.service';

@Component({
  selector: 'app-comment-preview',
  templateUrl: './comment-preview.component.html',
  styleUrls: ['./comment-preview.component.scss']
})
export class CommentPreviewComponent implements OnInit {

  constructor(
    private userService:UserService
  ){}

  @Input() comment!: Comment
  @Output() onRemove = new EventEmitter<number>()

  onRemoveComment(ev: MouseEvent){
    ev.stopPropagation()
    this.onRemove.emit(this.comment.id)
  }

  commentOwner$!: Observable<User>

  ownerName = ''
  createdAt = ''

  
  ngOnInit(): void {
    this.commentOwner$ = this.userService.getById(this.comment.ownerId)
    this.commentOwner$.subscribe(
      user => this.ownerName = user.displayName
    )
  }

}
