import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LoginComponent } from './components/login/login.component';
import { TaskDetailComponent } from './components/task-manager/task-detail/task-detail.component';
import { TaskManagerComponent } from './components/task-manager/task-manager.component';

const routes: Routes = [
  {path:'login',component:LoginComponent},
  {path:'task',component:TaskManagerComponent},
  {path:'task/:id',component:TaskDetailComponent}


];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
