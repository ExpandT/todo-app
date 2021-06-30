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

  input = this.formBuilder.control('');

  todoStorage : TodoData[] = [];


  constructor(private formBuilder: FormBuilder) {
    this.todoStorage =  this.getLocalStorageItems();
  }

  getLocalStorageItems(): TodoData[] {
    return (localStorage.getItem('allItems') !== null) ? JSON.parse(localStorage.getItem('allItems')!) : null;
  }

  setDataToLocalStorage(){
    localStorage.setItem('allItems', JSON.stringify(this.todoStorage));
  }

  addItem() {
    if(this.input.value == '') {
        return
    }

    const newTodo = {
      id: Date.now(),
      name: this.input.value,
      done: false
    }
    this.input.setValue('');

    this.todoStorage = [newTodo, ...this.todoStorage];

    this.setDataToLocalStorage();

  }

  deleteTask(index: any) {
   this.todoStorage = this.todoStorage.filter((value, index1) => index !== index1);
    this.setDataToLocalStorage();
  }

}
