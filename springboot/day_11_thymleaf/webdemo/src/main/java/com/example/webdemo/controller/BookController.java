package com.example.webdemo.controller;


import com.example.webdemo.model.Book;
import com.example.webdemo.model.PageResponse;
import com.example.webdemo.model.PageResponseImpl;
import com.github.javafaker.Faker;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.stereotype.Controller;
import org.springframework.ui.Model;
import org.springframework.web.bind.annotation.*;
import org.springframework.web.servlet.View;

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
    private List<Book> books = new ArrayList<>();
    public BookController() {
        Faker faker = new Faker();
        for (int i = 0; i < 30; i++) {
            Book book = Book.builder()
                .id(i)
                .title(faker.book().title())
                .author(faker.book().author())
                .year(faker.number().numberBetween(1990, 2020))
                .build();
            books.add(book);
        }
    }

    // Phân trang
    // currentPage
    // pageSize
    // totalElement
    // totalPage
    @GetMapping("/books")
    public String initBook(
        @RequestParam(required = false, defaultValue = "1") int page,
        @RequestParam(required = false, defaultValue = "10") int size,
        Model model
    ) {
        PageResponse<Book> pageResponse = PageResponseImpl.<Book>builder()
            .currentPage(page)
            .pageSize(size)
            .data(books)
            .build();
        model.addAttribute("books", pageResponse);
        return "booklist";
    }


    @GetMapping("/home")
    public String hone(Model model) {
        model.addAttribute("books", books);
        return "listbook";
    }

    @GetMapping("/books/delete/{id}")
    public String editBook(
        Model model,
        @PathVariable int id
    ){
        books.removeIf(book -> book.getId() == id);
        model.addAttribute("books", books);
        return "listbook";
    }
    // Lấy danh sách tất cả cuốn sách
//    @GetMapping("/books")
//    @ResponseBody
//    public List<Book> book() {
//        return books;
//    }

    //Sử dụng response entity
//    @GetMapping("/books")
//    @ResponseBody
//    public ResponseEntity<List<Book>> getAllBook() {
//        return new ResponseEntity<>(books, HttpStatus.CREATED);
//    }

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
//    @GetMapping("/books/{id}")
//    @ResponseBody
//    public ResponseEntity<Book> bookById(
//        @PathVariable int id
//    ) {
//        for (Book b : books) {
//            if (b.getId() == id){
//                return new ResponseEntity<>(b, HttpStatus.CREATED);
//            }
//        }
//        return new ResponseEntity<>(HttpStatus.NOT_FOUND);
//    }

    @GetMapping("/books/{id}")
    public String getBookById(
        @PathVariable int id,
        Model model
    ) {
        Book bookById = books.stream()
            .filter(book -> book.getId() == id)
            .findFirst()
            .orElse(null);
        List<Book> bookrelated = books.stream()
            .filter(book ->
                (
                    (book.getId() != bookById.getId())
                    && (book.getAuthor().equals(bookById.getAuthor()))
                )
            )
            .sorted(((o1, o2) -> Integer.compare(o2.getYear(), o1.getYear())))
            .limit(4)
            .collect(Collectors.toList());
        model.addAttribute("book", bookById);
        model.addAttribute("bookrelated", bookrelated);
        return "bookdetail";
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
//    @GetMapping("/books/searchByTitle")
//    public ResponseEntity<List<Book>> searchByTitle(
//        @RequestParam String keyword
//    ) {
//        List<Book> booksSearched = books.stream()
//            .filter(book -> book.getTitle().contains(keyword))
//            .collect(Collectors.toList());
//        if (booksSearched == null) {
//            return new ResponseEntity<>(HttpStatus.NOT_FOUND);
//        }
//        return new ResponseEntity<>(booksSearched, HttpStatus.CREATED);
//    }

    @GetMapping("/books/searchByTitle")
    public String searchByTitle(
        @RequestParam String title,
        Model model
    ) {
        List<Book> booksSearched = books.stream()
            .filter(book -> book.getTitle().contains(title))
            .collect(Collectors.toList());
        model.addAttribute("books", booksSearched);
        return "listbook";
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
