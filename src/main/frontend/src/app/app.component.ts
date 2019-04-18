import { Component, OnInit, ViewChild } from '@angular/core';
import { ModalDirective } from 'angular-bootstrap-md';
import { FormControl } from '@angular/forms';
import { EventService } from "./components/event/event.service";
import { Event } from "./components/event/event.model";


@Component({
    selector: 'app-root',
    templateUrl: './app.component.html',
    styleUrls: ['./app.component.scss'],
    providers: [EventService]
})
export class AppComponent implements OnInit{
    @ViewChild(ModalDirective) modal: ModalDirective;

    constructor( private eventService: EventService ){};

    events: Event[] = [];

    timeInput = new FormControl();
    subjectInput = new FormControl();
    locationInput = new FormControl();
    descriptionInput = new FormControl();

    ngOnInit(){
        this.getEvents();
    }

    // Tak się mapuje HttpClient.get() na obiekt
    getEvents() {
        this.eventService.getEvents().subscribe(
            (events: Event[]) => {
                this.events = events
            },
            (error) => console.log(error)
        );
    }

    addNewEvent() {
        let event: Event = new Event(
            null,
            this.timeInput.value,
            this.subjectInput.value,
            this.locationInput.value,
            this.descriptionInput.value
        );

        this.eventService.saveEvent(event).subscribe(

        );

        this.timeInput.setValue('');
        this.subjectInput.setValue('');
        this.locationInput.setValue('');
        this.descriptionInput.setValue('');

        this.modal.hide();

        this.getEvents();
    }

    deleteEvent(event: any) {
        const itemIndex = this.events.findIndex(el => el === event);
        this.eventService.deleteEvent(this.events[itemIndex]).subscribe();
        this.events.splice(itemIndex, 1);
    }
}
