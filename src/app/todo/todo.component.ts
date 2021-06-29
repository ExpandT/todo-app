import { Component, OnInit , ChangeDetectionStrategy } from '@angular/core';
import { FormControl } from '@angular/forms';


@Component({
  selector: 'todo-todo',
  templateUrl: './todo.component.html',
  styleUrls: ['./todo.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class TodoComponent implements OnInit {


  input = new FormControl('');

  allItems : string;

  items : any = [];

  todoStorage : any = [];


  constructor() {
    this.allItems = (localStorage.getItem('allItems') !== null) ? JSON.parse(localStorage.getItem('allItems')!) : [];
    this.todoStorage = this.allItems;
  }


  addItem() {
    if(this.input.value == '') {
        return
    }
   this.todoStorage.unshift({
      id: Date.now(),
      name: this.input.value,
      done: false
    })
    this.input.setValue('');
    localStorage.setItem('allItems', JSON.stringify(this.todoStorage));
    console.log(this.todoStorage);
  }

  deleteTask(index: number) {
    this.todoStorage.splice(index, 1);
    localStorage.setItem('allItems', JSON.stringify(this.todoStorage))
  }

  ngOnInit(): void {
  }

}
