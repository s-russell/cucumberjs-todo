import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AuthGuard } from './auth.guard';
import { LoginComponent } from './login/login.component';
import { TodoComponent } from './todo/todo.component';

const routes: Routes = [
  {
    path: "login",
    component: LoginComponent
  },
  {
    path: "todo",
    component: TodoComponent,
    canActivate: [AuthGuard]
  },
  {
    path: "",
    redirectTo: "todo",
    pathMatch: "full"
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
