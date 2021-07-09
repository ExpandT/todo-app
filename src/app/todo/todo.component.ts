import {ChangeDetectionStrategy, Component} from '@angular/core';
import {FormBuilder, FormControl, Validators} from '@angular/forms';
import {TodoData} from "../share/todo";
import {Priority} from "../share/priorities.enum";
import {ActivatedRoute} from "@angular/router";
import {PriorityIcon} from "../share/priority-icons.enum";


@Component({
  selector: 'todo-todo',
  templateUrl: './todo.component.html',
  styleUrls: ['./todo.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})

export class TodoComponent {

  selectedColor = "";
  isSelectedDefaultColor = true;
  priorities = Priority;

  form = this.formBuilder.group({name: ['', Validators.required], radiobutton: ['']});

  todoStorage: TodoData[] = this.activatedRoute.snapshot.data.todoData;

  get colorPriority(): Priority {
    if (this.selectedColor === Priority.Urgent) {
      return Priority.Urgent
    }
    if (this.selectedColor === Priority.Middle) {
      return Priority.Middle
    }
    return Priority.Low;
  }

  get nameControl(): FormControl {
    return this.form.get('name') as FormControl;
  }

  get radioButtonValue(): FormControl {
    return this.form.get('radiobutton') as FormControl;
  }

  constructor(private formBuilder: FormBuilder, private readonly activatedRoute: ActivatedRoute) {
  }

  setDataToLocalStorage(): void {
    localStorage.setItem('allItems', JSON.stringify(this.todoStorage));
  }

  iconName(value: string): string {
    switch (value) {
      case Priority.Urgent:
        return PriorityIcon.UrgentIcon;
      case Priority.Middle:
        return PriorityIcon.MediumIcon;
      default:
        return PriorityIcon.LowIcon;
    }
  }

  addItem(): void {
    console.log(this.form.valid);
    const newTodo = {
      id: Date.now(),
      name: this.nameControl.value,
      color: this.selectedColor,
      priority: this.colorPriority
    }

    this.todoStorage = [newTodo, ...this.todoStorage];

    this.isSelectedDefaultColor = true;

    this.selectedColor = '#FFFFFF';

    this.setDataToLocalStorage();

    this.form.reset();

    this.form.controls['name'].setErrors(null);
  }

  deleteTask(index: number): void {
    this.todoStorage = this.todoStorage.filter((value, todoIndex) => index !== todoIndex);
    this.setDataToLocalStorage();
  }

  selectHandler(selectedValue: boolean): void {
    this.isSelectedDefaultColor = selectedValue;
  }

  setSelectedColor(selectedColor: string): void {
    this.selectedColor = selectedColor;
  }

  onChangePriority() {
    this.selectedColor = this.radioButtonValue.value;
    this.isSelectedDefaultColor = false;
  }

}
