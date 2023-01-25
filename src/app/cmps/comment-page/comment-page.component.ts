import { Component, OnDestroy, OnInit } from '@angular/core';
import { Observable, Subscription } from 'rxjs';
import { Comment } from 'src/app/models/comment';
import { CommentService } from 'src/app/services/comment.service';

@Component({
  selector: 'app-comment-page',
  templateUrl: './comment-page.component.html',
  styleUrls: ['./comment-page.component.scss'],
})
export class CommentPageComponent implements OnInit, OnDestroy {
  constructor(private commentService: CommentService) {}

  comments!: Comment[];
  comments$!: Observable<Comment[]>;

  subscription!: Subscription

  ngOnInit(): void {
    this.commentService.query();
    this.comments$ = this.commentService.comments$;

    this.subscription = this.commentService.comments$.subscribe(
      comnts => this.comments = comnts
    )
  }

  onRemoveComment(commentId: number): void {
    this.commentService.remove(commentId)
  }

  ngOnDestroy(): void {
    this.subscription?.unsubscribe()
  }



}
