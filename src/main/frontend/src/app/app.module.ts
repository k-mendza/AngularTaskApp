import { BrowserModule } from '@angular/platform-browser';
import { NgModule, NO_ERRORS_SCHEMA } from '@angular/core';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { AppComponent } from './app.component';
import { MDBBootstrapModule } from 'angular-bootstrap-md';
import { EventComponent } from './components/event/event.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import {EventService} from "./components/event/event.service";
import { BasicAsideComponent } from './components/basic-aside/basic-aside.component';

@NgModule({
    declarations: [
        AppComponent,
        EventComponent,
        BasicAsideComponent,
    ],
    imports: [
        BrowserModule,
        BrowserAnimationsModule,
        MDBBootstrapModule.forRoot(),
        FormsModule,
        ReactiveFormsModule,
        HttpClientModule,
    ],
    providers: [EventService],
    bootstrap: [AppComponent],
    schemas: [ NO_ERRORS_SCHEMA ]
})
export class AppModule { }
