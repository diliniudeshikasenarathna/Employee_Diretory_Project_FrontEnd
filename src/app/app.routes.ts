import { Routes } from '@angular/router';
import { EmployeeListComponent } from './pages/employee-list/employee-list.component';
import { AddEmployeeComponent } from './pages/add-employee/add-employee.component';
import { EditEmployeeComponent } from './pages/edit-employee/edit-employee.component';
import { HomeComponent } from './pages/home/home.component';

export const routes: Routes = [
    {
        path:"",
        component:HomeComponent

    },
    {
        path:"employee-list",
        component:EmployeeListComponent
    },
    {
        path:"add-employee",
        component:AddEmployeeComponent
    },
    {
        path:"edit-employee",
        component:EditEmployeeComponent
    }
];
