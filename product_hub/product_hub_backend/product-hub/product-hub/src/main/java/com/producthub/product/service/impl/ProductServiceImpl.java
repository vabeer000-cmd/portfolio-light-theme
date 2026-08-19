package com.producthub.product.service.impl;

import org.springframework.stereotype.Service;

import com.producthub.product.repository.ProductRepository;
import com.producthub.product.service.ProductService;

@Service
public class ProductServiceImpl implements ProductService{


	private final ProductRepository productRepository;
	
	public ProductServiceImpl(ProductRepository productRepository) {
		this.productRepository = productRepository;
	}

}
