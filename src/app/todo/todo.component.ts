import {ChangeDetectionStrategy, Component} from '@angular/core';
import {FormBuilder, FormControl, Validators} from '@angular/forms';
import {TodoData} from "../share/todo";
import {Priorities} from "../share/priorities.enum";


@Component({
  selector: 'todo-todo',
  templateUrl: './todo.component.html',
  styleUrls: ['./todo.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})

export class TodoComponent {

  selectedColor = "";
  isSelected = true;
  priorities = Priorities;

  form = this.formBuilder.group({name: ['', Validators.required], radiobutton: ['']});

  todoStorage: TodoData[] = [];

  get colorPriority(): Priorities {
    return this.selectedColor === Priorities.Urgent ? Priorities.Urgent :
      this.selectedColor === Priorities.Middle ? Priorities.Middle : Priorities.Low;
  }

  get nameControl(): FormControl {
    return this.form.get('name') as FormControl;
  }

  get radioButtonValue(): FormControl {
    return this.form.get('radiobutton') as FormControl;
  }

  constructor(private formBuilder: FormBuilder) {
    this.todoStorage = this.getLocalStorageItems();
  }

  getLocalStorageItems(): TodoData[] {
    return (localStorage.getItem('allItems') !== null) ? JSON.parse(localStorage.getItem('allItems')!) : [];
  }

  setDataToLocalStorage(): void {
    localStorage.setItem('allItems', JSON.stringify(this.todoStorage));
  }

  addItem(): void {
    const newTodo = {
      id: Date.now(),
      name: this.nameControl.value,
      color: this.selectedColor,
      priority: this.colorPriority
    }
    this.form.reset();

    this.todoStorage = [newTodo, ...this.todoStorage];

    this.isSelected = true;

    this.selectedColor = '#FFFFFF';

    this.setDataToLocalStorage();
  }

  deleteTask(index: number): void {
    this.todoStorage = this.todoStorage.filter((value, todoIndex) => index !== todoIndex);
    this.setDataToLocalStorage();
  }

  selectHandler(selectedValue: boolean): void {
    this.isSelected = selectedValue;
  }

  colorHandler(selectedColor: string): void {
    this.selectedColor = selectedColor;
  }

  changeRadioButtonValue() {
    this.selectedColor = this.radioButtonValue.value;
    this.isSelected = false;
  }

}
