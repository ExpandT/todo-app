import {ChangeDetectionStrategy, Component, Output, EventEmitter, Input} from '@angular/core';
import {ColorsList} from "../share/colors";

@Component({
  selector: 'color-control-dropdown-wrapper',
  templateUrl: './color-picker.component.html',
  styleUrls: ['./color-picker.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class ColorPickerComponent {

  @Input() colorFromRadioButton = '';
  @Output() isSelected = new EventEmitter<boolean>();
  @Output() shareColor = new EventEmitter<string>();

  colors: ColorsList[] = [
    {name: 'Red', value: '#Ff0000'},
    {name: 'Green', value: '#00ff00'},
    {name: 'Yellow', value: '#FFFF00'},
    {name: 'Blue', value: '#0000FF'},
    {name: 'Orange', value: '#FFA500'},
    {name: 'Pink', value: '#FFC0CB'},
    {name: 'White', value: '#FFFFFF'},
    {name: 'Black', value: '#000000'},
    {name: 'Purple', value: '#800080'},
    {name: 'Gray', value: '#808080'},
  ];

  shareState(selectedState: boolean): void {
    this.isSelected.emit(selectedState);
  }

  shareColorValue(selectedColor: string): void {
    this.shareColor.emit(selectedColor)
  }
}
