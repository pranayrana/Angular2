import { Component, OnInit } from '@angular/core';
import { EmployeesService } from './employees.service';
import { Observable } from 'rxjs/Observable';
import { Employee } from './model';

@Component({
  selector: 'app-employees',
  templateUrl: './employees.component.html',
  styleUrls: ['./employees.component.css']
})
export class EmployeesComponent implements OnInit {

  employees: Observable<Employee[]>;
  constructor(
    private employeesService: EmployeesService
  ) { }

  ngOnInit() {
    this.employees = this.employeesService.getEmployees();
  }

}
