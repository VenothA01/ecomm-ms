package com.dailycoder.ecomm.productservice.product;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;

import java.util.List;

public interface ProductRepository extends JpaRepository<Product,Integer> {


    List<Product> findAllByIdInOrderById(List<Integer> ids);
}
