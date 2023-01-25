import { Component, OnDestroy, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { map, Subscription } from 'rxjs';
import { Comment } from 'src/app/models/comment';
import { User } from 'src/app/models/user';
import { CommentService } from 'src/app/services/comment.service';
import { UserService } from 'src/app/services/user.service';

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
  }  

  addCommentClick(ev:MouseEvent){ //so that we dont clear the selected parent comment when clicking on textarea to add comment
    ev.stopPropagation()
  }

  onAddComment(form: NgForm) {
    if (!this.text) return
    const commentToAdd = this.createNewComment()
    this.commentService.save({...commentToAdd})
    form.reset()
    if (this.selectedParent) window.location.reload() //this is a workaround solution because reply comments were only showing up after refresh
  }

  createNewComment(): Comment{
    let newComment = this.commentService.getEmptyComment()
    newComment.txt = this.text
    newComment.parentCommentId = this.selectedParent?.id || null
    newComment.ownerId = this.selectedUser.id
    return {...newComment}
  }

  getSelectedParentOwnerName(){
    if (!this.selectedParent) return
    const selectedParentOwner = this.userService.getById(this.selectedParent.ownerId)
      .pipe(
        map(({displayName})=> displayName)
      )
    return selectedParentOwner
  }

  ngOnDestroy(): void {
    this.userSubscription.unsubscribe()
    this.commentSubscription.unsubscribe()
  }

}
