import { CommonModule } from '@angular/common';
import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { ActivatedRoute } from '@angular/router';
import { Employee } from '../../model/Employee';

@Component({
  selector: 'app-edit-employee',
  imports: [CommonModule,FormsModule],
  templateUrl: './edit-employee.component.html',
  styleUrl: './edit-employee.component.css'
})
export class EditEmployeeComponent implements OnInit{
  employee:Employee=new Employee('','','');

  employeeDetail:any;
  
constructor(private route : ActivatedRoute, private http:HttpClient){

}
  ngOnInit(): void {
     const id = this.route.snapshot.paramMap.get('id');
    console.log("Received ID from route:", id);
    this.getEmployeeById(id);
  }

  getEmployeeById(id:any){
    this.http.get(`http://localhost:8080/employee/search/${id}`).subscribe(data=>{
      console.log(data);
      this.employeeDetail=data;
    })

  }
  OnSubmit() {
    this.http.patch(`http://localhost:8080/employee/update-by-id/3`, this.employee).subscribe({
      next: (response) => {
        alert("Employee updated successfully!");
      },
      error: (error) => {
        alert("Failed to  employee. Please try again.");
        console.error(error);
      }
    });
  }
}
