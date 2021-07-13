import {ChangeDetectionStrategy, Component, EventEmitter, Input, Output} from '@angular/core';
import {ColorsList} from "../../share/colors";
import {FormControl, Validators} from "@angular/forms";


@Component({
  selector: 'color-control-dropdown-color-select',
  templateUrl: './color-select.component.html',
  styleUrls: ['./color-select.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class ColorSelectComponent {

  @Input() colorsList!: ColorsList[];

  @Input() set colorFromRadioButton(value: string) {
    this.selectedColor = value;
  };

  @Output() isSelected = new EventEmitter<boolean>();
  @Output() shareColor = new EventEmitter<string>();

  selectedColor: string = '#FFFFFF';

   input = new FormControl('', Validators.pattern(/^[a-zA-Z0-9#]*$/));

  colorPickerState: boolean = false;
  isOpened: boolean = true;

  changeArrowState() {
    if (!this.isOpened) {
      this.isOpened = true;
      this.colorPickerState = !this.colorPickerState;
    }
  }

  showColorPicker() {
    this.isOpened = !this.isOpened;
    this.colorPickerState = !this.colorPickerState;
  }

  onSelect(value: string) {
    this.isOpened = !this.isOpened;
    this.selectedColor = value;
    this.colorPickerState = !this.colorPickerState;
    const isSelectedValue = this.selectedColor == "#FFFFFF";
    this.shareColor.emit(this.selectedColor);
    this.isSelected.emit(isSelectedValue);
  }

  onFilterColors(value: string):  ColorsList[]{
    let color = this.colorsList.filter((color: ColorsList) => color.value.replace(/\s/g, '').toLowerCase().indexOf(value.replace(/\s/g, '').toLowerCase()) === 0)
    if(color.length !== 7 ){
      this.isSelected.emit(true);
    }
    return color;
  }

  colorsCompare(colorValue: string): boolean {
    return this.selectedColor === colorValue;
  }

  onFormSubmit(value: string){
    if(value === null){
      return;
    }
    let color = this.onFilterColors(value);
      this.selectedColor = color.map((res ) => res.value).toString();
      const isSelectedValue = this.selectedColor == "#FFFFFF";
      this.shareColor.emit(this.selectedColor);
      if(this.selectedColor.length == 7){
        this.isSelected.emit(isSelectedValue);
      }
      this.input.reset()
  }
}
