package com.catalog.api.model;

import org.springframework.data.annotation.Id;
import org.springframework.data.mongodb.core.mapping.Document;

import lombok.Data;

@Document(collection = "product")
@Data
public class Product {

	@Id
	private String id;
	
	private String productName;
	private String productGenericName;
	private String productDescription;
	private Company company;
	private String hsnNumber;
}
