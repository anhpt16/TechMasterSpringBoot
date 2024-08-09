package com.example.webdemo.controller;


import com.example.webdemo.model.Book;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RestController;

import java.util.ArrayList;
import java.util.List;
import java.util.Optional;

@RestController
public class BookController {
    private List<Book> books = new ArrayList<>(List.of(
        new Book(2, "Truyện ma", "Ngạn", 1999),
        new Book(3, "Truyện Doremon", "Ạuki", 1988),
        new Book(4, "Truyện Cười", "Ba con lợn", 2000),
        new Book(5, "Truyện Ngụ Ngôn", "Hoàng", 2001),
        new Book(6, "Truyện Tấm Cám", "Nhiều tác giả", 1990),
        new Book(7, "Truyện Kiều", "Nguyễn Du", 1888),
        new Book(8, "Truyện Lịch Sử", "Lon", 2000)
    ));
    // Lấy danh sách tất cả cuốn sách
    @GetMapping("/books")
    public List<Book> book() {
        return books;
    }
    // Lấy sách theo id
    @GetMapping("/books/{id}")
    public Book bookById(
        @PathVariable int id
    ) {
        return books.stream()
            .filter(book -> book.getId() == id)
            .findFirst()
            .orElse(null);
    }
}
