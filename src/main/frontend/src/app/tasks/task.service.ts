import {HttpClient} from "@angular/common/http";
import {EventEmitter, Injectable} from "@angular/core";
import {Task} from "./task.model";

@Injectable()
export class TaskService {

    onTaskAdded = new EventEmitter<Task>();

    constructor(private httpClient: HttpClient) {
    }

    getTasks() {
        return this.httpClient.get('/api/tasks');
    }

    saveTask(task: Task, checked: boolean) {
        task.completed = checked;
        return this.httpClient.post('/api/tasks/save', task).forEach(
            (response: Response) => {return response.json()}
        );
    }

    addTask(task: Task) {
        return this.httpClient.post('/api/tasks/save', task).forEach(
            (response: Response) => {return response.json()}
        );
    }
}
