package com.softsource.service;

import com.softsource.domain.Task;
import org.springframework.stereotype.Service;

@Service
public interface TaskService {

    Iterable<Task> list();

    Task save(Task task);

}
