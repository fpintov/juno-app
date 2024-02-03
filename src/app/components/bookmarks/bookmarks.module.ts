import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { SharedModule } from '../../shared/shared.module';
import { BookmarksRoutingModule } from './bookmarks-routing.module';

import { BookmarkDataComponent } from './bookmark-data/bookmark-data.component';
import { BookmarkComponent } from './bookmark.component';
import { CreateTagComponent } from './modal/create-tag/create-tag.component';
import { EditBookmarkComponent } from './modal/edit-bookmark/edit-bookmark.component';
import { NewBookmarksComponent } from './modal/new-bookmarks/new-bookmarks.component';

@NgModule({
  declarations: [
    BookmarkComponent,
    NewBookmarksComponent,
    BookmarkDataComponent,
    EditBookmarkComponent,
    CreateTagComponent
  ],
  imports: [
    BookmarksRoutingModule,
    SharedModule,
    CommonModule,
  ],
})
export class BookmarksModule { }
