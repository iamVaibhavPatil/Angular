package com.catalog.api.model;

import org.springframework.data.annotation.Id;
import org.springframework.data.mongodb.core.mapping.Document;

import lombok.Data;

@Document(collection = "company")
@Data
public class Company {

	@Id
	private String id;
	
	private String companyCode;
	private String companyName;
	private String expiryReturnsAllowed;
	private String verified;
	private String status;
}
