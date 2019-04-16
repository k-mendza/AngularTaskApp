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
    public Iterable<Event> list() {
        return eventService.list();
    }

    @PostMapping("/save")
    public Event saveTask(@RequestBody Event task) {
        return this.eventService.save(task);
    }
}
