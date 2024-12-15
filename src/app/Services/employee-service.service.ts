import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class EmployeeServiceService {
  private baseUrl = 'http://localhost:5000/spi/employees';

  constructor(private http: HttpClient) { 

  }

  getEmployees(): Observable<Employee[]>{
    return this.http.get<Employee[]>(this.baseUrl);
  }

  addEmployees(employee: Employee) : Observable<Employee>{
    return this.http.post<Employee>(this.baseUrl,employee);
  } 

  updateEmployee(id: number, employee): Observable<Employee>{
    return this.http.put<Employee>(`${this.baseUrl}/${id}`, employee);
  }

  deleteEmployee(id: number): Observable<void>{
    return this.http.delete<void>(`${this.baseUrl}/${id}`);
  }
}
