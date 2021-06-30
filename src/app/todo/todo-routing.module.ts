import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {TaskDetailsComponent} from "./task-details/task-details.component";
import {TodoResolver} from "../todo.resolver";
import {TodoComponent} from "./todo.component";

const routes: Routes = [
  {path: 'task/:id',component: TaskDetailsComponent, resolve: {todoData: TodoResolver}},
  {path: '', component: TodoComponent}
];
@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class TodoRoutingModule { }
