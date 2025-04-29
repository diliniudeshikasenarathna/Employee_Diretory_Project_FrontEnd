import { CommonModule } from '@angular/common';
import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { Employee } from '../../model/Employee';
import { Router } from '@angular/router';



@Component({
  selector: 'app-employee-list',
  standalone: true,
  imports: [CommonModule,FormsModule],
  templateUrl: './employee-list.component.html',
  styleUrl: './employee-list.component.css'
})
export class EmployeeListComponent {

  employeeList:any []=[];
  constructor(private http: HttpClient,private router: Router){

    this.getAllEmployee();
  }
  getAllEmployee(){
    this.http.get<any[]>("http://localhost:8080/employee/get-all").subscribe(data=>{
      console.log(data);
      this.employeeList=data;
    })
  }
  onUpdate(id:number){
    this.router.navigate(["edit-employee", id]);


  }
  onDelete(id: number) {
    this.http.delete(`http://localhost:8080/employee/delete/${id}`).subscribe({
      next: () => {
        alert("Employee deleted successfully");
      },
      error: err => {
        alert("Error deleting employee:");
      }
    });
    this.getAllEmployee();

  }

}
