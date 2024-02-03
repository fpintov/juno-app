import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SharedModule } from '../../shared/shared.module';
import { ChatRoutingModule } from './chat-routing.module';

import { GroupChatComponent } from './group-chat/group-chat.component';
import { PrivateChatComponent } from './private-chat/private-chat.component';
import { ChatBoxComponent } from './widgets/chat-box/chat-box.component';
import { ChatFilterComponent } from './widgets/chat-filter/chat-filter.component';

@NgModule({
  declarations: [
    PrivateChatComponent,
    GroupChatComponent,
    ChatFilterComponent,
    ChatBoxComponent
  ],
  imports: [
    CommonModule,
    ChatRoutingModule,
    SharedModule
  ]
})
export class ChatModule { }
