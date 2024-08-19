package com.example.demo.dao.impl;

import com.example.demo.dao.ProductDAO;
import com.example.demo.database.ProductDB;
import com.example.demo.model.Product;
import org.springframework.stereotype.Repository;

import java.util.List;
import java.util.stream.Collectors;

@Repository
public class ProductDAOImpl implements ProductDAO {
    @Override
    public Product findById(int id) {
        return ProductDB.products.stream()
            .filter(product -> product.getId() == id)
            .findFirst()
            .orElse(null);
    }

    @Override
    public List<Product> findAll() {
        return ProductDB.products;
    }

    @Override
    public List<Product> findRelatedProduct(int price, int id) {
        return ProductDB.products.stream()
            .filter(product -> ((product.getPrice() <= price - 1000 || product.getPrice() >= price + 1000) && (product.getId() != id)))
            .limit(4)
            .collect(Collectors.toList());
    }

    @Override
    public List<Product> findProductByName(String keyword) {
        return ProductDB.products.stream()
            .filter(product -> product.getName().contains(keyword))
            .collect(Collectors.toList());
    }
}
