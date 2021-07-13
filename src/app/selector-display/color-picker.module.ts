import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {ColorSelectComponent} from "./color-select/color-select.component";
import {ColorPickerComponent} from "./color-picker.component";
import {ReactiveFormsModule} from "@angular/forms";
import {MatFormFieldModule} from "@angular/material/form-field";
import {MaterialModule} from "../material/material.module";


@NgModule({
  declarations: [ColorSelectComponent, ColorPickerComponent],
  exports: [
    ColorPickerComponent
  ],
    imports: [
        CommonModule,
        ReactiveFormsModule,
        MatFormFieldModule,
        MaterialModule
    ]
})
export class ColorPickerModule { }
