import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app-root/app.component';
import { UserPickerComponent } from './cmps/user-picker/user-picker.component';
import { FormsModule } from '@angular/forms';
import { CommentPageComponent } from './cmps/comment-page/comment-page.component';
import { AddCommentComponent } from './cmps/add-comment/add-comment.component';
import { CommentListComponent } from './cmps/comment-list/comment-list.component';
import { CommentPreviewComponent } from './cmps/comment-preview/comment-preview.component';
import { TimeAgoPipe } from './pipes/time-ago.pipe';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';


@NgModule({
  declarations: [
    AppComponent,
    UserPickerComponent,
    CommentPageComponent,
    AddCommentComponent,
    CommentListComponent,
    CommentPreviewComponent,
    TimeAgoPipe,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    FontAwesomeModule,
    
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
