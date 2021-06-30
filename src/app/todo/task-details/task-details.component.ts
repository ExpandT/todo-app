import {ChangeDetectionStrategy, Component, OnInit} from '@angular/core';
import {ActivatedRoute} from '@angular/router';
import { TodoData } from "../../share/todo";

@Component({
  selector: 'todo-task-details',
  templateUrl: './task-details.component.html',
  styleUrls: ['./task-details.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})

export class TaskDetailsComponent implements OnInit {

 id!: number;
 data!: TodoData[];
 todoItem?: { id: number, name: string, done: boolean };

  constructor(private readonly route: ActivatedRoute) {

  }
  get name(): string{
    return this.todoItem?.name ?? "unknown" ;
  }

  ngOnInit(): void {
    const idString = this.route.snapshot.paramMap.get('id');

    if (idString === null) {
      return;
    }

    this.id = parseInt(idString);
    this.data = this.route.snapshot.data.todoData;

    this.todoItem = this.getTodoItem(this.data);
  }

  getTodoItem(data: TodoData[]): TodoData | undefined {
    return data.find(todo => todo.id === this.id);
  }

}
