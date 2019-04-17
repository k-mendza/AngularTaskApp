package com.softsource.service;

import com.softsource.domain.Event;
import com.softsource.repository.EventRepository;
import org.springframework.stereotype.Service;

@Service
public class EventServiceImpl implements EventService{

    private final EventRepository eventRepository;

    public EventServiceImpl(EventRepository eventRepository) {
        this.eventRepository = eventRepository;
    }

    @Override
    public Iterable<Event> list() {
        return this.eventRepository.findAll();
    }

    @Override
    public Event save(Event task) {
        return this.eventRepository.save(task);
    }

    @Override
    public void delete(Event event) {
        this.eventRepository.delete(event);
    }

}
