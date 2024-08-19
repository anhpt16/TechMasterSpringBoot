package com.example.demo.service.impl;

import com.example.demo.dao.ProductDAO;
import com.example.demo.model.Product;
import com.example.demo.service.ProductService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class ProductServiceImpl implements ProductService {
    @Autowired
    private ProductDAO productDAO;
    @Override
    public Product findProductById(int id) {
        return productDAO.findById(id);
    }

    @Override
    public List<Product> findAllProduct() {
        return productDAO.findAll();
    }

    @Override
    public List<Product> findRelatedProduct(int price, int id) {
        List<Product> products = productDAO.findRelatedProduct(price, id);
        return products;
    }

    @Override
    public List<Product> findProductByKeyword(String name) {
        List<Product> products = productDAO.findProductByName(name);
        return products;
    }
}
