import {ChangeDetectionStrategy, Component} from '@angular/core';
import {TodoData} from "../share/todo";

@Component({
  selector: 'todo-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class SearchComponent{

    localStorageTodoData: TodoData[] = [];


  constructor() {
    this.localStorageTodoData = JSON.parse(localStorage.getItem('allItems')!);
  }

}


