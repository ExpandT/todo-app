import {ChangeDetectionStrategy, Component, Input} from '@angular/core';
import {Color} from "../../share/colors";
import {ControlValueAccessor, FormControl, NG_VALUE_ACCESSOR, Validators} from "@angular/forms";


@Component({
  selector: 'color-select-dropdown',
  templateUrl: './color-select.component.html',
  styleUrls: ['./color-select.component.scss'],
  providers: [{
    provide: NG_VALUE_ACCESSOR,
    multi: true,
    useExisting: ColorSelectComponent
  }],
  changeDetection: ChangeDetectionStrategy.OnPush,
})

export class ColorSelectComponent implements ControlValueAccessor {

  @Input() colorsList!: Color[];

  @Input() set colorFromRadioButton(value: string) {
    this.selectedColor = value;
  };

  selectedColor: string = '';

  input = new FormControl('', Validators.pattern(/^[a-zA-Z0-9#]*$/));

  colorPickerState: boolean = false;
  isOpened: boolean = true;

  onChange = (color: string) => {
  };
  onTouched = () => {
  };

  writeValue(value: string): void {
    this.selectedColor = value;
  }

  registerOnChange(onChange: any): void {
    this.onChange = onChange;
  }

  registerOnTouched(onTouched: any): void {
    this.onTouched = onTouched;
  }

  setDisabledState(isDisabled: boolean): void {
  }

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
    this.onChange(this.selectedColor)
  }

  onFilterColors(value: string): Color[] {
    let color = this.colorsList.filter((color: Color) => color.value.replace(/\s/g, '').toLowerCase().indexOf(value.replace(/\s/g, '').toLowerCase()) === 0)
    if (color.length !== 7) {
    }
    return color;
  }

  colorsCompare(colorValue: string): boolean {
    return this.selectedColor === colorValue;
  }

  onFormSubmit(value: string) {
    if (value === null) {
      return;
    }
    let filteredColors = this.onFilterColors(value);
    this.selectedColor = filteredColors.map((res) => res.value).toString();
    this.onChange(this.selectedColor)
    if (this.selectedColor.length == 7) {
    }
    this.input.reset()
  }

}
