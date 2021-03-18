import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { ChatModalComponent } from './chat-modal/chat-modal';

@NgModule({
  declarations: [ChatModalComponent],
  imports: [
    FormsModule,
    CommonModule
  ],
  exports: [ChatModalComponent],
  providers:[]
})
export class ChatModule { }