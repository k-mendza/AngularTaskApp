package com.softsource;

import com.softsource.domain.Task;
import com.softsource.service.TaskService;
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
	CommandLineRunner runner(TaskService taskService) {
		return args -> {
			taskService.save( new Task(1L,"Task1", LocalDate.now(), true));
			taskService.save( new Task(2L,"Task2", LocalDate.now(), false));
		};
	}

}
