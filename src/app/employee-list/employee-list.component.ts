import { Component, OnInit } from '@angular/core';
import { EmployeeServiceService } from '../Services/employee-service.service';
import { EmployeeFormComponent } from '../employee-form/employee-form.component';

@Component({
  selector: 'app-employee-list',
  imports: [EmployeeServiceService, EmployeeListComponent, EmployeeFormComponent],
  templateUrl: './employee-list.component.html',
  styleUrl: './employee-list.component.css'
})
export class EmployeeListComponent implements OnInit{
  employees: Employee[] = [];

  constructor(private employeeSerice: EmployeeServiceService){}

  ngOnInIt(): void{
    this.employeeSerice.getEmployees().subscribe((data) => {
      this.employees = data;
    })
  }
}
