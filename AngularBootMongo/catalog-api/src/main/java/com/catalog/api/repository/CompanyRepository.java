package com.catalog.api.repository;

import java.util.List;

import org.springframework.data.mongodb.repository.MongoRepository;
import org.springframework.stereotype.Repository;

import com.catalog.api.model.Company;

@Repository
public interface CompanyRepository extends MongoRepository<Company, String>{
	List<Company> findByCompanyName(String companyName);
}
