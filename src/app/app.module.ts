import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app-root/app.component';
import { UserPickerComponent } from './cmps/user-picker/user-picker.component';
import { FormsModule } from '@angular/forms';
import { CommentPageComponent } from './cmps/comment-page/comment-page.component';


@NgModule({
  declarations: [
    AppComponent,
    UserPickerComponent,
    CommentPageComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
