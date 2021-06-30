import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { TaskDetailsComponent } from './task-details/task-details.component';
import { TodoComponent } from './todo/todo.component';
import { ErrorPageComponent } from "./error-page/error-page.component";
import { HomeComponent } from "./home/home.component";
import { TodoResolver } from './todo.resolver';

const routes: Routes = [
  {path: 'task/:id',component: TaskDetailsComponent, resolve: {todoData: TodoResolver}},
  {path: 'todo', component: TodoComponent},
  {path: 'home', component: HomeComponent},
  {path: '404', component: ErrorPageComponent},
  {path: '', component: HomeComponent},
  {path: '**', redirectTo: '404', pathMatch: 'full'}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
