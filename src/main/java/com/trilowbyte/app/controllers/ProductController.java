package com.trilowbyte.app.controllers;

import com.trilowbyte.app.entity.Product;
import com.trilowbyte.app.entity.ProductAdditionalInfo;
import com.trilowbyte.app.repositories.AdditionalItemInfoRepository;
import com.trilowbyte.app.repositories.ProductRepository;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
public class ProductController {

    private final ProductRepository productRepository;
    private final AdditionalItemInfoRepository additionalItemInfoRepository;

    public ProductController(ProductRepository productRepository, AdditionalItemInfoRepository additionalItemInfoRepository) {
        this.productRepository = productRepository;
        this.additionalItemInfoRepository = additionalItemInfoRepository;
    }

//    @CrossOrigin
//    @PostMapping(value = "/addProductWithInfo")
//    public void addProductWithInfo(@)
    @CrossOrigin
    @PostMapping(value = "/addProduct")
    public void addProduct(@RequestBody Product product) {
        productRepository.save(product);
    }
    @CrossOrigin
    @GetMapping(value = "/getAllProducts")
    public List<Product> getALlProducts() {
        return (List<Product>) productRepository.findAll();
    }
    @CrossOrigin
    @DeleteMapping(value = "/deleteItem")
    public void deleteItemById(@RequestParam Long id) {
        productRepository.deleteById(id);
    }
    @CrossOrigin
    @GetMapping(value = "/getAllProductsInfos")
    public List<ProductAdditionalInfo> getALlProductsInfo() {
        return (List<ProductAdditionalInfo>) additionalItemInfoRepository.findAll();
    }
    @CrossOrigin
    @PostMapping(value = "/addInfo")
    public void addInfo(@RequestBody ProductAdditionalInfo productAdditionalInfo) {
        additionalItemInfoRepository.save(productAdditionalInfo);
    }
 }
