import { Component, OnInit } from '@angular/core';
import {Task} from "../task.model";

@Component({
  selector: 'app-tasks-list',
  templateUrl: './tasks-list.component.html',
  styleUrls: ['./tasks-list.component.css']
})
export class TasksListComponent implements OnInit {

    tasks: Task[] = [];

    constructor() { }

    // Task data initialization
    ngOnInit() {
      this.tasks.push( new Task(1,"Task 1", true, "11/04/2019"));
      this.tasks.push( new Task(2,"Task 2", false, "17/04/2019"));
      this.tasks.push( new Task(3,"Task 3", false, "21/04/2019"));
    }

    getDueDateLabel(task: Task){
        return task.completed ? 'label-success' : 'label-primary';
    }

    onTaskChange(event, task) {
        console.log("Task has changed");
    }
}
