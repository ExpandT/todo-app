import { Component, ChangeDetectionStrategy } from '@angular/core';
import { FormControl } from '@angular/forms';


@Component({
  selector: 'todo-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class AppComponent {

  input = new FormControl('');

  allItems : string;

  items : any = [];

  localStorage : any = [];


  constructor() {
    this.allItems = (localStorage.getItem('allItems') !== null) ? JSON.parse(localStorage.getItem('allItems')!) : [];
    this.localStorage = this.allItems;
  }
  

  addItem() {
    if(this.input.value == '') {
        return
    };
   this.localStorage.unshift({
      name: this.input.value,
      done: false
    })
    this.input.setValue('');
    localStorage.setItem('allItems', JSON.stringify(this.localStorage));
    console.log(this.localStorage);
  }
  
  deleteTask(index: number) {
    this.localStorage.splice(index, 1);
  }

}
