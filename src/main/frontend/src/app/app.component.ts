import {Component, OnInit, ViewChild} from '@angular/core';
import {ModalDirective} from 'angular-bootstrap-md';
import {FormControl} from '@angular/forms';
import {EventService} from "./components/event/event.service";
import {Event} from "./components/event/event";


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
    providers: [EventService]
})
export class AppComponent implements OnInit{
    @ViewChild(ModalDirective) modal: ModalDirective;

    constructor(
        private eventService: EventService
    ){};

    // events: Event[] = [];

    timeInput = new FormControl();
    subjectInput = new FormControl();
    locationInput = new FormControl();
    descriptionInput = new FormControl();

    events: Event[] = [
        // {time: '08:00', subject: 'Breakfast with Simon', location: 'Lounge Caffe', description: 'Discuss Q3 targets'},
        // {time: '08:30', subject: 'Daily Standup Meeting (recurring)', location: 'Warsaw Spire Office'},
        // {time: '09:00', subject: 'Call with HRs'},
        // {time: '12:00', subject: 'Lunch with Timmoty', location: 'Canteen', description: 'Project evalutation ile declaring a variable and using an if statement is a fine way to conditionally render a component, sometimes you might want to use a'},
      ];

    ngOnInit(){
        this.getEvents();

        for (let event of this.events) {
            console.log(event)
        }
    }

    // Tak się mapuje HttpClient.get() na obiekt
    getEvents() {
        return this.eventService.getEvents().subscribe(
            (events: any[]) => {
                this.events = events
            },
            (error) => console.log(error)
        );
    }

    addNewEvent() {
    const newEvent: any = {
        time: this.timeInput.value,
        subject: this.subjectInput.value,
        location: this.locationInput.value,
        description: this.descriptionInput.value
    };

    this.events.push(newEvent);

    this.timeInput.setValue('');
    this.subjectInput.setValue('');
    this.locationInput.setValue('');
    this.descriptionInput.setValue('');

    this.modal.hide();
    }

    deleteEvent(event: any) {
    const itemIndex = this.events.findIndex(el => el === event);
    this.events.splice(itemIndex, 1);
    }
}
