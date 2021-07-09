import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {TaskDetailsComponent} from "./task-details/task-details.component";
import {TodoResolver} from "../todo.resolver";
import {TodoComponent} from "./todo.component";
import {SelectedItemResolver} from "../selected-item.resolver";

const routes: Routes = [
  {
    path: 'task/:id',
    component: TaskDetailsComponent,
    resolve: {todoData: TodoResolver, selectedItem: SelectedItemResolver}
  },
  {path: '', component: TodoComponent, resolve: {todoData: TodoResolver}}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class TodoRoutingModule {
}
