package com.example.webdemo;

import com.example.webdemo.model.Book;
import com.example.webdemo.model.Classroom;
import com.example.webdemo.model.Student;
import com.example.webdemo.model.Teacher;
import com.github.javafaker.Faker;
import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;
import org.springframework.context.ApplicationContext;

@SpringBootApplication
public class WebdemoApplication {

	public static void main(String[] args) {
		ApplicationContext context = SpringApplication.run(WebdemoApplication.class, args);
		Student student = context.getBean(Student.class);
		Teacher teacher1 = context.getBean("teacher1", Teacher.class);
		Teacher teacher2 = context.getBean("teacher2", Teacher.class);
		Classroom classroom = context.getBean(Classroom.class);
		System.out.println(classroom);
		System.out.println(student);
	}

}
