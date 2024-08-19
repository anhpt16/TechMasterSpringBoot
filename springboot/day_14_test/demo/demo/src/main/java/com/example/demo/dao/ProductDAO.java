package com.example.demo.dao;

import com.example.demo.model.Product;

import java.util.List;

public interface ProductDAO {
    Product findById(int id);
    List<Product> findAll();
    List<Product> findRelatedProduct(int price, int id);
    List<Product> findProductByName(String keyword);
}
