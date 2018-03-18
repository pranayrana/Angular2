import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { EmployeesRoutingModule } from './employees-routing.module';
import { EmployeesComponent } from './employees.component';
import { EmployeesService } from './employees.service';


@NgModule({
  imports: [
    CommonModule,
    EmployeesRoutingModule
  ],
  declarations: [EmployeesComponent],
  providers: [EmployeesService]
})
export class EmployeesModule { }
