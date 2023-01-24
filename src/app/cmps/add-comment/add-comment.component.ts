import { Component, Input, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Subscription } from 'rxjs';
import { User } from 'src/app/models/user';
import { CommentService } from 'src/app/services/comment.service';
import { UserService } from 'src/app/services/user.service';

@Component({
  selector: 'app-add-comment',
  templateUrl: './add-comment.component.html',
  styleUrls: ['./add-comment.component.scss']
})
export class AddCommentComponent implements OnInit {

  
  userSubscription!: Subscription
  selectedUser!: User
  text = ''

  constructor(
    private commentService: CommentService,
    private userService: UserService
  ){}

  @Input() reply = false
  // @Input() parentMsg = this.commentService.getEmptyComment()


  ngOnInit(): void {
    this.userSubscription = this.userService.selectedUser$.subscribe(
      (user) => this.selectedUser = user
    )
  }
  

  onAddComment(form: NgForm) {
    const msg = form.value
    // this.reply ? this.commentService.saveAsReply(msg, this.parentMsg) :  this.commentService.save(msg)
    console.log('text', this.text);
    form.reset()
  }

}
