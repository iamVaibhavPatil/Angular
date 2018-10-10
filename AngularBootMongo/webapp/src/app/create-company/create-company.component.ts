import { Component, OnInit } from '@angular/core';
import { Company } from '../model/company';
import { CompanyService } from '../service/company.service';

@Component({
  selector: 'app-create-company',
  templateUrl: './create-company.component.html',
  styleUrls: ['./create-company.component.css']
})
export class CreateCompanyComponent implements OnInit {

  company: Company = new Company();
  submitted = false;

  constructor(private companyService: CompanyService) { }

  ngOnInit() {
  }

  createNewCompany(): void {
    this.submitted = false;
    this.company = new Company();
  }

  save(): void {
    this.companyService.createCompany(this.company)
        .subscribe(data => console.log(data), error => console.log(error));
    this.company = new Company();
  }

  onSubmit(): void {
    this.submitted = true;
    this.save();
  }

}
