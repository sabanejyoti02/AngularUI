import { Component } from '@angular/core';
import { EmployeeServiceService } from '../Services/employee-service.service';

@Component({
  selector: 'app-employee-form',
  imports: [],
  templateUrl: './employee-form.component.html',
  styleUrl: './employee-form.component.css'
})
export class EmployeeFormComponent {

  employee = {name: '', position: '', salary: 0};

  constructor(private employeeService: EmployeeServiceService){}

  addEmployee(): void{
    this.employeeService.addEmployees(this.employee).subscribe();
  }
}
