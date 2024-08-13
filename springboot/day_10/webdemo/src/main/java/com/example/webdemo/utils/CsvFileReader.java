package com.example.webdemo.utils;

import com.example.webdemo.model.Book;
import org.springframework.stereotype.Component;

import java.util.List;

@Component
public class CsvFileReader implements IFileReader{
    @Override
    public List<Book> readFile(String path) {
        return List.of();
    }
}
