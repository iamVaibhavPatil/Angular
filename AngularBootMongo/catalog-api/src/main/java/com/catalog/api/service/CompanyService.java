package com.catalog.api.service;

import java.util.ArrayList;
import java.util.List;
import java.util.Optional;

import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.stereotype.Service;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RequestBody;

import com.catalog.api.model.Company;
import com.catalog.api.repository.CompanyRepository;

@Service
public class CompanyService {

	private CompanyRepository companyRepository;
	
	public CompanyService(final CompanyRepository companyRepository) {
		this.companyRepository = companyRepository;
	}
	
	public List<Company> getAllCompanies() {
		List<Company> companies = new ArrayList<>();
		companyRepository.findAll().forEach(companies::add);
		return companies;
	}
 
	public Company postCompany(Company company) {
		Company _customer = companyRepository.save(company);
		return _customer;
	}
	
	public void deleteCompany(String id) {
		companyRepository.deleteById(id);
	}

	public List<Company> findByCompanyName(String companyName) {
		return companyRepository.findByCompanyName(companyName);
	}

	public Company updateCompany(@PathVariable("id") String id, @RequestBody Company company) {
		Optional<Company> companyData = companyRepository.findById(id);
		if (companyData.isPresent()) {
			Company _company = companyData.get();
			_company.setCompanyCode(company.getCompanyCode());
			_company.setCompanyName(company.getCompanyName());
			_company.setExpiryReturnsAllowed(company.getExpiryReturnsAllowed());
			_company.setStatus(company.getStatus());
			_company.setVerified(company.getVerified());
			return companyRepository.save(_company);
		} else {
			return null;
		}
	}
}
