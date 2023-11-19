package com.trilowbyte.app.repositories;

import com.trilowbyte.app.entity.Product;
import org.springframework.data.repository.CrudRepository;

import java.util.List;

public interface ProductRepository extends CrudRepository<Product, Long> {
}
