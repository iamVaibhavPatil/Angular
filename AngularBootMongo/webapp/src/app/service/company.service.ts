import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class CompanyService {

  private baseUrl = 'http://localhost:8080/api/company';

  constructor(private http: HttpClient) { }

  getCompany(id: number): Observable<Object> {
    return this.http.get(`${this.baseUrl}/${id}`);
  }

  createCompany(company: Object): Observable<Object> {
    return this.http.post(`${this.baseUrl}` + `/create`, company);
  }

  updateCompany(id: number, value: any): Observable<Object> {
    return this.http.put(`${this.baseUrl}/${id}`, value);
  }

  deleteCompany(id: number): Observable<any> {
    return this.http.delete(`${this.baseUrl}/${id}`, { responseType: 'text' });
  }

  getCompaniesList(): Observable<any> {
    return this.http.get(`${this.baseUrl}/all`);
  }

  getCompanyByName(companyName: String): Observable<any> {
    return this.http.get(`${this.baseUrl}/name/${companyName}`);
  }

}
