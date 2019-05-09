import { Component, OnInit } from '@angular/core';
import {EventService} from "../event/event.service";

@Component({
  selector: 'app-basic-aside',
  templateUrl: './basic-aside.component.html',
  styleUrls: ['./basic-aside.component.scss']
})
export class BasicAsideComponent implements OnInit {
    eventCount: number;

    constructor( private eventService: EventService ){};

    ngOnInit() {
        return this.eventService.getEventCount().subscribe(
            (num : number) =>
            this.eventCount = num,
            (error) => console.log(error)
        );
    }

}
