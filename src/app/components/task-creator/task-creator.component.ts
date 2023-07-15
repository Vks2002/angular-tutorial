import { Component } from '@angular/core';

@Component({
  selector: 'app-task-creator',
  templateUrl: './task-creator.component.html',
  styleUrls: ['./task-creator.component.scss']
})
export class TaskCreatorComponent {

  text = "";
  lastIndex: number = -1;
  tasks: string[] = [];


  addTask() {
    if (this.text.trim() != "") {
      if (this.lastIndex != -1) {
        this.tasks[this.lastIndex] = this.text.trim();
      } else {
        this.tasks.push(this.text.trim());
      }
      this.text = "";
      this.lastIndex = -1;
    }
  }

  onEdit(index: number): void {
    this.lastIndex = index;
    this.text = this.tasks[index];
  }

  onDelete(index: number) {
    let con = confirm("Do you really want to delete?");
    if (con) {
      this.tasks.splice(index, 1);  
    }
  }
}
