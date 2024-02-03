import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { SharedModule } from '../../shared/shared.module';
import { LetterBoxRoutingModule } from './letter-box-routing.module';

import { EmailContentComponent } from './email-content/email-content.component';
import { InterviewMailComponent } from './email-content/interview-mail/interview-mail.component';
import { EmailLeftAsideComponent } from './email-left-aside/email-left-aside.component';
import { EmailComponent } from './email.component';
import { AddLabelComponent } from './model/add-label/add-label.component';
import { ComposeEmailComponent } from './model/compose-email/compose-email.component';
import { NgxPrintModule } from 'ngx-print';
import { NgxEditorModule } from 'ngx-editor';

@NgModule({
  declarations: [
    EmailComponent,
    EmailLeftAsideComponent,
    EmailContentComponent,
    ComposeEmailComponent,
    AddLabelComponent,
    InterviewMailComponent
  ],
  imports: [
    CommonModule,
    LetterBoxRoutingModule,
    SharedModule,
    NgxPrintModule,
    NgxEditorModule
  ]
})
export class LetterBoxModule { }
