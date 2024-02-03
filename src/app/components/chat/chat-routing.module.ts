import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { GroupChatComponent } from './group-chat/group-chat.component';
import { PrivateChatComponent } from './private-chat/private-chat.component';

const routes: Routes = [
  {
    path: '',
    children: [
      {
        path: 'private-chat',
        component: PrivateChatComponent,
        data: {
          title: 'Private Chat',
          breadcrumb: 'Private Chat',
        }
      },
      {
        path: 'group-chat',
        component: GroupChatComponent ,
        data: {
          title: 'Group Chat',
          breadcrumb: 'Group Chat',
        }
      },
    ]
  }

];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ChatRoutingModule { }
