import { CommonModule } from '@angular/common';
import { HttpClient } from '@angular/common/http';
import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { Employee } from '../../model/Employee';

@Component({
  selector: 'app-add-employee',
  imports: [CommonModule,FormsModule],
  templateUrl: './add-employee.component.html',
  styleUrl: './add-employee.component.css'
})
export class AddEmployeeComponent {

  employee:Employee=new Employee('','','');
  constructor(private http: HttpClient){

  }

  OnSubmit() {
    this.http.post("http://localhost:8080/employee/add", this.employee).subscribe({
      next: (response) => {
        alert("Employee added successfully!");
      },
      error: (error) => {
        alert("Failed to add employee. Please try again.");
        console.error(error);
      }
    });
  }
  
 

}
