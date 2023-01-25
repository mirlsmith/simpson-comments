import { Component, Input, OnDestroy, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Subscription } from 'rxjs';
import { Comment } from 'src/app/models/comment';
import { User } from 'src/app/models/user';
import { CommentService } from 'src/app/services/comment.service';
import { UserService } from 'src/app/services/user.service';

// declare var require: any
@Component({
  selector: 'app-add-comment',
  templateUrl: './add-comment.component.html',
  styleUrls: ['./add-comment.component.scss']
})
export class AddCommentComponent implements OnInit, OnDestroy {

  userSubscription!: Subscription
  selectedUser!: User

  commentSubscription!: Subscription
  selectedParent: Comment|null = null

  newComment!:Comment

  text = ''

  constructor(
    private commentService: CommentService,
    private userService: UserService
  ){}
  
  ngOnInit(): void {
    this.userSubscription = this.userService.selectedUser$.subscribe(
      (user) => this.selectedUser = user
    )
    this.commentSubscription = this.commentService.selectedParentComment$.subscribe(cmnt => this.selectedParent = cmnt )
    this.newComment = this.commentService.getEmptyComment()
  }  

  addCommentClick(ev:MouseEvent){ //so that we dont clear the selected parent comment when clicking on textarea to add comment
    ev.stopPropagation()
  }

  onAddComment(form: NgForm) {
    if (!this.text) return
    this.createNewComment()
    this.commentService.save(this.newComment)
    form.reset()
    if (this.selectedParent) window.location.reload() //this is a workaround solution because reply comments were only showing up after refresh
  }

  createNewComment(): Comment{
    this.newComment = this.commentService.getEmptyComment()
    this.newComment.txt = this.text
    this.newComment.parentCommentId = this.selectedParent?.id || null
    this.newComment.ownerId = this.selectedUser.id
    return this.newComment
  }

  ngOnDestroy(): void {
    this.userSubscription.unsubscribe()
    this.commentSubscription.unsubscribe()
  }

}
