import { Routes } from '@angular/router';
import { HomeComponent } from './features/Home/home/home.component';
import { MajorManagementComponent } from './features/MajorManagement/major-management/major-management.component';
import { AddMajorComponent } from './features/MajorManagement/add-major/add-major.component';

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
        path: 'addMajor',
        component: AddMajorComponent,
    }
];
