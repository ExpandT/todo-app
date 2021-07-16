import {ChangeDetectionStrategy, ChangeDetectorRef, Component} from '@angular/core';
import {FormBuilder, FormControl, Validators} from '@angular/forms';
import {TodoData} from "../share/todo";
import {Priority} from "../share/priorities.enum";
import {ActivatedRoute} from "@angular/router";
import {PriorityIcon} from "../share/priority-icons.enum";
import {Color} from "../share/colors";
import {tap} from "rxjs/operators";


@Component({
  selector: 'todo-todo',
  templateUrl: './todo.component.html',
  styleUrls: ['./todo.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})

export class TodoComponent {

  colorsList: Color[] = [
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

  form = this.formBuilder.group({
    name: ['', Validators.required],
    radiobutton: [''],
    colorControl: ['#FFFFFF']
  });

  isSelectedDefaultColor = true;
  priorities = Priority;

  todoStorage: TodoData[] = this.activatedRoute.snapshot.data.todoData;

  get colorControlValue() {
    return this.form.get('colorControl')?.value;
  }

  get colorControl() {
    return this.form.get('colorControl');
  }

  get colorPriority(): Priority {
    if (this.colorControlValue === Priority.Urgent) {
      return Priority.Urgent
    }
    if (this.colorControlValue === Priority.Middle) {
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

  constructor(private formBuilder: FormBuilder, private readonly activatedRoute: ActivatedRoute, private readonly changeDetectorRef: ChangeDetectorRef) {
    this.form.get('colorControl')?.valueChanges.pipe(tap(res => {
      this.isSelectedDefaultColor = res === '#FFFFFF';
    })).subscribe()
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
    const newTodo = {
      id: Date.now(),
      name: this.nameControl.value,
      color: this.colorControlValue,
      priority: this.colorPriority
    }

    this.todoStorage = [newTodo, ...this.todoStorage];

    this.isSelectedDefaultColor = true;

    this.colorControl?.setValue('#FFFFFF')

    this.setDataToLocalStorage();
    this.form.reset({
      name: '',
      radiobutton: '',
      colorControl: '#FFFFFF'
    });

    this.changeDetectorRef.detectChanges();
  }

  deleteTask(index: number): void {
    this.todoStorage = this.todoStorage.filter((value, todoIndex) => index !== todoIndex);
    this.setDataToLocalStorage();
  }

  onChangePriority() {
    this.colorControl?.setValue(this.radioButtonValue.value);
    this.isSelectedDefaultColor = false;
  }

}
