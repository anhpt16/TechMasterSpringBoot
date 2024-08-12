package com.example.webdemo.controller;


import com.example.webdemo.model.Book;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.*;

import java.util.ArrayList;
import java.util.Comparator;
import java.util.List;
import java.util.Optional;
import java.util.stream.Collectors;

/*
- Controller: trả về template
- RestCOntroller: trả về dữ liệu dạng JSON: Controller + ResponseBody
- ResponseBody: chỉ trả về dữ liệu không trả về template
- ResponseEntity<?>: class đại diện cho một đối tượng response

* */

@Controller
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
//    @GetMapping("/books")
//    @ResponseBody
//    public List<Book> book() {
//        return books;
//    }

    //Sử dụng response entity
    @GetMapping("/books")
    @ResponseBody
    public ResponseEntity<List<Book>> getAllBook() {
        return new ResponseEntity<>(books, HttpStatus.CREATED);
    }

    // Lấy sách theo id
//    @GetMapping("/books/{id}")
//    @ResponseBody
//    public Book bookById(
//        @PathVariable int id
//    ) {
//        return books.stream()
//            .filter(book -> book.getId() == id)
//            .findFirst()
//            .orElse(null);
//    }

    // ResponseEntity
    @GetMapping("/books/{id}")
    @ResponseBody
    public ResponseEntity<Book> bookById(
        @PathVariable int id
    ) {
        for (Book b : books) {
            if (b.getId() == id){
                return new ResponseEntity<>(b, HttpStatus.CREATED);
            }
        }
        return new ResponseEntity<>(HttpStatus.NOT_FOUND);
    }

    // Sắp xếp theo năm giảm dần
    @GetMapping("/books/sortByYear")
    public ResponseEntity<List<Book>> sortByYearDesc() {
        List<Book> booksSorted = books.stream()
            .sorted(Comparator.comparingInt(Book::getYear).reversed())
            .collect(Collectors.toList());
        if (booksSorted == null) {
            return new ResponseEntity<>(HttpStatus.NOT_FOUND);
        }
        return new ResponseEntity<>(booksSorted, HttpStatus.CREATED);
    }

    // Tìm kiếm sách theo tên
    @GetMapping("/books/searchByTitle")
    public ResponseEntity<List<Book>> searchByTitle(
        @RequestParam String keyword
    ) {
        List<Book> booksSearched = books.stream()
            .filter(book -> book.getTitle().contains(keyword))
            .collect(Collectors.toList());
        if (booksSearched == null) {
            return new ResponseEntity<>(HttpStatus.NOT_FOUND);
        }
        return new ResponseEntity<>(booksSearched, HttpStatus.CREATED);
    }
    // Tìm kiếm sách xuất bản trong khoảng thời gian
    @GetMapping("/books/between")
    public ResponseEntity<List<Book>> getBetween(
        @RequestParam int start,
        @RequestParam int end
    ) {
        List<Book> bookBetween = books.stream()
            .filter(book -> {
                if (book.getYear() >= start && book.getYear() <= end) {
                    return true;
                }
                return false;
            })
            .collect(Collectors.toList());
        if (bookBetween == null) {
            return new ResponseEntity<>(HttpStatus.NOT_FOUND);
        }
        return new ResponseEntity<>(bookBetween, HttpStatus.CREATED);
    }
}
