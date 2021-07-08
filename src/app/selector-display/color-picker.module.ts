import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {ColorSelectComponent} from "./color-select/color-select.component";
import {ColorPickerComponent} from "./color-picker.component";


@NgModule({
  declarations: [ColorSelectComponent, ColorPickerComponent],
  exports: [
    ColorPickerComponent
  ],
  imports: [
    CommonModule,
  ]
})
export class ColorPickerModule { }
