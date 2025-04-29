import { CommonModule, NgFor } from '@angular/common';
import { HttpClient } from '@angular/common/http';
import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-employee-list',
  imports: [CommonModule,FormsModule],
  templateUrl: './employee-list.component.html',
  styleUrl: './employee-list.component.css'
})
export class EmployeeListComponent {

  employeeList:any []=[];
  constructor(private http: HttpClient){

    this.getAllEmployee();
  }
  getAllEmployee(){
    this.http.get<any[]>("http://localhost:8080/employee/get-all").subscribe(data=>{
      console.log(data);
      this.employeeList=data;
    })
  }

}
