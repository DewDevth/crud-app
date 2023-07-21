import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root',
})
export class EmployeeService {
  constructor(private _http: HttpClient) {}

  apiUrl = environment.apiUrl;

  //add employee
  addEmployee(data: any): Observable<any> {
    return this._http.post(`${this.apiUrl}/employees`, data);
  }
  updateEmployee(id: number, data: any): Observable<any> {
    return this._http.put(`${this.apiUrl}/employees/${id}`, data);
  }
  //get employee list
  getEmployeeList(): Observable<any> {
    return this._http.get(`${this.apiUrl}/employees`);
  }
  // delete
  deleteEmployee = (id: number): Observable<any> => {
    console.log(id);
    return this._http.delete(`${this.apiUrl}/employees/${id}`);
  };
}
