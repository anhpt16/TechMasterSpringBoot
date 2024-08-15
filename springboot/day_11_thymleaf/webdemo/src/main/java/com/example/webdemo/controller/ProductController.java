package com.example.webdemo.controller;


import com.example.webdemo.model.Product;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.ResponseBody;

import java.util.ArrayList;
import java.util.Comparator;
import java.util.List;
import java.util.stream.Collectors;

@Controller
public class ProductController {
    private List<Product> products = new ArrayList<>(List.of(
        new Product("SP01", "Trà sữa", "Trà sữa matcha XXL", 1000, "Mixue"),
        new Product("SP02", "Trà tranh", "Trà tranh L", 500, "Mixue"),
        new Product("SP03", "Trà đá", "Trà đá 1L", 10, "Vỉa hè"),
        new Product("SP04", "Trà đào", "Trà đào XL", 20, "Vỉa hè"),
        new Product("SP05", "Kem dâu", "Kem dâu L", 30, "Mixue"),
        new Product("SP06", "Kem socola", "Kem socola L", 30, "Mixue")
    ));

    @GetMapping("/products/{id}")
    @ResponseBody
    public ResponseEntity<Product> getProductById(
        @PathVariable String id
    ) {
        Product productById = products.stream()
            .filter(product -> product.getId().equals(id))
            .findFirst()
            .orElse(null);
        if (productById == null) {
            return new ResponseEntity<>(HttpStatus.NOT_FOUND);
        }
        return new ResponseEntity<>(productById, HttpStatus.CREATED);
    }

    @GetMapping("/products/name-starts/{prefix}")
    @ResponseBody
    public ResponseEntity<List<Product>> getProductByPrefix(
        @PathVariable String prefix
    ) {
        List<Product> productsByPrefix = products.stream()
            .filter(product -> product.getName().startsWith(prefix))
            .collect(Collectors.toList());
        if (productsByPrefix.isEmpty()) {
            return new ResponseEntity<>(HttpStatus.NOT_FOUND);
        }
        return new ResponseEntity<>(productsByPrefix, HttpStatus.CREATED);
    }

    @GetMapping("/products/price/{min}/{max}")
    @ResponseBody
    public ResponseEntity<List<Product>> getProductByPrices(
        @PathVariable int min,
        @PathVariable int max
    ) {
        List<Product> productsByPrice = products.stream()
            .filter(product -> (product.getPrice() >= min && product.getPrice() <= max))
            .collect(Collectors.toList());
        if (productsByPrice.isEmpty()) {
            return new ResponseEntity<>(HttpStatus.NOT_FOUND);
        }
        return new ResponseEntity<>(productsByPrice, HttpStatus.CREATED);
    }

    @GetMapping("/products/brand/{brand}")
    @ResponseBody
    public ResponseEntity<List<Product>> getProductByBrand(
        @PathVariable String brand
    ) {
        List<Product> producsByBrand = products.stream()
            .filter(product -> product.getBrand().equals(brand))
            .collect(Collectors.toList());
        if (producsByBrand.isEmpty()) {
            return new ResponseEntity<>(HttpStatus.NOT_FOUND);
        }
        return new ResponseEntity<>(producsByBrand, HttpStatus.CREATED);
    }

    @GetMapping("/products/brand/{brand}/max-price")
    @ResponseBody
    public ResponseEntity<Product> getProductMaxPrice(
        @PathVariable String brand
    ) {
        int maxPrice = 0;
        Product productByMaxPrice = products.stream()
            .filter(product -> (product.getBrand().equals(brand)))
            .sorted(Comparator.comparing(Product::getPrice).reversed())
            .findFirst()
            .orElse(null);
        if (productByMaxPrice == null) {
            return new ResponseEntity<>(HttpStatus.NOT_FOUND);
        }
        return new ResponseEntity<>(productByMaxPrice, HttpStatus.CREATED);
    }
}
