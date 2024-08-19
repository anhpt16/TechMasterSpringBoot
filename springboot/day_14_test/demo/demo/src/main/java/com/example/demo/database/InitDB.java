package com.example.demo.database;

import com.example.demo.utils.IFileReader;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.beans.factory.annotation.Qualifier;
import org.springframework.boot.CommandLineRunner;
import org.springframework.stereotype.Component;

@Component
public class InitDB implements CommandLineRunner {
    @Autowired
    private IFileReader jsonFileReader;
    @Override
    public void run(String... args) throws Exception {
        ProductDB.products = jsonFileReader.readFile("products.json");
//        System.out.println(ProductDB.products.size());
//        ProductDB.products.forEach(product -> System.out.println(product.toString()));
    }
}
