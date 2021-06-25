import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { from } from 'rxjs';
import { map } from 'rxjs/operators';

@Component({
  selector: 'todo-task-details',
  templateUrl: './task-details.component.html',
  styleUrls: ['./task-details.component.scss']
})
export class TaskDetailsComponent implements OnInit {

 id!: number;
 data!: { id: number, name: string, done: boolean }[];
 todoItem: { id: number, name: string, done: boolean } | undefined;

 
  constructor(public readonly route: ActivatedRoute) { 

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

    const todoItem = this.data.find( todo => todo.id === this.id);
    this.todoItem = todoItem;
  }

}
