import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {TodoComponent} from "./todo.component";
import {TaskDetailsComponent} from "./task-details/task-details.component";
import {MaterialModule} from "../material/material.module";
import {FormsModule, ReactiveFormsModule} from "@angular/forms";
import {TodoRoutingModule} from "./todo-routing.module";
import {ColorSelectComponent} from "../selector-display/color-select/color-select.component";

@NgModule({
  declarations: [
    TodoComponent,
    TaskDetailsComponent,
    ColorSelectComponent,
  ],
  imports: [
    CommonModule,
    MaterialModule,
    ReactiveFormsModule,
    FormsModule,
    TodoRoutingModule,
  ]
})
export class TodoModule {
}
