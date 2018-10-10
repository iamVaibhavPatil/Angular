import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { AppRoutingModule } from './app.routing.module';
import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { CreateCompanyComponent } from './create-company/create-company.component';
import { CompanyDetailsComponent } from './company-details/company-details.component';
import { CompaniesListComponent } from './companies-list/companies-list.component';
import { SearchCompanyComponent } from './search-company/search-company.component';

@NgModule({
  declarations: [
    AppComponent,
    CreateCompanyComponent,
    CompanyDetailsComponent,
    CompaniesListComponent,
    SearchCompanyComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    AppRoutingModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
