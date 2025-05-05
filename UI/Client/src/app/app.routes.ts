import { Routes } from '@angular/router';
import { HomeComponent } from './features/Home/home/home.component';
import { MajorManagementComponent } from './features/MajorManagement/Components/major-management/major-management.component';
import { AddMajorComponent } from './features/MajorManagement/Components/add-major/add-major.component';
import { SpecializationManagermentComponent } from './features/SpecializationManagement/Components/specialization-managerment/specialization-managerment.component';
import { DepartmentManagementComponent } from './features/Department/Components/department-management/department-management.component';
import { SubjectManagementComponent } from './features/Subject/Components/subject-management/subject-management.component';

export const routes: Routes = [
    {
        path: '',
        component: HomeComponent,
    },
    {
        path: 'majorManagement',
        component: MajorManagementComponent,
    },
    {
        path: 'specialization',
        component: SpecializationManagermentComponent
    },
    {
        path: 'department',
        component: DepartmentManagementComponent,
    },
    {
        path: 'subject',
        component: SubjectManagementComponent,
    }
];
