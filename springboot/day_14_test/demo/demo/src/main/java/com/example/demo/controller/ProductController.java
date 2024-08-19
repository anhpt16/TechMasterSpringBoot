package com.example.demo.controller;

import com.example.demo.database.ProductDB;
import com.example.demo.model.Product;
import com.example.demo.service.ProductService;
import com.example.demo.utils.PageResponse;
import com.example.demo.utils.PageResponseImpl;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Controller;
import org.springframework.ui.Model;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RequestParam;

import java.util.List;

@Controller
public class ProductController {
    @Autowired
    private ProductService productService;

    @GetMapping("/")
    public String initProduct(
        @RequestParam(required = false, defaultValue = "1") int page,
        @RequestParam(required = false, defaultValue = "12") int size,
        Model model
    ) {
        PageResponse<Product> pageResponse = PageResponseImpl.<Product>builder()
            .currentPage(page)
            .pageSize(size)
            .data(ProductDB.products)
            .build();
        model.addAttribute("products", pageResponse);
        return "product-list";
    }

    @GetMapping("/products/{id}")
    public String getProductById(
        @PathVariable int id,
        Model model
    ) {
        Product product = productService.findProductById(id);
        List<Product> products = productService.findRelatedProduct(product.getPrice(), id);
        model.addAttribute("product", product);
        model.addAttribute("products", products);
        return "product-detail";
    }

    @GetMapping("/products/by-name")
    public String getProductByName(
        @RequestParam(required = false, defaultValue = "1") int page,
        @RequestParam(required = false, defaultValue = "12") int size,
        @RequestParam String keyword,
        Model model
    ) {
        List<Product> products = productService.findProductByKeyword(keyword);
        PageResponse<Product> pageResponse = PageResponseImpl.<Product>builder()
            .currentPage(page)
            .pageSize(size)
            .data(products)
            .build();
        model.addAttribute("products", pageResponse);
        return "product-list";
    }
}
