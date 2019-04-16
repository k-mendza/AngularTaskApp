package com.softsource;

import com.softsource.domain.Event;
import com.softsource.service.EventService;
import org.springframework.boot.CommandLineRunner;
import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;
import org.springframework.context.annotation.Bean;

import java.time.LocalDate;

@SpringBootApplication
public class TasksApplication {

	public static void main(String[] args) {
		SpringApplication.run(TasksApplication.class, args);
	}

	@Bean
	CommandLineRunner eventRunner(EventService eventService) {
		return args -> {
			eventService.save(new Event(1L,"08:00", "Breakfast with Simon", "Lounge Cafe", "Discuss Q3 targets"));
			eventService.save(new Event(2L,"08:30", "Daily Standup Meeting (recurring)", "Warsaw Spire Office", null));
		};
	}

}
