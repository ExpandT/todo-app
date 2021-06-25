import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { TaskDetailsComponent } from './task-details/task-details.component'
import { TodoComponent } from './todo/todo.component'
import { TodoResolver } from './todo.resolver';

const routes: Routes = [
  {path: 'task/:id',component: TaskDetailsComponent, resolve: {todoData: TodoResolver}},
  {path: 'todo', component: TodoComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
