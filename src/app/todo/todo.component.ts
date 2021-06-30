import {Component, ChangeDetectionStrategy} from '@angular/core';
import {FormBuilder} from '@angular/forms';
import {TodoData } from "../share/todo";


@Component({
  selector: 'todo-todo',
  templateUrl: './todo.component.html',
  styleUrls: ['./todo.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})

export class TodoComponent {

    input =  this.formBuilder.group({name: ''});

  todoStorage : TodoData[] = [];

  constructor(private formBuilder: FormBuilder)  {
    this.todoStorage =  this.getLocalStorageItems();
  }

  getLocalStorageItems(): TodoData[] {
    return (localStorage.getItem('allItems') !== null) ? JSON.parse(localStorage.getItem('allItems')!) : null;
  }

  setDataToLocalStorage(): void {
    localStorage.setItem('allItems', JSON.stringify(this.todoStorage));
  }

  addItem() : TodoData[] | void {
    if(this.input.value == '') {
        return;
    }
    const newTodo = {
      id: Date.now(),
      name: this.input.value.name,
      done: false
    }
    this.input.reset();

    this.todoStorage = [newTodo, ...this.todoStorage];

    this.setDataToLocalStorage();
  }

  deleteTask(index: number): void {
   this.todoStorage = this.todoStorage.filter((value, todoIndex) => index !== todoIndex);
    this.setDataToLocalStorage();
  }

}
