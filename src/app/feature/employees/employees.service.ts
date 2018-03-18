import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs/Observable';

import { Employee } from './model';

@Injectable()
export class EmployeesService {

  apiUrl = 'http://localhost:1800/api/demo/';
  constructor(
    private http: HttpClient
  ) { }

  getEmployees(): Observable<Employee[]> {
    const url = `${this.apiUrl}getemployees`;
    return this.http.get <Employee[]>(url);
  }

}
