package com.catalog.api.controller;

import java.util.List;

import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.catalog.api.model.Company;
import com.catalog.api.service.CompanyService;

@CrossOrigin(origins = "http://localhost:4200")
@RestController
@RequestMapping("/api")
public class CompanyController {

	private CompanyService companyService;
	
	public CompanyController(final CompanyService companyService) {
		this.companyService = companyService;
	}
	
	@GetMapping("/companies")
	public List<Company> getAllCompanies() {
		return companyService.getAllCompanies();
	}
	
	@PostMapping("/company/create")
	public Company postCompany(@RequestBody Company company) {
		return companyService.postCompany(company);
	}
	
	@DeleteMapping("/company/{id}")
	public ResponseEntity<String> deleteCompany(@PathVariable("id") String id) {
		companyService.deleteCompany(id);
		return new ResponseEntity<>("Company has been deleted!", HttpStatus.OK);
	}	
	
	@GetMapping("company/name/{companyName}")
	public List<Company> findByCompanyName(@PathVariable String companyName) {
		List<Company> companies = companyService.findByCompanyName(companyName);
		return companies;
	}
	
	@PutMapping("/company/{id}")
	public ResponseEntity<Company> updateCompany(@PathVariable("id") String id, @RequestBody Company company) {
		Company _company = companyService.updateCompany(id, company);
		if(_company != null) {
			return new ResponseEntity<>(_company, HttpStatus.OK);
		} else {
			return new ResponseEntity<>(HttpStatus.NOT_FOUND);
		}
	}
}
