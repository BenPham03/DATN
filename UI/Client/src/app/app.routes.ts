import { Routes } from '@angular/router';
import { HomeComponent } from './features/Home/home/home.component';
import { MajorManagementComponent } from './features/MajorManagement/Components/major-management/major-management.component';
import { AddMajorComponent } from './features/MajorManagement/Components/add-major/add-major.component';
import { SpecializationManagermentComponent } from './features/SpecializationManagement/Components/specialization-managerment/specialization-managerment.component';
import { DepartmentManagementComponent } from './features/Department/Components/department-management/department-management.component';
import { SubjectManagementComponent } from './features/Subject/Components/subject-management/subject-management.component';
import { CurriculumManagamentComponent } from './features/Curriculum/Components/curriculum-managament/curriculum-managament.component';
import { CurriculumSubjectManagementComponent } from './features/CuriculumSubject/Components/curriculum-subject-management/curriculum-subject-management.component';
import { LoginComponent } from './features/Account/Components/login/login.component';
import { AccountComponent } from './features/Admin/Components/account/account.component';
import { adminGuard, adminOrDeanGuard } from './features/Account/guards/auth.guard';

export const routes: Routes = [
    {
        path: '',
        redirectTo: 'home',
        pathMatch: 'full'
    },
    {
        path: 'home',
        component: HomeComponent,
    },
    {
        path: 'majorManagement',
        component: MajorManagementComponent,
         canActivate: [adminOrDeanGuard], // chỉ admin được vào
    },
    {
        path: 'specialization',
        component: SpecializationManagermentComponent,
         canActivate: [adminOrDeanGuard], // chỉ admin được vào
    },
    {
        path: 'department',
        component: DepartmentManagementComponent,
         canActivate: [adminOrDeanGuard], // chỉ admin được vào
    },
    {
        path: 'subject',
        component: SubjectManagementComponent,
         canActivate: [adminOrDeanGuard], // chỉ admin được vào
    },
    {
        path: 'curriculum',
        component: CurriculumManagamentComponent,
         canActivate: [adminOrDeanGuard], // chỉ admin được vào
    },
    {
        path: 'curriculumSubject',
        children: [
        { path: '', component: CurriculumSubjectManagementComponent }, // handles 'curriculumSubject'
        { path: ':curriculumId', component: CurriculumSubjectManagementComponent } // handles 'curriculumSubject/:curriculumId'
        ],
        // component: CurriculumSubjectManagementComponent,
         canActivate: [adminOrDeanGuard], // chỉ admin được vào
    },
    {
        path: 'login',
        component: LoginComponent,
    },
    {
        path: 'account',
        component: AccountComponent,
         canActivate: [adminGuard], // chỉ admin được vào
    }
];
