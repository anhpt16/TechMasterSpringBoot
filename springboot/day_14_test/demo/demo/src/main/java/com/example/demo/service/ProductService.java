package com.example.demo.service;

import com.example.demo.model.Product;

import java.util.List;

public interface ProductService {
    Product findProductById(int id);
    List<Product> findAllProduct();
    List<Product> findRelatedProduct(int price, int id);
    List<Product> findProductByKeyword(String name);
}
