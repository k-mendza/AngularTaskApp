import { Component, OnInit } from '@angular/core';
import {TaskService} from "../task.service";
import {Task} from "../task.model";

@Component({
  selector: 'app-tasks-add',
  templateUrl: './tasks-add.component.html',
  styleUrls: ['./tasks-add.component.css']
})
export class TasksAddComponent implements OnInit {

    addTaskValue: string = null;

    constructor(private taskService: TaskService) { }

    ngOnInit() {
    }

    onTaskAdd(event) {
        let task: Task = new Task(event.target.value,false, this.getTodayAsString());
        this.taskService.addTask(task);
        this.addTaskValue = ' ';
        this.taskService.onTaskAdded.emit(task);
    }

    getTodayAsString(){
        let today = new Date();
        let dd: any = today.getDay();
        let mm: any = today.getMonth() + 1;
        let yyyy = today.getFullYear();

        if (dd < 10) {
            dd = `0${dd}`;
        }

        if (mm < 10) {
            mm = `0${mm}`;
        }

        return dd + "/" + mm + "/" + yyyy;
    }
}