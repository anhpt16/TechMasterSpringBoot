package com.example.webdemo;

import com.example.webdemo.model.Book;
import com.github.javafaker.Faker;
import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;

@SpringBootApplication
public class WebdemoApplication {

	public static void main(String[] args) {
		SpringApplication.run(WebdemoApplication.class, args);
		Faker faker = new Faker();
		System.out.println(faker.name().fullName());
		Book book1 = Book.builder()
			.id(1)
			.title("Truyện cổ tích")
			.author("J.Michel")
			.year(1954)
			.build();
		System.out.println(book1);
	}

}
