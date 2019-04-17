package com.softsource.controller;

import com.softsource.domain.Event;
import com.softsource.service.EventService;
import org.springframework.web.bind.annotation.*;

@RestController
@RequestMapping("/api/events")
public class EventController {

    private final EventService eventService;

    public EventController(EventService eventService) {
        this.eventService = eventService;
    }

    @GetMapping(value = {"", "/"})
    public Iterable<Event> getEventList() {
        return eventService.list();
    }

    @PostMapping("/save")
    public Event saveEvent(@RequestBody Event event) {
        return this.eventService.save(event);
    }

    @PostMapping("/delete")
    public void deleteEvent(@RequestBody Event event) {
        this.eventService.delete(event);
    }
}
