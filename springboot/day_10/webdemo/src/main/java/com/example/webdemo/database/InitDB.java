package com.example.webdemo.database;

import com.example.webdemo.utils.IFileReader;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.beans.factory.annotation.Qualifier;
import org.springframework.boot.CommandLineRunner;
import org.springframework.stereotype.Component;

@Component
public class InitDB implements CommandLineRunner {
    @Autowired
    @Qualifier("jsonFileReader")
    private IFileReader fileReader;
    @Override
    public void run(String... args) throws Exception {
        BookDB.books = fileReader.readFile("books.json");
    }
}
