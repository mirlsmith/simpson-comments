import { Component, EventEmitter, Input, OnDestroy, OnInit, Output} from '@angular/core';
import { Observable, Subscription } from 'rxjs';
import { Comment } from 'src/app/models/comment';
import { User } from 'src/app/models/user';
import { CommentService } from 'src/app/services/comment.service';
import { UserService } from 'src/app/services/user.service';

@Component({
  selector: 'app-comment-preview',
  templateUrl: './comment-preview.component.html',
  styleUrls: ['./comment-preview.component.scss']
})
export class CommentPreviewComponent implements OnInit, OnDestroy {

  constructor(
    private userService:UserService,
    private commentService: CommentService,
  ){}

  @Input() comment!: Comment
  @Output() onRemove = new EventEmitter<number>()


  commentOwner$!: Observable<User>

  ownerName = ''
  createdAt = ''
  commentReplies$!: Observable<Comment[]>
  canEdit = false

  userSubscription!: Subscription
  selectedUser!: User

  commentSubscription!: Subscription
  selectedParent: Comment|null = null

  
  ngOnInit(): void {
    this.commentOwner$ = this.userService.getById(this.comment.ownerId)
    this.commentOwner$.subscribe(
      user => this.ownerName = user.displayName
    )
    this.commentReplies$ = this.commentService.getReplies(this.comment.id)
    this.userSubscription = this.userService.selectedUser$.subscribe(user => this.selectedUser = user)
    this.commentSubscription = this.commentService.selectedParentComment$.subscribe(cmnt => this.selectedParent = cmnt )
  }
  
  onRemoveComment(ev: MouseEvent){
    ev.stopPropagation()
    this.commentService.remove(this.comment.id)
  }

  onEditComment(ev: MouseEvent){
    ev.stopPropagation()
    if (this.canEdit) {
      this.commentService.save(this.comment).subscribe(
        cmnt => this.comment = cmnt
      )
    }
    this.canEdit = !this.canEdit
  }

  onClickOutsideComment(){
    console.log('clicked outside comment');
  }
  
  onClickComment(commentId:number){
    event?.stopPropagation()
    console.log('clicked on comment', commentId);
    this.commentService.setSelectedParentComment(commentId)
  }

  ngOnDestroy(): void {
    this.userSubscription.unsubscribe()
    this.commentSubscription.unsubscribe()
  }

}
