import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {SearchComponent} from "./search.component";
import {TodoResolver} from "../todo.resolver";

const routes: Routes = [
  {path: '', component: SearchComponent, resolve: {todoData : TodoResolver}}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class SearchRoutingModule { }
