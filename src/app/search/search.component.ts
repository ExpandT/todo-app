import {ChangeDetectionStrategy, Component} from '@angular/core';
import {TodoData} from "../share/todo";
import {ActivatedRoute} from "@angular/router";

@Component({
  selector: 'todo-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class SearchComponent{

    localStorageTodoData: TodoData[] = [];


  constructor(private readonly activatedRoute : ActivatedRoute) {
    this.localStorageTodoData = activatedRoute.snapshot.data.todoData;
  }

}


