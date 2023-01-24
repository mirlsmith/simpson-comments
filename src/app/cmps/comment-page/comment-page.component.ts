import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { Comment } from 'src/app/models/comment';
import { CommentService } from 'src/app/services/comment.service';

@Component({
  selector: 'app-comment-page',
  templateUrl: './comment-page.component.html',
  styleUrls: ['./comment-page.component.scss']
})
export class CommentPageComponent implements OnInit {

  constructor(
    private commentService: CommentService
  ){}

  comments!: Comment[]
  comments$!: Observable<Comment[]>

  ngOnInit(): void {
    this.commentService.query()
    this.comments$ = this.commentService.comments$
  }

  onRemoveComment(commentId:number){

  }

}
