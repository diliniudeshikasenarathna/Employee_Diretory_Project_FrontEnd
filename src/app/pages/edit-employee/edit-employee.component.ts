import { CommonModule } from '@angular/common';
import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-edit-employee',
  imports: [CommonModule,FormsModule],
  templateUrl: './edit-employee.component.html',
  styleUrl: './edit-employee.component.css'
})
export class EditEmployeeComponent implements OnInit{
  
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
    })

  }
  OnSubmit(){
    
  }
}
