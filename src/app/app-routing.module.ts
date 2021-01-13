import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LoginComponent } from './components/login/login.component';
import { TaskDetailComponent } from './components/task-manager/task-detail/task-detail.component';
import { TaskManagerComponent } from './components/task-manager/task-manager.component';
import { AuthGuardService } from './service/authguard.service';

const routes: Routes = [
  {path:'',redirectTo:'login',pathMatch:'full'},
  {path:'login',component:LoginComponent},
  { 
    path:'task',
    component:TaskManagerComponent,
    canActivate:[AuthGuardService]
  },
  {
    path:'task/:id',
    component:TaskDetailComponent,
    canActivate:[AuthGuardService]
  },
  {
    path:'logout',
    component:LoginComponent,
    canActivate:[AuthGuardService]
  },



];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
