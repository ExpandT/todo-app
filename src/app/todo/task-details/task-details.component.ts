import {ChangeDetectionStrategy, Component, OnInit} from '@angular/core';
import {ActivatedRoute} from '@angular/router';
import {Priority} from "../../share/priorities.enum";

@Component({
  selector: 'todo-task-details',
  templateUrl: './task-details.component.html',
  styleUrls: ['./task-details.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})

export class TaskDetailsComponent implements OnInit {

 todoItem?: { id: number, name: string, color: string, priority: Priority };

  constructor(private readonly activatedRoute: ActivatedRoute) {

  }
  get name(): string{
    return this.todoItem?.name ?? "unknown" ;
  }

  ngOnInit(): void {
    this.todoItem = this.activatedRoute.snapshot.data.selectedItem;
  }

}
