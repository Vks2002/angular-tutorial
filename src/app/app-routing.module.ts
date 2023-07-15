import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './components/login/login.component';
import { TaskCreatorComponent } from './components/task-creator/task-creator.component';
import { PageNotFoundComponent } from './components/error_pages/page-not-found/page-not-found.component';

const routes: Routes = [
  { path: '', pathMatch: "full", redirectTo: 'tools/task-creator'},
  { 
    title: "Login Page",
    path: 'login', 
    component: LoginComponent 
  },
  { 
    title: "Task Creator",
    path: 'tools', 
    children: [
      { path: 'task-creator', component: TaskCreatorComponent }
    ]
  },
  { path: '**', component: PageNotFoundComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
