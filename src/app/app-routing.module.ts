import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './pages/login/login.component';
import { TaskCreatorComponent } from './components/task-creator/task-creator.component';
import { PageNotFoundComponent } from './components/error_pages/page-not-found/page-not-found.component';
import { SignupComponent } from './pages/signup/signup.component';
import { HomeLayoutComponent } from './layouts/home-layout/home-layout.component';
import { DashboardComponent } from './pages/dashboard/dashboard.component';
import { ProfileComponent } from './pages/profile/profile.component';
import { UniversityListComponent } from './pages/university-list/university-list.component';

const routes: Routes = [
  { path: '', pathMatch: "full", redirectTo: 'dashboard'},
  { 
    title: "Login",
    path: 'login', 
    component: LoginComponent 
  },
  { 
    title: "Signup",
    path: 'signup', 
    component: SignupComponent 
  },
  { 
    title: "Universities",
    path: 'universities', 
    component: UniversityListComponent 
  },
  {
    path: '',
    component: HomeLayoutComponent,
    children: [
      {
        path: 'dashboard',
        component: DashboardComponent
      },
      {
        path: 'profile',
        component: ProfileComponent,
      }
    ]
  },
  { path: '**', component: PageNotFoundComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }