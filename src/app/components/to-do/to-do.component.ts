import { Component } from '@angular/core';
import { ToastrService } from 'ngx-toastr';
import * as data from '../../shared/data/data/todo/todo'
import { Task } from '../../shared/data/data/todo/todo';
import { DatePipe } from '@angular/common';

const Months = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];

@Component({
  selector: 'app-to-do',
  templateUrl: './to-do.component.html',
  styleUrls: ['./to-do.component.scss']
})

export class ToDoComponent {

  public textData: string = '';
  public completed: boolean = false
  public todos = data.task;
  public isShow: boolean = false;
  public isOpen: boolean = false;
  
  constructor(private toastr: ToastrService, private datePipe: DatePipe) { }

  addTask() {
    let myDate = new Date();
    let formattedDate = this.datePipe.transform(myDate, 'dd MMM');
    if (this.textData && formattedDate) {
      let someData = {
        'text': this.textData,
        'Date': formattedDate,
        'priority': 'Pending',
        'badgeClass': 'badge-light-danger',
        'completed': false,
      }
      this.todos.unshift(someData);
      this.toastr.success(this.textData, 'added to list')
    }
  }

  taskDeleted(index: number, data: Task) {
    this.todos.splice(index, 1);
    data.completed = !data.completed;
    if (data.completed) {
      this.toastr.success(data.text, 'marked as complete.')
    } else {
      this.toastr.success(data.text, 'marked as In complete.')
    }
  }

  tastComplete(data: Task) {
    data.completed = !data.completed;
    if (data.completed) {
      this.toastr.success(data.text, 'marked as complete.');
    } else {
      this.toastr.success(data.text, 'marked as Incomplete.');
    }
  }

  Outside() {
    this.isOpen = false;
  }

}
