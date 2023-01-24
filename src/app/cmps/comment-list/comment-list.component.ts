import { Component, EventEmitter, Input, Output } from '@angular/core';
import { Comment } from 'src/app/models/comment';

@Component({
  selector: 'app-comment-list',
  templateUrl: './comment-list.component.html',
  styleUrls: ['./comment-list.component.scss']
})
export class CommentListComponent {
  @Input() comments!: Comment[] | null
  @Output() onRemove = new EventEmitter<number>()

}
