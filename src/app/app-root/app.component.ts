import { Component } from '@angular/core';
import { CommentService } from '../services/comment.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'simpson-comments';

  constructor(private commentService:CommentService){}

  clickedOnApp() {
    this.commentService.clearSelectedParentComment()
  }
}
