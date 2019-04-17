package com.softsource.service;

import com.softsource.domain.Event;
import org.springframework.stereotype.Service;

@Service
public interface EventService {

    Iterable<Event> list();

    Event save(Event event);

    void delete(Event event);
}
