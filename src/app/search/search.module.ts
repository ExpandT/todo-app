import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';

import {SearchRoutingModule} from './search-routing.module';
import {FormsModule, ReactiveFormsModule} from "@angular/forms";
import {DropdownComponent} from "./dropdown/dropdown.component";
import {SearchComponent} from "./search.component";


@NgModule({
  declarations: [SearchComponent,DropdownComponent],
  imports: [
    CommonModule,
    SearchRoutingModule,
    ReactiveFormsModule,
    FormsModule
  ]
})
export class SearchModule { }
