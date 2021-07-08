import {ChangeDetectionStrategy, Component, EventEmitter, Input, Output} from '@angular/core';
import {ColorsList} from "../../share/colors";

@Component({
  selector: 'color-control-dropdown-color-select',
  templateUrl: './color-select.component.html',
  styleUrls: ['./color-select.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class ColorSelectComponent {

  @Input() colorsList!: ColorsList[];
  @Output() isSelected = new EventEmitter<boolean>();
  @Output() shareColor = new EventEmitter<string>();

  selectedColor: string = '#FFFFFF';

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

  colorsCompare(colorValue: string): boolean {
    return this.selectedColor === colorValue;
  }
}
